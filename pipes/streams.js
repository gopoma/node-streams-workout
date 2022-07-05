const fs = require("fs");
const server = require("http").createServer();

function readFile() {
  // Readable stream
  const file = fs.createReadStream("./file.txt"); // Cuando ya existe un archivo y queremos leerlo
  file.pipe(process.stdout); // Consumir stream: Hacer que fluyan los datos
}

function writeFile() {
  // Writable stream
  const file = fs.createWriteStream("./file.txt");

  for(let i = 0; i < 1000000; i++) {
    file.write("Hello World from NodeJS! \n");
  }

  file.end();
} 

// readFile();
// writeFile();

server.on("request", (req, res) => {
  // req: Readable stream
  // res: Writable stream

  // Try this and your RAM will die...
  // fs.readFile("./file.txt", (err, data) => {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     res.end(data);
  //   }
  // });

  const file = fs.createReadStream("./file.txt");
  file.pipe(res);
});

server.listen(4000);