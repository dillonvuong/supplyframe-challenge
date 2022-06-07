const express = require('express');
const router = express.Router();
const config = require('./config');
const { fetch } = require('undici');

var projects;
var url = `${config.HACKADAY_API_URL}projects?api_key=${process.env.HACKADAY_API_KEY}`;
router.get('/', async (req, res) => {
    console.log('Fetching Projects')
    await fetch(url)
        .then(res => res.json())
        .then(res => {
            projects = res.projects;
    })
    res.render('index', {
        projects: projects,
    });
});

module.exports = router;