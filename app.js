const express = require('express')
const app = express()
const path = require('path')
const port = 8000
const routes = require('./routes/index')

const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', routes)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))