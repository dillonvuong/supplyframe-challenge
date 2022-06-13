const express = require('express');
const router = express.Router();
const config = require('../config');
const { fetch } = require('undici');

router.get("/", async (req, res) => {
    let page = 1;
    if (req.query.page) {
      page = parseInt(req.query.page);
    }
  
    const response = await fetch(
      `${config.HACKADAY_API_URL}/projects?api_key=${process.env.HACKADAY_API_KEY}&page=${page}`
    );
    const projectResults = await response.json();
    const lastPage = page >= projectResults.last_page;
  
    const details = await Promise.all(
      (projectResults.projects ?? []).map(async (project) => {
        const user_url = `${config.HACKADAY_API_URL}/users/${project.owner_id}?api_key=${process.env.HACKADAY_API_KEY}`;
        const userResponse = await fetch(user_url);
        const user = await userResponse.json();
        return {
          project,
          owner_name: user.screen_name,
          owner_image: user.image_url,
          owner_id: user.id,
        };
      })
    );
  
    res.render("index", {
      details: details,
      page: page,
      lastPage: lastPage,
    });
  });
  
  router.get("/project/:id", async (req, res) => {
    const projectResponse = await fetch(
      `${config.HACKADAY_API_URL}/projects/${req.params.id}?api_key=${process.env.HACKADAY_API_KEY}`
    );
    const project = await projectResponse.json();
    const user_url = `${config.HACKADAY_API_URL}/users/${project.owner_id}?api_key=${process.env.HACKADAY_API_KEY}`;
    const userResponse = await fetch(user_url);
    const owner = await userResponse.json();
  
    res.render("project", {
      project,
      owner,
    });
  });

module.exports = router;