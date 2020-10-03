const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gallerys', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', function () {
  console.log('mongoDB connected');
});

module.exports = db;
