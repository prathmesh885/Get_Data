const mongoose = require("mongoose");
const express = require("express");
const app = express();
const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 0,
  },
  body: {
    type: String,
    default: 0,
  },
});

const User = mongoose.model("product", UserSchema);

module.exports = User;
