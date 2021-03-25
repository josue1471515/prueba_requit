const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const { getJobs } = require('../lib/api');

router.get('/show', isLoggedIn, (req, res) => {
    getJobs(req.user[0].token, res, 'jobs/show')
});

module.exports = router;