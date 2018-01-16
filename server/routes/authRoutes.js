const passport = require("passport");

module.exports = app => {
  // Call our strategy when a user visits a sertain URL
  app.get("/auth/google", passport.authenticate('google', {
    scope: ['profile', 'email']
    })
  );

  // Our google auth callback URL (passport will exchange googles code for the users profile)
  app.get("/auth/google/callback", passport.authenticate('google'));
};
