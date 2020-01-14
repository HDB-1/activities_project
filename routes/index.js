const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/cities', (req, res) => {
    knex.select()
    .from('cities')
    .then((response) => {
        console.log(response)
        res.send(response)
    })
})

router.get('/cities/:id', (req, res) => {

})

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
        console.log(error)
        res.send(error.hint)
    })
})

module.exports = router;