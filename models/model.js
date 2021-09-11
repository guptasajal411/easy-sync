const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    syncedTexts = [{
        syncedText: String
    }]
});

const user = new mongoose.model("User", userSchema);

module.exports = User;