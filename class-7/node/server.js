// Import modules

const http = require("http");

// Create server

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`This is home page`);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`This is about page`);
  } else if (req.url === "/service") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`This is service page `);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end(`Page not found`);
  }
});

// Run server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

