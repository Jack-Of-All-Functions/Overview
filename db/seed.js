const schemas = require('./schemas/schemas');
const fs      = require('fs');
const db      = require('./db');

const open = (fileName) => {
  const path = `${__dirname}/generation/data/${fileName}`;

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if(err) reject(err);

      resolve(JSON.parse(data));
    })
  });
}

const insert = async (table, data) => {
  // Pull keys from data
  const keys = Object.keys(data[0]).join(', ');
  // Pull values from data
  const values = data.map((row) => {
    const entry = Object.values(row).map((value) => {
      if(typeof value === 'string') return `'${value}'`;
      return value
    }).join(', ');

    return `(${entry})`;
  }).join(', ');

  const query = `INSERT INTO ${table} (${keys}) VALUES ${values}`;
  await db(query);
}

const insertProducts = async (rows) => {
  // Pull relevent data from rows before inserting
  const products = rows.map((row) => {
    const { name, slogan, description, category, default_price } = row;

    return {
      name: name,
      slogan: slogan,
      description: description,
      category: category,
      default_price: default_price
    };
  });

  await insert('products', products)
}

const insertFeatures = async (rows) => {
  // Pull feature data from rows before inserting
  const features = rows.map((row) => {
    const { product_id, features } = row;

    // console.log('features product_id', product_id)

    return {
      product_id: product_id,
      features: features
    };
  });

  await insert('features', features);
}

const insertStyles = async (rows) => {
  // Pull style data from rows before inserting
  const styles = rows.map((row) => {
    const { product_id, styles } = row;
    // console.log('styles product_id', product_id)

    return {
      product_id: product_id,
      styles: styles
    }
  });

  await insert('styles', styles);
}

const createTables = () => {
  return new Promise(async (resolve, reject) => {
    const values = Object.values(schemas);

    for(let schema of values) {
      const query = `CREATE TABLE IF NOT EXISTS ${schema}`;
      await db(query);
      console.log('Created Table');
    }

    console.log('All tables created');
    resolve();
  })
}

module.exports = async (totalEntries, entriesPerFile) => {
  const begin = Date.now();

  const totalFiles = totalEntries / entriesPerFile;

  // Create tables
  await createTables();

  // Loop over files and insert data to db
  for(let i = 0; i < totalFiles; i++) {
    const beginFile = Date.now();
    // Load file
    const rows = await open(`products${i}.json`);

    await insertProducts(rows);
    await insertFeatures(rows);
    await insertStyles(rows);

    const endFile = Date.now();
    const elapsed = (endFile - beginFile) / 1000;
    const totalEntries = i * entriesPerFile + entriesPerFile;

    console.log(`Inserted first ${totalEntries.toLocaleString()} entries. Time elapsed: ${elapsed} seconds`);
  }

  const end = Date.now();
  const elapsed = (end - begin) / 1000;

  console.log(`Inserted ${totalEntries.toLocaleString()} entries in ${elapsed} seconds`);
}