const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require('../db/queries');

router.get('/cities', (req, res) => {
    queries.getAll()
    .then(function(shows) {
      res.status(200).json(shows);
      console.log(shows);
    })
    .catch(function(error) {
      res.send(error.hint);
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
      res.send(error.hint);
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

router.post('/cities', (req, res) => {
    queries.add(req.body)
    .then(function(showID) {
      return queries.getSingle(showID);
    })
    .then(function(show) {
      res.json(show);
    })
    .catch(function(error) {
      res.send(error);
    });
  });

module.exports = router;