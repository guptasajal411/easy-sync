const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require(path.join(__dirname, "./routes/routes.js")));
app.use(express.static("public"));

module.exports = app;