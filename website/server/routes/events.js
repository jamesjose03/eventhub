const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const Participant = require('../models/Participant');
const Student = require('../models/StudentProfile');

router.post('/addEvent', (req,res) => {
    const { collegeCode, eventName, tags, limit, deadline, date, time } = req.body;
    const eventID = Date.now();
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

router.delete('/deleteEvent/:id', (req,res) => {
    let id = req.params.id;
    Event.deleteOne({eventID: id}, (err, results) => {

    });
    res.send({ success: id });
})

router.post('/updateEvent/:id', (req,res) => {
    let id = req.params.id;
    let event = {}
    if (req.body.eventName) event.eventName = req.body.eventName;
    if (req.body.tags) event.tags = req.body.tags;
    if (req.body.limit) event.limit = req.body.limit;
    if (req.body.deadline) event.deadline = req.body.deadline;
    if (req.body.date) event.date = req.body.date;
    if (req.body.time) event.time = req.body.time;
  
    event = { $set: event }
    Event.update({eventID: id}, event).then(()=> {
      res.send(event);
    }).catch((err) => {
      console.log(err);
    })
  })

  router.get('/fetchEvents', (req,res) => {
    Event.find({}, (err, results) => {
      res.send(results);
    })
  })

  router.post('/registerEvent/:id', (req,res) => {
    const id = req.params.id;
    const eventID, eventName, name, email, phone = req.body;
    Student.findOne({id: id}, (err,results) => {
      if(results != null) {
        const newParticipant = new Participant({
          id,
          eventID,
          name, 
          eventName,
          email,
          phone
        })
        newParticipant
        .save()
        .then(participant => {
          res.send({status: "Success", p: participant});
        })
        .catch(error => res.send(error));
      }
      else {
        res.send({status: "Not a student!"});
      }
    })
  })

module.exports = router;