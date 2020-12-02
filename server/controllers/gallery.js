/* eslint-disable radix */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const db = require('../../database');

exports.getRoomInfo = (req, res) => {
  const room = req.params.roomId;
  const q = `select * from rooms r inner join photos p on r.id = p.room_id where r.id = ${room}`;
  // const q = `select * from rooms r where r.id = ${room}`;
  db.query(q, (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(200).send(data.rows);
    }
  });
};

exports.updateRoomInfo = (req, res) => {
  const room = req.params.roomId;
  const { name, isSaved } = req.body;
  const q = 'update rooms set is_saved=$1, list_name=$2 where id=$3 returning *;';
  db.query(q, [isSaved, name, room], (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(200).send(data.rows);
    }
  });
};

exports.addPhoto = (req, res) => {
  const room = req.params.roomId;
  const { image_url, description } = req.body;
  const q = 'insert into photos(id, room_id, image_url, description) values ($1, $2, $3, $4);';
  const nextPhotoId = 'select id from photos where room_id = $1 order by id desc limit 1;';
  db.query(nextPhotoId, [room], (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      db.query(q, [parseInt(data.rows[0].id) + 1, room, image_url, description], (err2) => {
        if (err2) {
          console.log(err2.stack);
        } else {
          res.status(201).send();
        }
      });
    }
  });
};

exports.deletePhoto = (req, res) => {
  const { photoId } = req.params;
  const q = 'delete from photos where id=$1';
  db.query(q, [photoId], (err) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(204).end();
    }
  });
};
