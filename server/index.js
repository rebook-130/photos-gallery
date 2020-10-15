/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3001;
const db = require('../database/index.js'); // connect db to server
const Gallery = require('../database/Gallery.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/rooms/:roomId', express.static(path.join(__dirname, '/../public')));

// GET request
app.get('/api/photogallery/:roomId', (req, res) => {
  const { roomId } = req.params;

  Gallery.find({ room_id: roomId })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log('SERVER GET GALLERY ERROR', err);
      res.status(400).send();
    });
});

// PATCH - update
app.patch('/api/photogallery/:roomId', (req, res) => {
  const room_id = req.params.roomId;
  const { name, isSaved } = req.body;

  const updateContents = {
    $set: {
      savedName: name,
      isSaved,
    },
  };

  Gallery.findOneAndUpdate({ room_id }, updateContents)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log('SERVER UPDATE SAVE ERROR', err);
      res.status(400).send();
    });
});

// POST add a photo
app.post('/api/photogallery/:roomId', (req, res) => {
  const room_id = req.params.roomId;
  const { imageUrl, description } = req.body;
  const addPhoto = {
    $push: {
      room_photos: {
        imageUrl,
        description,
      },
    },
  };
  console.log(addPhoto);
  Gallery.findOneAndUpdate({ room_id }, addPhoto, { new: true, upsert: true })
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
});

// DELETE A PHOTO
app.delete('/api/photogallery/:roomId', (req, res) => {
  const room_id = req.params.roomId;
  const { _id } = req.body;
  const toDelete = {
    $pull: {
      room_photos: { _id },
    },
  };

  Gallery.updateOne({ room_id }, toDelete)
    .then((response) => {
      res.status(204).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`);
});
