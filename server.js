const express = require("express");
const dbConnect = require("./config/db");

const app = express();

//connect the database
dbConnect();

app.get("/", (req, res) => {
  res.send(`Your Ip is ${req.ip}`);
});

//routes defined
app.use("/search", require("./routes/search"));

// port defined
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started on Port ${PORT} ...`);
});
