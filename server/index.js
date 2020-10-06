const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3001;
const db = require('../database/index.js'); // connect db to server
const Gallery = require('../database/Gallery.js');

app.use('/photogallery/:roomId', express.static(path.join(__dirname, '/../public')));
// app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET request
app.get('/api/photogallery/:roomId', (req, res) => {
  const { roomId } = req.params;

  Gallery.find({ room_id: roomId })
    .then((response) => {
      console.log('SERVER GET GALLERY SUCCESS');
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log('SERVER GET GALLERY ERROR', err);
      res.status(400).send();
    });
});

// PUT - update
app.patch('/api/photogallery/:roomId', (req, res) => {
  const room_id = req.params.roomId;
  const { name, isSaved } = req.body;
  console.log('req.params', req.params);
  console.log('room_Id', room_id);
  console.log('name, isSaved', name, isSaved);

  const updateContents = {
    $set: {
      'savedName': name,
      'isSaved': isSaved,
    },
  };

  // Gallery.updateOne(filter, updateContents)
  Gallery.findOneAndUpdate({'room_id': room_id}, updateContents)
    .then((response) => {
      console.log('SERVER UPDATE SAVE SUCCESS', response);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log('SERVER UPDATE SAVE ERROR', err);
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`);
});
