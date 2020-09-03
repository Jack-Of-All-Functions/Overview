const schemas = require('./schemas/schemas');
const { Pool } = require('pg');
const config = require('./config.json');

const pool = new Pool(config);

const query = async (query) => {
  // console.log(query);
  const client = await pool.connect();
  const { rows } = await client.query(query);
  client.release();

  return rows;
}

module.exports = query;