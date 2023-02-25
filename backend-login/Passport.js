const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('./models/user');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      bcrypt.compare(password, user.password, function(err, res) {
        if (err) return done(err);
        if (res === false) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }
        return done(null, user);
      });
    });
  }
));
