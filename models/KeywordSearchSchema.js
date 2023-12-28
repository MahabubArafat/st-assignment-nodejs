const mongoose = require("mongoose");

const KeywordSearchSchema = new mongoose.Schema({
  keyword: {
    type: String,
  },
  timestamp: {
    type: Date,
  },
  userIP: {
    type: String,
  },
});

module.exports = Keyword = mongoose.Schema("keyword", KeywordSearchSchema);
