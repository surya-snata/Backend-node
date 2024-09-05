// Create your own http server
const http = require("http");
// console.log(http);

// The `request` object can be used to get informationabout the HTTP request...
// Eg: url, headers and data
// The `response` object can be used to send response for http request
// Eg: status code, headers and data

// Create a server
const server = http.createServer((req, res) => {
  console.log(`You have visited : ${req.url}`);
  res.end(`You have visited : ${req.url}`);
});
//console.log(server);

// Run the server
server.listen(1234, "127.0.0.1", () => {
  console.log("Server is running on port 1234");
});
