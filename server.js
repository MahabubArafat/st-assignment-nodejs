const express = require("express");
const dbConnect = require("./config/db");

const app = express();

//connect the database
dbConnect();

app.get("/", (req, res) => {
  res.send(`API is responding and Healthy...`);
});

//routes defined
app.use("/search", require("./routes/search"));

//default error routers
app.use((req, res) => {
  res.status(404).send("404 route not found!");
});

// port defined
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started on Port ${PORT} ...`);
});
