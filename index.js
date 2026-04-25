const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World dari Node.js 🚀");
});

app.listen(port, () => {
  console.log(`App jalan di http://localhost:${port}`);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App jalan di port 3000");
});
