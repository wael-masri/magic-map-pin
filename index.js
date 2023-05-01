const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRoute = require("./routes/users");
const pinsRoute = require("./routes/pins");
require("dotenv").config({ path: "./config.env" });
const app = express();
app.use(cors());
app.use(express.json());
//FOR CONNECTION WITH DATA BASE MONGO DB 
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected.."))
  .catch((err) => {
    console.log(err);
  });


//PATHES FOR REST API 
app.use("/api/users", usersRoute);
app.use("/api/pins", pinsRoute);


// BACKEND RUNMIN IN POST 5000 HERE
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Backend is running.. ${port}`);
});
