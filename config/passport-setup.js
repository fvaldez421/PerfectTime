var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var keys = require('./keys');
var db = require("../models");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.User.findById(id).then(function(user) {
    done(null, user);
  })
})

passport.use(
  new GoogleStrategy({
  // options for the google strat
  callbackURL: '/auth/google/redirect',
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
}, function(accessToken, refreshToken, profile, done) {
  // passport callback function
  console.log('passport callback function fired');

  db.User.findOne({
    where: {
      googleId: profile.id
    }
  }).then(function(currentUser) {
    if(currentUser) {
      console.log("user exists! > " + currentUser);
      done(null, currentUser);
    } else {
      db.User.create({
        name: profile.displayName,
        googleId: profile.id
      }).then(function(user) {
        console.log("new user: " + user);
        done(null, user);
      })
    }
  })
})

)