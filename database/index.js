const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photogallary', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', function() {
  console.log("mongoDB connected")
});