const express = require('express');
const bodyParser = require('body-parser');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/reviews', reviewRoutes);

module.exports = app;
