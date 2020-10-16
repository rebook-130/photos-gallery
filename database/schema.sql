DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

-- Make sure we're using our `blog` database
\c gallery;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE
);

CREATE TABLE IF NOT EXISTS rooms (
  id SERIAL PRIMARY KEY,
  owner_id INTEGER REFERENCES users(id),
  title VARCHAR(150),
  rating DECIMAL,
  reviews_num INTEGER,
  is_superhost BOOLEAN,
  address VARCHAR(150),
  is_saved BOOLEAN,
  list_name VARCHAR(75)
);

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES rooms(id),
  image_url VARCHAR(100),
  description VARCHAR(50)
);