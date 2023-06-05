// models/Wish.js

const mongoose = require('mongoose');

const WishSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Wish = mongoose.model('wish', WishSchema);