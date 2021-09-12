const express = require('express');
const app = express();

const controller = require('../controllers/controller.js');

app
    .route("/")
    .get(controller.getHomepage);

app
    .route("/api")
    .get(controller.getAPI);

module.exports = app;