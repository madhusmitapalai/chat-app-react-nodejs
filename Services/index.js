const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const Server = require("socket.io");
const app = express();
require("dotenv").config();
app.use(cors);
app.use(express.json());
mongoose
  .connect(process.env.MANGOO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db is connected ");
  })
  .catch((err) => {
    console.log("Error in DB");
  });
process.env.PORT;
const server = app.listen(process.env.PORT, () => {
  console.log(`Servet is running on ${process.env.PORT}`);
});
