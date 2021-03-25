const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const { GetJobs: getJobs } = require('../lib/api');

router.get('/show', isLoggedIn, (req, res) => {
    getJobs(req, res)
});

module.exports = router;