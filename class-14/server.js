const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/")
  .then(() => console.log("mongodb connected successfully"))
  .catch(() => console.error(error));

app.get("/", (req, res) => {
  res.send("Server is working perfectly");
});

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
