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
  }
  
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;