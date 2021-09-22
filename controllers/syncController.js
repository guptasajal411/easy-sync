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
                    res.render("easysync", { username: user.username, syncs: user.texts });
                }
            }
        }
    });
}