const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
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
  mobileno: {
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
  }
  
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;