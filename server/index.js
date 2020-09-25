const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const db = require('../database/index.js');

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Hello app.get!');
});

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`);
});