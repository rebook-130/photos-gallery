const mongoose = require('mongoose');

// docker ver
// mongoose.connect('mongodb://database/docker_gallery', { useNewUrlParser: true, useUnifiedTopology: true });
// development
mongoose.connect('mongodb://localhost/gallerys', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => {
  console.log('mongoDB connected');
});

module.exports = db;
