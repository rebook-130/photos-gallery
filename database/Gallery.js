const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  user_id: Number,
  room_id: Number,
  title: String,
  ratings: Number,
  number_of_reviews: Number,
  isSuperhost: Boolean,
  address: String,
  isSaved: Boolean,
  savedName: String,
  room_photos: [{ imageUrl: String, description: String }],
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
