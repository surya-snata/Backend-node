// Import express
const express = require("express");
require("dotenv").config();
// console.log(express);
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

// Start the express server
const port = process.env.PORT;
const PORT = port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
