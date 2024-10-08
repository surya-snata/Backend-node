// Import modules
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const PORT = 3000;

// Relative path and Absolute path
// "../"               // (__dirname)
const staticPath = path.join(__dirname, "../public");

// View engine set
app.set("view engine", "hbs");
app.engine("hbs", require("hbs").__express);

// Middleware
app.use(express.static(staticPath));

// Routes
app.get("/", (req, res) => {
  // res.send("Routes working...");
  res.render("index", {
    title: "My first express app",
  });
});

app.get("/", (req, res) => {
  res.send("Express routes working perfectly");
});

app.get("/about", (req, res) => {
  res.send("This is my about page");
});

app.get("/contact", (req, res) => {
  res.send("This is my contact page");
});

// Run the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
