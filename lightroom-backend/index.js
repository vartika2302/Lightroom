const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB."))
  .catch((err) => console.log("Error: ", err));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running at port 5000");
});
