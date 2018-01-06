const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Init our Express app
const app = express();

// Tell passport to use our GoogleStrategy
passport.use(new GoogleStrategy());

app.get("/", (req, res) => {
  res.send({"Hello": "World"});
});

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("SERVER UP ON PORT: " + PORT));
