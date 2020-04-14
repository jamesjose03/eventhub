const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  collegeName: {
      type: String,
      default: ""
  },
  collegeCode: {
      type: String,
      default: ""
  },
  mobileNo: {
      type: Number,
      default: 0
  },
  events: {
      type: Array,
      default: null
  },
  history: {
      type: Array,
      default: null
  },
  payment: {
      type: Array,
      default: null
  },
  attendance: {
      type: Array,
      default: null
  },
  verified: {
    type: Boolean,
    default: false
  }
  
});

const College = mongoose.model('College', CollegeSchema);

module.exports = College;