const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn } = require('../lib/auth');

// SINGIN
router.get('/signin', (req, res) => {
    res.render('auth/signin');
});


router.post('/signin',
    function(req, res, next) {
        next();
    },
    passport.authenticate('local.signin', {
        successRedirect: '/users/show',
        failureRedirect: '/signin',
        failureFlash: false
    }));

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/signin');
});


module.exports = router;