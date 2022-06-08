const express = require('express');
const router = express.Router();
const https = require('https');
const config = require('../config');
const { fetch } = require('undici');

var projects;
var url = `${config.HACKADAY_API_URL}projects?api_key=${process.env.HACKADAY_API_KEY}`;
// async function getProjects() {
//     await fetch(url)
//             .then(res => res.json())
//             .then(res => {
//                 projects = res;
//             })
//   }
// getProjects();

router.get('/', async (req, res) => {
    if (!projects) {
        await fetch(url)
            .then(res => res.json())
            .then(res => {
                projects = res;
            })
    }
    res.send(projects);
    // res.render('index');
});

module.exports = router;



// https.get(config.HACKADAY_API_URL + `projects?api_key=${process.env.HACKADAY_API_KEY}`, (res) => {
//     console.log("Called API for projects");
//     let data = '';
//     res.on('data', (chunk) => {
//         data += chunk;
//     });
//     res.on('end', function(){
//         projects = JSON.parse(data);
//     });
// });