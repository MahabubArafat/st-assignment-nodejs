const express = require("express");
const dbConnect = require("./config/db");

const app = express();

dbConnect();

app.get("/", (req, res) => {
  res.send(`Your Ip is ${req.ip}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on Port ${PORT} ...`);
});
