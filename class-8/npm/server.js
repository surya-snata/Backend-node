const fs = require("fs");
const path = require("path");
const http = require("http");
require("dotenv").config();
const { readFile, writeFile } = require("./customFunction.js");

// Create server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("API working fine");
  } else if (req.url === "/read") {
    const data = JSON.stringify(readFile());
    console.log(data);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else if (req.url === "/write") {
    const data = readFile();
    const newData = {
      id: 3,
      name: "Shaktiman",
      age: 70,
    };
    data.students.push(JSON.stringify(newData));
    fs.writeFileSync("data.json", JSON.parse(data));
    console.log(data);

    res.end("Data sent");
  }
});

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
