// Example-1 :
// Create an EventEmitter object and listen for the "myEvent" event.
// Import modules
const EventEmitter = require("events");

const event = new EventEmitter();

// Listen for the "myEvent" event
event.on("myEvent", () => {
  console.log("myEvent started");
});

// Fire the "myEvent" event
event.emit("myEvent"); // call

// Example-2 :
event.on("checkStatus", () => {
  console.log("checkStatus started");
});

event.on("checkStatus", (sc) => {
  console.log(`Status code is ${sc} ok`);
});

event.emit("checkStatus", 200); // fire

// Stream :
const fs = require("fs");

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("text.txt", (err, data) => {
  //     if (err) return console.log(err);
  //     res.end(data.toString());
  //   });

  //   const stream = fs.createReadStream("text.txt");
  //   stream.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   stream.on("end", () => {
  //     res.end();
  //   });

  //   stream.on("error", (err) => {
  //     console.log(err);
  //     res.end(err);
  //   });
  // 3rd process:
  const stream = fs.createReadStream("text.txt");
  stream.pipe(res);
});

server.listen(4000, "127.0.0.1");

// Chunk:
// Chunked data refers to the data sent to the server is pieces or "chunk" rather than all at once.
// This is useful for large files or data stream where sending the entire file at once would be 
// inefficient or even impossible.
// e:g large videos ..

// How chunk works :
// Response start : It sends data to the server without knowing the actual size.
// 