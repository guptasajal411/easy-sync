const User = require("../models/model.js");

exports.getAPI = async function(req, res) {
    // const newUser = new User({
    //     "username": "admin",
    //     "texts": [{ "syncedText": "String" }],
    //     "password": "admin"
    // });
    // await newUser.save();

    User.find({}, await function(err, user){
        if (err) {
            res.send(err);
        } else {
            res.send(user);
        }
    });
}

exports.postAPI = async function(req, res) {
    const newtext = {syncedText: req.body.newtext};
    await User.findOneAndUpdate({ username: "admin" }, {
        $push: {
            texts: newtext
        }
    }).exec();
    res.redirect("/");
}

exports.getHomepage = async function(req, res){
    User.find({}, await function(err, user){
        if (err) {
            res.send(err);
        } else {
            res.render("index", { texts: user[0].texts.reverse() });
        }
    });
    // res.render("index", {posts: });
}