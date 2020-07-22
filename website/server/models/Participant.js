const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
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
  phone: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  eventID: {
      type: String,
      required: true
  },
  eventName: {
      type: String,
      required: true
  }
});

const Participant = mongoose.model('Participant', ParticipantSchema);

module.exports = Participant;