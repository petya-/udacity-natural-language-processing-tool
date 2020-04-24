const router = require("express").Router();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const aylienAPI = require("aylien_textapi");
const textapi = new aylienAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

function validateRequest(req, res, next) {
  const { text } = req.body;
  if (text) return next();
  return res.status(400).json({
    message: "Invalid input",
  });
}

router.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

router.post("/analyze", validateRequest, async function (req, res) {
  const { text } = req.body;

  textapi.sentiment(
    {
      url: text,
    },
    function (error, response) {
      if (response) return res.send(response);
      return res.status(500).send(error);
    }
  );
});

module.exports = router;
