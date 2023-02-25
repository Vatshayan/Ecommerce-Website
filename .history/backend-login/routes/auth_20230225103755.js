const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (user) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      const newUser = new User({ name, email, password });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          const payload = { _id: user._id, name: user.name, email: user.email };
          jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' }, (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          });
        } else {
          return res.status(400).json({ message: 'Password incorrect'
            });
        }
        });  

    });
});
   
    

