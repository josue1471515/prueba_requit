const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn } = require('../lib/auth');


// SINGIN
router.get('/signin', (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', (req, res, next) => {
    console.log("22222222222222222222222")
    passport.authenticate('local.signin', {
        successRedirect: '/index',
        failureRedirect: '/signin',
        failureFlash: false
    })(req, res, next);
});

router.post('/signin', (req, res, next) => {
    req.check('username', 'Username is Required').notEmpty();
    req.check('password', 'Password is Required').notEmpty();
    const errors = req.validationErrors();
    if (errors.length > 0) {
        req.flash('message', errors[0].msg);
        res.redirect('/signin');
    }
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: false
    })(req, res, next);
});

module.exports = router;