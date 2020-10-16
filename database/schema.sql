DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

-- Make sure we're using our `blog` database
\c gallery;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR
);

CREATE TABLE IF NOT EXISTS rooms (
  id SERIAL PRIMARY KEY,
  owner_id INTEGER REFERENCES users(id),
  title VARCHAR,
  rating INTEGER,
  reviews_num INTEGER,
  is_superhost BOOLEAN,
  address VARCHAR,
  is_saved BOOLEAN,
  list_name VARCHAR
);

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES rooms(id),
  image_url VARCHAR,
  description VARCHAR
);