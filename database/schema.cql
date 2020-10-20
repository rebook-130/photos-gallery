DROP KEYSPACE gallery;
CREATE KEYSPACE gallery WITH replication =
{'class': 'SimpleStrategy', 'replication_factor' : 1};

USE gallery;

CREATE TABLE users (
  user_id int,
  name text,
  PRIMARY KEY (user_id)
);

CREATE TABLE photos_by_room_id (
  room_id int,
  owner_id int static,
  room_title text static,
  room_rating float static,
  reviews int static,
  superhost boolean static,
  address text static,
  saved_to_list boolean static,
  list_name text static,
  photo_id bigint,
  url text,
  description text,
  PRIMARY KEY(room_id, photo_id)
);

COPY users (user_id, name) FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/users.csv' with header=true and delimiter =',';
COPY photos_by_room_id (room_id, owner_id, room_title, room_rating, reviews, superhost, address, saved_to_list, list_name, photo_id, url,description) FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/photos1.csv' with header=true and delimiter =',';
COPY photos_by_room_id (room_id, owner_id, room_title, room_rating, reviews, superhost, address, saved_to_list, list_name, photo_id, url,description) FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/photos2.csv' with header=true and delimiter =',';
COPY photos_by_room_id (room_id, owner_id, room_title, room_rating, reviews, superhost, address, saved_to_list, list_name, photo_id, url,description) FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/photos3.csv' with header=true and delimiter =',';
COPY photos_by_room_id (room_id, owner_id, room_title, room_rating, reviews, superhost, address, saved_to_list, list_name, photo_id, url,description) FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/photos4.csv' with header=true and delimiter =',';
COPY photos_by_room_id (room_id, owner_id, room_title, room_rating, reviews, superhost, address, saved_to_list, list_name, photo_id, url,description) FROM '/Users/anna/studyspace/HR-SEI/projects/sdc/photo-gallery-service/database/CSV/photos5.csv' with header=true and delimiter =',';