const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Alex is learning Web Scraper!"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
