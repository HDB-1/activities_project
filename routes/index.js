const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

// const setupFile = require('../knexfile').development;
// const knex = require('knex')({
//     client: setupFile.client,
//     connection: setupFile.connection,
//     pool: { min: 0, max: 7 }
// })

router.get('/cities', (req, res) => {
    knex.select()
        .from('cities')
        .then((response) => {
            console.log(response)
            res.send(response)
        })
})

module.exports = router;