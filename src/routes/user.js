const express = require('express');
const router = express.Router();
const axios = require('axios');
const { isLoggedIn } = require('../lib/auth');
const { getUser } = require('../repo/user.repo');

router.get('/show', isLoggedIn, async(req, res) => {
    const user = req.user[0];
    res.render('users/show', { user });
});

module.exports = router;