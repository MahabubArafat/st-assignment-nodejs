const mongoose = require("mongoose");
const config = require("config");
const dbURI = config.get("mongoCloudURI");

const connectToDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("Database Server Connected ... ");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
