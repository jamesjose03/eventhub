const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  eventID: {
      type: Number,
      required: true
  },
  collegeCode: {
      type: String,
      required: true
  },
  eventName: {
      type: String,
      required: true
  },
  tags: {
      type: Array,
      default: null
  },
  limit: {
      type: Number,
      default: 9999
  },
  deadline: {
      type: String,
      required: true
  },
  date: {
      type: String,
      required: true
  },
  time: {
      type: String,
      required: true
  }
  
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;