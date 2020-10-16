DROP KEYSPACE [ IF EXISTS ] gallery
CREATE KEYSPACE gallery WITH replication =
{'class': 'SimpleStrategy', 'replication_factor' : 1};

CREATE TABLE users (
  user_id int,
  name text,
  PRIMARY KEY (user_id)
);

CREATE TABLE photos_by_room_id (
  room_id int,
  owner_id int static,
  room_title text static,
  room_ratings int static,
  reviews int static,
  superhost boolean static,
  address text static,
  saved_to_list boolean static,
  list_name text static,
  photo_id int,
  url text,
  description text,
  PRIMARY KEY(room_id, photo_id)
);

-- CREATE TABLE rooms (
--   room_id int,
--   owner_id int,
--   title text,
--   ratings int,
--   reviews int,
--   superhost boolean,
--   address text,
--   isSaved boolean,
--   listName text,
--   PRIMARY KEY (room_id, owner_id) --??owner_id --
-- );
