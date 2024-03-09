const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
  // Puedes agregar más campos según tus necesidades
});

module.exports = mongoose.model('User', UserSchema);
