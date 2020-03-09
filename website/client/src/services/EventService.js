// client/src/services/EventService.js

import axios from "axios"

export default {
  async getEvents() {
    let res = await axios.get("http://localhost:8000/events");
    return res.data;
  },
  async getEventSingle(eventId) {
    let res = await axios.get("http://localhost:8000/events/" + eventId);
    return res.data;
  }
}