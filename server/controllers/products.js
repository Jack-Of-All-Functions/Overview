const db = require('../../db/db');

const generateQuery = (table, product_id) => {
}

const productInformation = (product_id) => {
  return new Promise(async (resolve, reject) => {
    const begin = Date.now();
    const query = `SELECT * FROM products FULL JOIN features ON products.id = features.product_id WHERE products.id = ${product_id};`

    const end = Date.now();
    const elapsed = end - begin;

    console.log(`Queried product information in ${elapsed}ms`)

    const res = await db(query).catch(err => reject(err));
    resolve(res[0]);
  });
}

const styles = (product_id) => {
  return new Promise(async (resolve, reject) => {
    const begin = Date.now();
    const query = `SELECT styles FROM styles WHERE product_id = ${product_id};`

    const end = Date.now();
    const elapsed = end - begin;

    console.log(`Queried styles in ${elapsed}ms`);

    const res = await db(query).catch(err => reject(err));
    resolve(res[0]);
  })
}

const list = (page = 0, count = 5) => {
  return new Promise(async (resolve, reject) => {
    count = Number(count);
    const start = page * count;
    const endIndex = start + count;

    console.log('Start', start);
    console.log('End', endIndex);

    const begin = Date.now();
    const query = `SELECT * FROM products WHERE id >= ${start} AND id <= ${endIndex};`

    const end = Date.now();
    const elapsed = end - begin;

    console.log(`Queried product list in ${elapsed}ms`);

    const res = await db(query).catch(err => reject(err));
    resolve(res);
  })
}

module.exports = {
  productInformation: productInformation,
  styles: styles,
  list: list
}