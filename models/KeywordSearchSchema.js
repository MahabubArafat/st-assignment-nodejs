const mongoose = require("mongoose");

const keywordSearchSchema = new mongoose.Schema({
  queryword: {
    type: String,
  },
  timestamp: {
    type: Date,
  },
  userIP: {
    type: String,
  },
});

module.exports = mongoose.model("keyword", keywordSearchSchema);
