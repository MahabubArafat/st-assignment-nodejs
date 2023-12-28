const mongoose = require("mongoose");

const keywordSearchSchema = new mongoose.Schema({
  queryWord: {
    type: String,
  },
  timeStamp: {
    type: Date,
  },
  userIP: {
    type: String,
  },
});

module.exports = mongoose.model("keyword", keywordSearchSchema);
