const ResultSchema = require("../models/Result.model");

exports.createResult = async (matches, keywordID) => {
  for (let match of matches) {
    const result = new ResultSchema({
      userID: match.userId,
      postID: match.id,
      title: match.title,
      body: match.body,
      keywordReference: keywordID, // object id , referencing the keyword schema
    });
    await result.save();
  }
};
