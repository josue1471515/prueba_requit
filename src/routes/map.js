const express = require('express');
const { GetPoinst } = require('../lib/api');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const { getPoinst } = require('../lib/api');
router.get('/show', isLoggedIn, (req, res) => {
    getPoinst(req.user[0].token, res, 'maps/show')
});

module.exports = router;