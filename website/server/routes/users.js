const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/User');
const Student = require('../models/StudentProfile')
const { forwardAuthenticated } = require('../config/auth');


// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2, category } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.send({"status": "error", "errors": errors})
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.send({"status": "error", "errors": errors})
      } else {
        const newUser = new User({
          name,
          email,
          password,
          category
        });
        if(category == "Student") {
            const newStudent = new Student({
              name,
              email
           });
           newStudent
           .save()
           .then(student => {
             res.send({"status": "Student Registered"})
           })
           .catch(err => {
             console.log("Error!")
           }) 
        
        }
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.send({"status": "Success", "user": user.name, "email": user.email, "category": user.category })
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login',
  passport.authenticate('local', {failWithError: true}),
  function(req, res) {
    res.json({"status":"Success", "user": req.user.name, "category": req.user.category, "email": req.user.email });
  },
  function(err,req,res,next) {
    console.log("Error!")
    console.log(err)
    res.json({"e": err.name})
  }
  
  );
// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

//View Profile
router.get('/viewProfile/:email', (req,res) => {
  let email = req.params.email;
  User.findOne({email: email}, (err, results) => {
    if(err) {
      throw err;
    }
    res.send(results);

  })
})

router.get('/getUserID/:email', (req,res) => {
  let email = req.params.email;
  let ID = [];
  
  User.findOne({email: email}).then(user => {
    res.send(user._id);
  }).catch(err => console.log(err));
  
})

router.post('/updateProfile/:email', (req,res) => {
  let email = req.params.email;
  let user = {}
  if (req.body.name) user.name = req.body.name;
  if (req.body.email) user.email = req.body.email;
  if (req.body.college) user.college = req.body.college;
  if (req.body.graduationYear) user.graduationYear = req.body.graduationYear;
  if (req.body.mobileno) user.mobileno = req.body.mobileno;

  user = { $set: user }
  Student.update({email: email}, user).then(()=> {
    res.send(user);
  }).catch((err) => {
    console.log(err);
  })
})

module.exports = router;