var mongoose = require("mongoose");

// SCHEMA SETUP
var commentSchema = mongoose.Schema({
  text: String,
  author: String
});

module.exports = mongoose.model("Comment", commentSchema);
