const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    required: true
  },
  college: {
    type: String,
    default: ""
  },
  graduationYear: {
    type: Number,
    default: 0
  },
  registered: {
    type: Array,
    default: null
  },
  wishlist: {
      type: Array,
      default: null
  },
  certificate: {
      type: Array,
      default: null
  },
  phone: {
    type: Number,
    default: 0
  },
  paymentHistory: {
    type: Array,
    default: null
  },
  attended: {
    type: Array,
    default: null
  },
  verified: {
    type: Boolean,
    default: false
  },
  bio: {
    type: String,
    default: "Student"
  }
  
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;