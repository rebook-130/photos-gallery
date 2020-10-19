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
  address VARCHAR(150) UNIQUE,
  is_saved BOOLEAN,
  list_name VARCHAR(75)
);

CREATE TABLE IF NOT EXISTS photos (
  id BIGINT PRIMARY KEY,
  room_id INTEGER REFERENCES rooms(id),
  image_url VARCHAR(100),
  description VARCHAR(75)
);

COPY users FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/users.csv' CSV header;
COPY rooms FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/rooms1.csv' CSV header;
COPY rooms FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/rooms2.csv' CSV header;
COPY rooms FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/rooms3.csv' CSV header;
COPY rooms FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/rooms4.csv' CSV header;
COPY photos FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/photos1.csv' CSV header;
COPY photos FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/photos2.csv' CSV header;
COPY photos FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/photos3.csv' CSV header;
COPY photos FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/photos4.csv' CSV header;
COPY photos FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/photos5.csv' CSV header;