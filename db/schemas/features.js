module.exports = `features (
  id SERIAL PRIMARY KEY,
  product_id integer REFERENCES products (id),
  features json
);`