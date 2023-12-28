const mongoose = require("mongoose");

const searchResult = new mongoose.Schema({
  userID: {
    type: Number,
  },
  postID: {
    type: Number,
  },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  keywordReference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "keyword",
  },
});

module.exports = mongoose.model("result", searchResult);
