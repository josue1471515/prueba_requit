const express = require('express');
const router = express.Router();

router.get('/show', (req, res) => {

    const jobs = [
        { col1: "valo1", col2: "valo2", col3: "valo3", col4: "valo4" },
        { col1: "valo1", col2: "valo2", col3: "valo3", col4: "valo4" },
        { col1: "valo1", col2: "valo2", col3: "valo3", col4: "valo4" },
        { col1: "valo1", col2: "valo2", col3: "valo3", col4: "valo4" },
        { col1: "valo1", col2: "valo2", col3: "valo3", col4: "valo4" },

    ]
    res.render('jobs/show', { jobs });
});

module.exports = router;