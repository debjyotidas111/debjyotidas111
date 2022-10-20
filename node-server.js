console.log("Hello World 1")
const http = require("http");


http.createServer((req, res) => {
    console.log("Hello World 2")
    res.end("welcome to the server");
}).listen(4000);
console.log("Hello World 3")