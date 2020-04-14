const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  certificateID: {
      type: String,
      required: true,
      unique: true
  },
  name: {
      type: String,
      required: true
  },
  venue: {
      type: String,
      required: true
  },
  date: {
      type: Date,
      required: true
  },
  resource: {
      type: String,
      required: true
  },
  seal: {
      type: String
  },
  sign: {
      type: Array,
      default: null
  },
  ename: {
      type: Array,
      default: null
  }
  
});

const Certificate = mongoose.model('Certificate', CertificateSchema);

module.exports = Certificate;