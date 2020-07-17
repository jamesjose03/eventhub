const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  token: {
      type: String,
      required: true,
      unique: true
  }
});

const Token = mongoose.model('Token', TokenSchema);

module.exports = Token;