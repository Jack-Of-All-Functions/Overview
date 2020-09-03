// Data generation script
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

const generateStyles = (total, original_price, category) => {
  const styleId = Math.floor(Math.random() * 1000000)

  const styles = new Array(total).fill(null).map((val, i) => {
    const style_id = styleId + i;
    const name = lorem(2);
    // Does this item have a discount?
    const hasDiscount = Boolean(Math.floor(Math.random() * 2));
    // Random percentage from 10% to 50%. Only calculate if style is on discount
    const discount = hasDiscount ? (Math.floor(Math.random() * 40)) / 100 : 0;
    const sale_price = original_price * (1 - discount);

    const totalPhotos = Math.floor(Math.random() * 3) + 1;
    const photos = generatePhotos(totalPhotos);

    const skus = generateSkus(category)

    return {
      name: name,
      original_price: original_price,
      sale_price: sale_price,
      photos: photos,
      skus: skus
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
  const categories = [
    'Shoes',
    'Shirts',
    'Jackets',
    'Pants'
  ];
  // Generate name
  const name = lorem(1);
  // Generate slogan
  const slogan = lorem(3);
  // Generate description
  const description = lorem(5);
  // Randomly generate a category
  const categoryIndex = Math.floor(Math.random() * 4);
  const category = categories[categoryIndex];
  // Generate default price from $50 to $200
  const default_price = Math.floor(Math.random() * 150) + 50
  // Generate features, either 4 or 5
  const totalFeatures = Math.floor(Math.random() * 2) + 4;
  const features = generateFeatures(totalFeatures);
  // Generate styles, 3 to 5
  const totalStyles = Math.floor(Math.random() * 3) + 3;
  const styles = generateStyles(totalStyles, default_price, categoryIndex);

  // Format data correctly before returning
  const product = {
    product_id: product_id,
    name: name,
    slogan: slogan,
    description: description,
    category: category,
    default_price: default_price,
    features: JSON.stringify(features),
    styles: JSON.stringify(styles)
  };

  return product;
}

module.exports = async (totalEntries, entriesPerFile) => {
  // How many total files are going to be made
  const totalFiles = totalEntries / entriesPerFile;

  const begin = Date.now();

  // Generate data and save each file
  for(let i = 0; i < totalFiles; i++) {
    const currentProgress = entriesPerFile + entriesPerFile * i;
    // Allocate an array for all products and fill with product data
    const products = new Array(entriesPerFile).fill(null).map((val, index) => {
      // Calculate base
      const base = entriesPerFile * i;
      // Add index + 1 (Postgres is 1 indexed)
      const product_id = base + index + 1;
      return generateProduct(product_id)
    });
    // Save stringified product info to db
    await save(`products${i}.json`, JSON.stringify(products), () => console.log(`First ${currentProgress.toLocaleString()} entries saved`));
  }

  const end = Date.now();
  const elapsed = (end - begin) / 1000;
  console.log(`Generated all data in ${elapsed} seconds`);
}
