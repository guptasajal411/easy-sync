const User = require("../models/model.js");

exports.getHomepage = async function(req, res){
    res.render("homepage");
}

exports.getRegister = async function(req, res){
    res.render("register");
}

exports.getLogin = async function(req, res){
    res.render("login");
}