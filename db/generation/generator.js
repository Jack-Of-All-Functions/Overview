// Data generation script

/**
 * This script will create the JSON files which will hold all the
 * data needed to seed the database. An entry may look like:
 * {
 *   product_id: 1,
 *   name: 'lorem ipsum',
 *   slogan: 'dolor sit amet'
 *   description: 'consectetur adipisicing elit. Recusandae, quis.',
 *   category: 1,
 *   default_price: 140
 *   features: [
 *     {
 *       feature: 'lorem impsum',
 *       value: 'dolor sit amer consectetur adipiscing elit.'
 *     }
 *     //...
 *   ],
 *   styles: [
 *     {
 *       name: 'lorem',
 *       discount: .2,
 *     }
 *     //...
 *   ],
 *   photos: [
 *     {
 *       thumbnail_url: 'someurl.com',
 *       url: 'someurl.com'
 *     }
 *     //...
 *   ],
 *   skus: {
 *     'XS': 1,
 *     'S': 2,
 *     'M': 3,
 *     //...
 *   }
 * }
 */


const fs    = require('fs');
const lorem = require('./lorem');

const save = (fileName, data, cb) => {
  return new Promise((resolve, reject) => {
    const path = `${__dirname}/data/${fileName}`;
    fs.writeFile(path, data, (err) => {
      if(err) reject(err);

      cb();
      resolve();
    })
  })
}

const generateFeatures = (total) => {
  const features = new Array(total).fill(null).map(() => {
    // Each feature has a name and a value
    const feature = lorem(1);
    const value = lorem(5);

    return {
      feature: feature,
      value: value
    }
  });

  return features;
}

const generateStyles = (total) => {
  const styles = new Array(total).fill(null).map(() => {
    // Each style has a name, and discount amount
    const name = lorem(2);
    // Does this item have a discount?
    const hasDiscount = Boolean(Math.floor(Math.random() * 2));
    // Random percentage from 10% to 50%. Only calculate if stlye is on discount
    const discount = hasDiscount ? (Math.floor(Math.random() * 40)) / 100 : 0;

    return {
      name: name,
      discount: discount
    };
  });

  return styles;
}

const generatePhotos = (total) => {
  const photos = new Array(total).fill(null).map(() => {
    // All photos share the same urls for testing
    return {
      thumbnail_url: 'https://source.unsplash.com/random/80x60',
      url: 'https://source.unsplash.com/random/800x600'
    };
  });

  return photos;
}

const generateSkus = (category) => {
  const shoes = [7, 8, 9, 10, 11, 12];
  const clothes = ['XS', 'S', 'M', 'L', 'XL'];

  const skuArray = category === 1 ? shoes : clothes;

  const skus = skuArray.reduce((obj, value) => {
    // Create a random sku 1 - 1,000,000
    obj[value] = Math.floor(Math.random() * 1000000);
    return obj;
  }, {});

  return skus;
}

const generateProduct = (product_id) => {
  // Generate name
  const name = lorem(1);
  // Generate slogan
  const slogan = lorem(3);
  // Generate description
  const description = lorem(5);
  // Generate a category id from 1 to 4
  const category = Math.floor(Math.random() * 4) + 1;
  // Generate default price from $50 to $200
  const default_price = Math.floor(Math.random() * 150) + 50
  // Generate features, either 4 or 5
  const totalFeatures = Math.floor(Math.random() * 2) + 4;
  const features = generateFeatures(totalFeatures);
  // Generate styles, 3 to 5
  const totalStyles = Math.floor(Math.random() * 3) + 3;
  const styles = generateStyles(totalStyles);
  // Generate photos, one per style
  const photos = generatePhotos(totalStyles);
  // Generate skus based on category
  const skus = generateSkus(category);

  // Format data correctly before returning
  const product = {
    product_id: product_id,
    name: name,
    slogan: slogan,
    description: description,
    category: category,
    default_price: default_price,
    features: JSON.stringify(features),
    styles: JSON.stringify(styles),
    photos: JSON.stringify(photos),
    skus: JSON.stringify(skus)
  };

  return product;
}

const generateCategories = async () => {
  const categories = [
    'Shoes',
    'Shirts',
    'Jackets',
    'Pants'
  ];

  await save('categories.json', JSON.stringify(categories), () => console.log('Categories saved.'));
}

module.exports = generate = async (totalEntries, entriesPerFile) => {
  // How many total files are going to be made
  const totalFiles = totalEntries / entriesPerFile;

  const begin = Date.now();

  // First, create and save category data
  generateCategories();

  // Generate data and save each file
  for(let i = 0; i < totalFiles; i++) {
    const currentProgress = entriesPerFile + entriesPerFile * i;
    // Allocate an array for all products and fill with product data
    const products = new Array(entriesPerFile).fill(null).map((val, index) => generateProduct(index + currentProgress));
    // Save stringified product info to db
    await save(`products${i}.json`, JSON.stringify(products), () => console.log(`First ${currentProgress.toLocaleString()} entries saved`));
  }

  const end = Date.now();
  const elapsed = (end - begin) / 1000;
  console.log(`Generated all data in ${elapsed} seconds`);
}
