const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done) => {

    user = {
        username: "nomb",
        password: "123123123"
    }
    if (true) {
        done(null, user, "se puedo");
    } else {
        done(null, false, "no se puede");
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser(async(id, done) => {});