const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

// Init our Express app
const app = express();

// Tell passport to use our GoogleStrategy
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
  }, (accessToken, refreshToken, profile, done) => {
    console.log('access token: ', accessToken);
    console.log('refresh: ', refreshToken);
    console.log('profile: ', profile);
  })
);

// Call our strategy when a user visits a sertain URL
app.get("/auth/google", passport.authenticate('google', {
  scope: ['profile', 'email']
  })
);

// Our google auth callback URL (passport will exchange googles code for the users profile)
app.get("/auth/google/callback", passport.authenticate('google'));

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("SERVER UP ON PORT: " + PORT));
