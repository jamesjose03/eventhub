const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// Load User model
const User = require('../models/User');
const Student = require('../models/StudentProfile');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const keys = require('../config/keys');
global.fetch = require("node-fetch");

const poolData = {
  UserPoolId: keys.cognito.poolID || process.env['COGNITOUSERPOOLID'],
  ClientId: keys.cognito.clientID || process.env['COGNITOCLIENTID']
}

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


// Register
router.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const phoneNo = req.body.phoneNo;

  const emailData = {
    Name: 'email',
    Value: email
  };

  const phoneData = {
    Name: 'phone_number',
    Value: phoneNo
  };

  const categoryData = {
    Name: 'custom:category',
    Value: 'Student'
  }

  const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
  const phoneAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(phoneData);
  const categoryAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(categoryData);

  userPool.signUp(email, password, [emailAttribute, phoneAttribute, categoryAttribute], null, (err, data) => {
    if (err) {
      res.send(err.message);
    }
    const id = data.userSub;
    const phone = phoneNo;
    const newUser = new User({
      email,
      phone,
      id
    })
    newUser
      .save()
      .then((user) => {
        if (user && data.user) {
          res.send({ status: "Success" });
        }
        else {
          res.send({ status: "Error" });
        }
      })
      .catch(err => console.log(err))
  })
});

// Login
router.post('/login', (req,res) => {
  //To be done 
});
// Logout
router.get('/logout', (req, res) => {
  //To do
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

router.get('/basicProfile/:id', (req,res) => {

})

module.exports = router;