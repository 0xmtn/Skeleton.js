var LocalStrategy = require('passport-local').Strategy
  , FacebookStrategy = require('passport-facebook').Strategy
  , GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

module.exports = function (passport, config) {
    var fb_conf = config.auth.facebook;
    var goog_conf = config.auth.google;

    passport.serializeUser(function(auth, done) {

    });

    passport.deserializeUser(function(ser_user, done){

    });

    passport.use(new LocalStrategy(function(username, password, done) {

      }
    ));

    passport.use(new FacebookStrategy({
        clientID: fb_conf.clientID,
        clientSecret: fb_conf.clientSecret,
        callbackURL: fb_conf.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {

    }));

    passport.use(new GoogleStrategy({
        clientID: goog_conf.clientID,
        clientSecret: goog_conf.clientSecret,
        callbackURL: goog_conf.callbackURL
      },
      function(accessToken, refreshToken, profile, done) {

      }
    ));


    return passport;
}
