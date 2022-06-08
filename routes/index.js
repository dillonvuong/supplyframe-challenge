const express = require('express');
const router = express.Router();
const config = require('../config');
const { fetch } = require('undici');

var projects;
var projects_url = `${config.HACKADAY_API_URL}projects?api_key=${process.env.HACKADAY_API_KEY}`;

router.get('/', async (req, res) => {
    
    let details = [];
    await fetch(projects_url + `&page=${req.query.page}`)
        .then(res => res.json())
        .then(res => {
            projects = res.projects;
    });
    for( let project of projects ){
        var user_url = `${config.HACKADAY_API_URL}users/${project.owner_id}?api_key=${process.env.HACKADAY_API_KEY}`;
        await fetch(user_url)
            .then(res => res.json())
            .then(res => {
                // details will be an array like this [{"project": Object, "owner_name": String},...]
                details.push({"project": project, owner_name: res.screen_name});
        });
    }
    res.render('index', {
        details: details,
    });
});

module.exports = router;