const User = require("../models/model.js");

exports.geteasysync = function(req, res){
    User.findOne({ _id: req.params.userID }, function(err, user){
        if (err){
            res.send("there was an error with mongoose <br>" + err);
        } else {
            if (user == null){
                res.send("Please <a href='/register'>register</a> or <a href='/login'>sign in</a> before accessing easy sync.")
            } else {
                if (user.signedIn == false){
                    res.send("Hi " + user.username + ", please sign in before accessing easy sync.");
                } else {
                    res.render("easysync", { username: user.username, userID: user._id, syncs: user.texts.reverse() });
                }
            }
        }
    });
}

exports.posteasysync = async function(req, res) {
    const newtext = { syncedText: req.body.newtext };
    await User.findOneAndUpdate({ _id: req.params.userID }, {
        $push: {
            texts: newtext
        }
    }).exec();
    res.redirect(req.originalUrl);
}

exports.postDeleteText = function(req, res){
    User.findOne({ _id: req.params.userID }, function (err, foundUser) {
        if (err) {
            res.send(err);
        } else {
            foundUser.texts.forEach(async function (object, index) {
                if (object.syncedText == req.body.syncedText) {
                    foundUser.texts.splice(index, 1);
                    await foundUser.save();
                    res.redirect("/user/"+req.params.userID);
                }
            });
        }
    });
}