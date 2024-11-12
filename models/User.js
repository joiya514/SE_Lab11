const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure email is unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Create and export the User model
module.exports = mongoose.model('User', UserSchema);
