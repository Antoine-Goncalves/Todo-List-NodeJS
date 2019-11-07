const express = require("express");

const app = express();
const port = 1410;

app.get("/", (req, res) => {
  res.send("Go créer Facebook !");
});

app.listen(port);
