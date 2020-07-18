const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// Load User model
const User = require('../models/User');
const Student = require('../models/StudentProfile');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const keys = require('../config/keys');
const Token = require('../models/Token');
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
  const phone = req.body.phone;

  const emailData = {
    Name: 'email',
    Value: email
  };

  const phoneData = {
    Name: 'phone_number',
    Value: phone
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
    const newUser = new User({
      email,
      phone,
      id
    })
    newUser
      .save()
      .then((user) => {
        const newStudent = new Student({
          email,
          phone,
          id
        })
        newStudent
          .save()
          .then(student => {
            res.send({status: "Success"});
          })
      })
      .catch(err => console.log(err))
  })
});

// Login
router.post('/login', (req,res) => {
  const LoginData = {
    Username: req.body.email,
    Password: req.body.password
  }
  const AuthenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(LoginData);

  const UserData = {
    Username: req.body.email,
    Pool: userPool
  }
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(UserData);
  cognitoUser.authenticateUser(AuthenticationDetails, {
    onSuccess: data => {
      const username = data.idToken.payload.sub;
      const category = data.idToken.payload['custom:category']; 
      const token = Math.random().toString(36).slice(2);
      Token.findOne({id: username}, (err,results) => {
        console.log(results);
        if(results == null) {
          const newToken = new Token({
            id: username,
            token: token
          })
          newToken
          .save()
          .then((token) => {
            console.log('t= ' + token)
            res.send({status: "Success", id: username, cat: category, t: token});
          })
          .catch(error => {
            console.log(error);
          })
        }
        else {
          let t = {};
          t.token = token;
          t = {$set: t};
          Token.updateOne({id: username}, t).then(() => {
            res.send({status: "Success", id: username, cat: category, t: token});
          })
        }
      })
     
      
    },
    onFailure: err => {
      res.send(err.code);
    }
  })
});
// Logout
router.get('/logout/:id', (req, res) => {
  Token.deleteOne({id: req.params.id}, (err) =>{
    if(err) {
      res.send({success: false});
    }
    else {
      res.send({success: true});
    }
  })
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

router.get('/getBasicProfile/:id', (req,res) => {
  const id = req.params.id;
  Student.findOne({id: id}, (err,r) => {
    res.send(r);
  })
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