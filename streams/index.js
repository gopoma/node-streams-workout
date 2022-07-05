const path = require("path");
const fs = require("fs");

const img = "fallguys.jpeg";
const regular = "readme.txt";
const light = "lighttext.txt";
const html = "index.html";
const filename = regular;
const myReadStream = fs.createReadStream(path.join(__dirname, filename), "utf-8");
const myWriteStream = fs.createWriteStream(path.join(__dirname, "output.txt"));

// fs.readFile waits for the whole data and sends to us the complete big piece
// We could send this pieces of data to the Client through the Writable Streams
// We are able to duplicate images  o.O
// The response object is a writable stream

/*
myReadStream.pipe(myWriteStream);
*/

myReadStream.on("data", function(chunk) {
  // console.log("New chunk received: ", chunk);
  console.log("New chunk arrived: ");
  myWriteStream.write(chunk);
});


/*
const express = require("express");
const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  myReadStream.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
*/