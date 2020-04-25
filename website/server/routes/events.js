const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.post('/addEvent', (req,res) => {
    const { eventID, collegeCode, eventName, tags, limit, deadline, date, time } = req.body;
    const newEvent = new Event({
        eventID,
        collegeCode,
        eventName,
        tags,
        limit,
        deadline,
        date,
        time
    })
    newEvent.save().then(event => {
        res.send({ status: "Success" });
    }).catch(error => console.log(error))
});

router.get('/eventsList', function(req, res) {
    Event.find({}, function(err, events) {
      let eventsMap = {};
  
      events.forEach(function(event) {
        eventsMap[event.eventName] = event;
      });
  
      res.send({ status: "Success", events: eventsMap});  
    });
  });

module.exports = router;