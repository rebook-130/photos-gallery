DROP KEYSPACE [ IF EXISTS ] gallery
CREATE KEYSPACE gallery WITH replication =
{'class': 'SimpleStrategy', 'replication_factor' : 3};

CREATE TABLE rooms (
  room_id int,
  title text,
  ratings int,
  reviews int,
  superhost boolean,
  address text,
  isSaved boolean,
  listName text,
  PRIMARY KEY (room_id)
);