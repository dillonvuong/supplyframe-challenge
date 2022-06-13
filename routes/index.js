const express = require('express');
const router = express.Router();
const config = require('../config');
const { fetch } = require('undici');

var projects;

router.get('/', async (req, res) => {
    let details = [];
    let page;
    let lastPage = false;
    if (!req.query.page){
        page = 1;
    }
    else{
        page = parseInt(req.query.page);
    }
    await fetch(`${config.HACKADAY_API_URL}/projects?api_key=${process.env.HACKADAY_API_KEY}` + `&page=${page}`)
        .then(res => res.json())
        .then(res => {
            projects = res.projects;
            lastPage = (page >= res.last_page)
    });
    for( let project of projects ){
        var user_url = `${config.HACKADAY_API_URL}/users/${project.owner_id}?api_key=${process.env.HACKADAY_API_KEY}`;
        await fetch(user_url)
            .then(res => res.json())
            .then(res => {
                details.push(
                    {project: project, 
                    owner_name: res.screen_name, 
                    owner_image: res.image_url, 
                    owner_id: res.id});
        });
    }
    res.render('index', {
        details: details,
        page: page,
        lastPage: lastPage,
    });
});

router.get('/project/:id', async (req, res) => {
    let project;
    let owner;
    let similarProjects = [];
    await fetch(`${config.HACKADAY_API_URL}/projects/${req.params.id}?api_key=${process.env.HACKADAY_API_KEY}`)
        .then(result => result.json())
        .then(result => {
            project = result;
        })
        .catch( error => {
            res.send(error);
        });
    var user_url = `${config.HACKADAY_API_URL}/users/${project.owner_id}?api_key=${process.env.HACKADAY_API_KEY}`;
    await fetch(user_url)
        .then(result => result.json())
        .then(result => {
            owner = result;
    });
    res.render('project', {
        project: project,
        owner: owner,
    })
});

module.exports = router;