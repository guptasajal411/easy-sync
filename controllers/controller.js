const User = require("../models/model.js");

exports.getHomepage = async function(req, res) {
    // const newUser = new User({
    //     "username": "admin",
    //     "texts": [{ "syncedText": "String" }],
    //     "password": "admin"
    // });
    // newUser.save();

    const newtext = {syncedText: "say waht now"};

    await User.findOneAndUpdate({ username: "admin" }, {
        $push: {
            texts: newtext
        }
    }).exec();

    User.find({}, await function(err, user){
        if (err) {
            res.send(err);
        } else {
            res.send(user);
        }
    });
}