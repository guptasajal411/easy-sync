const bcrypt = require('bcrypt');
const saltRounds = 8;
const User = require("../models/model.js");

exports.getHomepage = function(req, res){
    res.render("homepage");
}

exports.getRegister = function(req, res){
    res.render("register");
}

exports.postRegister = async function(req, res){
    User.findOne({ username: req.body.username }, function(err, user){
        if (err){
            res.send("there was an error with mongoose <br>" + err);
        } else {
            if (user == null){
                bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
                    if (err) {
                        res.send("there was an error with bcrypt <br>" + err);
                    } else {
                        const newUser = new User({
                            username: req.body.username,
                            password: hash
                        });
                        await newUser.save();
                        res.redirect("/");
                    }
                });
            } else {
                res.send("Username already exists, try another username");
            }
        }
    });
}

exports.getLogin = function(req, res){
    res.render("login");
}

exports.postLogin = async function(req, res){
    User.findOne({ username: req.body.username }, function(err, user){
        if (err){
            res.send("there was an error with mongoose <br>" + err);
        } else {
            if (user == null){
                res.send("This username doesnt exist. Please <a href='/register'>register</a> before logging in.")
            } else {
                bcrypt.compare(req.body.password, user.password, function(err, result) {
                    if (err){
                        res.send("there was an error with bcrypt <br>" + err);
                    } else {
                        if (result == true){
                            res.send("Authentication Successful!")
                        } else {
                            res.send("Authentication failed. Wrong password, please try again.");
                        }
                    }
                });
            }
        }
    });
}