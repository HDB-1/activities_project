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
    console.log(req.body)
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

router.put('/cities/:id', (req, res) => {
    queries.update(req.params.id, req.body)
    .then(function() {
      return queries.getSingle(req.params.id);
    })
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      res.send(error);
    });
  });
  
  router.delete('/cities/:id', function(req, res, next) {
    queries.getSingle(req.params.id)
    .then(function(show) {
      queries.deleteItem(req.params.id)
      .then(function() {
        res.status(200).json(show);
      })
      .catch(function(error) {
        next(error);
      });
    }).catch(function(error) {
      next(error);
    });
  });
  
module.exports = router;