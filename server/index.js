/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('./controllers/gallery.js');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// this must be changed for proxy to work
app.use('/rooms/:roomId', express.static(path.join(__dirname, '/../public')));

// GET room info + photos
app.get('/api/rooms/:roomId/photos', (req, res) => {
  controllers.getRoomInfo(req, res);
});

// POST a photo
app.post('/api/rooms/:roomId/photo', (req, res) => {
  controllers.addPhoto(req, res);
});

// DELETE a photo
app.delete('/api/rooms/photos/:photoId', (req, res) => {
  controllers.deletePhoto(req, res);
});

// PATCH - update room info
app.patch('/api/rooms/:roomId/list', (req, res) => {
  controllers.updateRoomInfo(req, res);
});

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`);
});
