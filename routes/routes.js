const express = require('express');
const app = express();

const syncController = require('../controllers/syncController.js');
const authController = require('../controllers/authController.js');

app
    .route("/")
    .get(authController.getHomepage);

app
    .route("/register")
    .get(authController.getRegister)
    .post(authController.postRegister);

app
    .route("/login")
    .get(authController.getLogin)
    .post(authController.postLogin);

app
    .route("/user/:userID")
    .get(syncController.geteasysync)
    .post(syncController.posteasysync)
    
app
    .route("/user/:userID/signOut")
    .post(authController.postSignOut);

module.exports = app;