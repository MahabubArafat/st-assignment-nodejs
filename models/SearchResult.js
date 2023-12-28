const mongoose = require("mongoose");

const SearchResult = new mongoose.Schema({
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

module.exports = Result = mongoose.Schema("searchResult", SearchResult);
