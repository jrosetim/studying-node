const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/indexRoute.js');
const productRoutes = require('./routes/productRoutes.js');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoutes );
app.use('/', productRoutes );

module.exports = app;