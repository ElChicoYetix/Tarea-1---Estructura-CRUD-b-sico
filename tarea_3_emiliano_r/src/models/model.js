const { Schema, model } = require('mongoose');

module.exports = model('User', {
    name: String,
    email: String,
    password: String
});
