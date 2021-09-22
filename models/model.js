const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
    username: String,
    texts: [{ syncedText: String }],
    password: String,
    signedIn: Boolean
});

const User = new mongoose.model("User", userSchema);

module.exports = User;