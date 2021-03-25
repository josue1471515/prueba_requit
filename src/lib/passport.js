const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { authUser } = require('./api');
const { getUser } = require('../repo/user.repo');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done) => {
    authUser(username, password, done);
}));

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser(async(username, done) => {
    const row = await getUser(username);
    done(null, row);
});