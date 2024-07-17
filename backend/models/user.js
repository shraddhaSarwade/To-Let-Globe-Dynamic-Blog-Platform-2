// Creating the Mongoose Model for the User MongoDB Database

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username cannot be blank!"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be blank!"],
  },
  role: {
    type: String,
    required: [true, "Role cannot be blank!"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
