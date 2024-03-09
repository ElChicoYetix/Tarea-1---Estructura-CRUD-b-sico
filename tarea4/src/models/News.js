const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  // Agrega aquí cualquier otro campo que necesites
});

module.exports = mongoose.model('News', NewsSchema);
