const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require('../db/queries');

// router.get('/cities', (req, res) => {
//     knex.select()
//     .from('cities')
//     .then((response) => {
//         console.log(response)
//         res.send(response)
//     })
// })

router.get('/cities', (req, res) => {
    queries.getAll()
    .then(function(shows) {
      res.status(200).json(shows);
      console.log(shows);
    })
    .catch(function(error) {
      res.send(error);
      console.log(error);
    });
  });

  router.get('/cities/:id', (req, res) => {
    queries.getSingle(req.params.id)
    .then(function(cities) {
      res.status(200).json(cities);
      console.log(shows);
    })
    .catch(function(error) {
      res.send(error);
      console.log(error);
    });
  });

router.get('/citiessearch', (req, res) => {
    knex.select()
    .from('cities')
    .where(req.query)
    .on('query-response', () => {})
    .then(function(result) {
        res.send(result);
        console.log(result);
    })
    .catch(function (error) {
        res.send(error.hint);
        console.log(error);
    })
})

module.exports = router;