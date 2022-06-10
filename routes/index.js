const express = require('express');
const router = express.Router();
const config = require('../config');
const { fetch } = require('undici');

var projects;
var projects_url = `${config.HACKADAY_API_URL}projects?api_key=${process.env.HACKADAY_API_KEY}`;

// this is just for development
var development_pre_generated_data = require('./pregenerated.json');
projects = development_pre_generated_data.projects;

router.get('/', async (req, res) => {
    let details = [];
    console.log(projects_url)
    // await fetch(projects_url + `&page=${req.query.page}`)
    //     .then(res => res.json())
    //     .then(res => {
    //         projects = res.projects;
    // });
    for( let project of projects ){
        var user_url = `${config.HACKADAY_API_URL}users/${project.owner_id}?api_key=${process.env.HACKADAY_API_KEY}`;
        await fetch(user_url)
            .then(res => res.json())
            .then(res => {
                details.push(
                    {"project": project, 
                    owner_name: res.screen_name, 
                    owner_image: res.image_url, 
                    owner_id: res.id});
        });
    }
    res.render('index', {
        details: details,
    });
});

module.exports = router;