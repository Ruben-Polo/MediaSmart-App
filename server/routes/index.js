const express = require('express');
const router  = express.Router();
const fetch = require('node-fetch');
const memoricache = require('memory-cache');


/* GET home page */
var cache = duration => {
  return (req, res, next) => {
    let key = "_express_" + req.originalUrl || req.url;

    let cachedBody = memoricache.get(key);

    if (cachedBody) {
      res.send(cachedBody);

      return;
    } else {
      res.sendResponse = res.send;

      res.send = body => {
        memoricache.put(key, body, duration * 1000);

        res.sendResponse(body);
      };

      next();
    }
  };
};
router.get('/', cache(400), (req, res, next) => {
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
