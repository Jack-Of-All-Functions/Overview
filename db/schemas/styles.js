module.exports = `styles (
  id SERIAL PRIMARY KEY,
  product_id integer REFERENCES products (id),
  styles json
);`