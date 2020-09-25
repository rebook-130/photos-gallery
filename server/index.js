const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3001;
const db = require('../database/index.js'); // connect db to server
const Gallery = require('../database/Gallery.js');

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello app.get!');
});

app.get('/api/photogallery/:roomId', (req, res) => {
  // console.log('req.params', req.params.roomId);
  const { roomId } = req.params;

  Gallery.find({ 'room_id': roomId })
    .then((response) => {
      console.log('SERVER GET GALLERY SUCCESS', response);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log('SERVER GET GALLERY ERROR', err);
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`);
});
