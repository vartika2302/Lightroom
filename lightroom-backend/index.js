const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const authRoute = require("./routes/auth");
const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB!");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB is disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

//middlewares
app.use(express.json());
app.use("/api/auth",authRoute)

//error handler middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMsg = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMsg,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 5000, () => {
  connect();
  console.log("Server is running at port 5000");
});
