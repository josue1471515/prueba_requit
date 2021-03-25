const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');

router.get('/show', isLoggedIn, (req, res) => {

    const points = [
        { name: "Josue", point: [51.52, -0.09] },
        { name: "Marco", point: [51.53, -0.09] },
        { name: "Maria", point: [51.54, -0.09] },
        { name: "Juan", point: [51.55, -0.09] },
        { name: "Pedro", point: [51.56, -0.09] },

    ]
    const jsonValue = points;
    res.render('maps/show', { jsonValue });
});

module.exports = router;