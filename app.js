const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (_, res) {
  res.send("Hello World!");
});

app.post("/", function (req, res) {
  console.log(JSON.stringify(req.body, 0, 2));
  res.status(200).send(req.body);
});

app.listen(8000, function () {
  console.log("WELCOME POC listening on port 8000!");
});
