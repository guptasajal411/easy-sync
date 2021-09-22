const express = require('express');
const app = express();

const syncController = require('../controllers/syncController.js');
const authController = require('../controllers/authController.js');

app
    .route("/")
    .get(authController.getHomepage);

app
    .route("/register")
    .get(authController.getRegister);

app
    .route("/login")
    .get(authController.getLogin);

module.exports = app;