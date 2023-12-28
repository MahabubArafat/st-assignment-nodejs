const axios = require("axios");
const keywordService = require("../services/Keyword.service");
const resultService = require("../services/Result.service");

exports.searchKeyword = async (req, res) => {
  // Destructuring to get the value
  const { keyword } = req.query;
  try {
    // data is sent via an array named data
    const fetchedData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const matches = fetchedData.data.filter(
      (eachPost) =>
        eachPost.title.toLowerCase().includes(keyword.toLowerCase()) ||
        eachPost.body.toLowerCase().includes(keyword.toLowerCase())
    );

    if (matches.length === 0) {
      return res.json([]);
    }

    // here service logics
    const keywordForDB = await keywordService.createKeyword(keyword, req.ip);
    await resultService.createResult(matches, keywordForDB._id);

    // sending the results
    res.send(matches);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};
