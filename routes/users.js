const express = require('express');
const router = express.Router();
const config = require('../config');
const { fetch } = require('undici');

// endpoint for hover on userpage
router.get('/:id', async (req, res) => {
    let users_url = `${config.HACKADAY_API_URL}/users/${req.params.id}?api_key=${process.env.HACKADAY_API_KEY}`;
    await fetch(users_url)
        .then(result => result.json())
        .then(result => {
            if( result.id ){ // TODO: this is kinda hacky because if user isn't found there won't be an id in the result
                res.send(result);
            }
            else{
                res.status(404).render('404');
            }
        })
        .catch( error => {
            res.send(error);
        });
});
module.exports = router;