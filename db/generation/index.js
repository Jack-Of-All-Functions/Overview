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
 *       style_id: 1,
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
    fs.writeFile(fileName, data, (err) => {
      if(err) reject(err);

      cb();
      resolve();
    })
  })
}

module.exports = generateData = (totalEntries, entriesPerFile) => {
  // How many total files are going to be made
  const totalFiles = totalEntries / entriesPerFile;

  // Generate data and save each file
}