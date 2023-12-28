const express = require("express");
const router = express.Router();
const axios = require("axios");
const KeywordSchema = require("../models/SearchSchema");
const ResultSchema = require("../models/ResultSchema");

router.get("/", async (req, res) => {
  const { keyword } = req.query;
  // keyword returns a js object { "keyword":"value"} but not json, so did the destructing with {} --> got only the value
  try {
    const fetchedData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // data is sent via an array named data
    const matches = fetchedData.data.filter(
      (eachPost) =>
        eachPost.title.toLowerCase().includes(keyword.toLowerCase()) ||
        eachPost.body.toLowerCase().includes(keyword.toLowerCase())
    );
    // used filter to get a new array, where, title matches the keyword, and then body matches the keyword
    // could have done two filters, initial idea was that, but, then again, I have to merge the arrays

    if (matches.length === 0) {
      return res.json([]);
    }

    // storing in DB
    const keywordForDB = new KeywordSchema({
      queryWord: keyword,
      timeStamp: new Date(),
      userIP: req.ip,
    });

    await keywordForDB.save();

    for (let match of matches) {
      const result = new ResultSchema({
        userID: match.userId,
        postID: match.id,
        title: match.title,
        body: match.body,
        keywordReference: keywordForDB._id,
      });
      await result.save();
    }
    res.send(matches);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
