const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  books: Array // array of objects of saved books
});

const User = mongoose.model("users", userSchema);

module.exports = User;