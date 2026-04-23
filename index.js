const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World dari Node.js 🚀");
});

app.listen(port, () => {
  console.log(`App jalan di http://localhost:${port}`);
});
