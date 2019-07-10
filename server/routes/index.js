const express = require('express');
const router  = express.Router();
const fetch = require('node-fetch');

/* GET home page */
router.get('/', (req, res, next) => {
fetch('http://work.mediasmart.io/?page=0&page_size=20',{
        headers: {
          'Authorization': 'mediasmart2019'
        },
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
        res.json(data);
    })
    .catch(function(err) {
        console.error(err);
    });
  });

module.exports = router;
