const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// designates what port the app will listen to for incoming requests

app.use("/", require("./routes"));

module.exports = app;
