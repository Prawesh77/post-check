const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: {type: String},
    lastName: { type: String, required: true },
    address: {type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });
const User = mongoose.model('User', userSchema);
module.exports = User; 