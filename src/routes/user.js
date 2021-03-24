const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/show', (req, res) => {
    const user = {
        nombre: "josue eduardo ferrufino",
        cargo: "Ing. Redes",
        dato1: "algo"
    };
    res.render('users/show', { user });
});

module.exports = router;