const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

// model, used for creating and reading documents from the mongodb db
const userModel = mongoose.model("users", userSchema)
module.exports = userModel
