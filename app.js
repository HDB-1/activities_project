const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const routes = require('./routes/index')
const bodyParser = require("body-parser");

app.use(express.static('views'));
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', routes)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;