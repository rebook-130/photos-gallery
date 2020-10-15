DROP KEYSPACE [ IF EXISTS ] gallery
CREATE KEYSPACE gallery WITH replication =
{'class': 'SimpleStrategy', 'replication_factor' : 3};

CREATE TABLE users (
  user_id int,
  room_id int,
  name text,
  PRIMARY KEY (user_id)
);

CREATE TABLE rooms (
  room_id int,
  owner_id int,
  title text,
  ratings int,
  reviews int,
  superhost boolean,
  address text,
  isSaved boolean,
  listName text,
  PRIMARY KEY (room_id)
);

CREATE TABLE photos (
  photo_id int,
  room_id int,
  url text,
  description text,
  PRIMARY KEY(room_id, photo_id)
);