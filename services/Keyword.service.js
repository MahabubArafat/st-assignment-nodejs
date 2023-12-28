const KeywordSchema = require("../models/Keyword.model");

exports.createKeyword = async (keyword, ip) => {
  const keywordForDB = new KeywordSchema({
    queryWord: keyword,
    timeStamp: new Date(),
    userIP: ip,
  });

  await keywordForDB.save();
  return keywordForDB;
};
