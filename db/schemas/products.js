module.exports = `products (
  id SERIAL PRIMARY KEY,
  name text,
  slogan text,
  description text,
  category integer REFERENCES categories (id),
  default_price numeric
);`