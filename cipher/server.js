const http = require("http");
const fs = require("fs");
const createserver = require("./createserver");

let html, css, js;

fs.readFile("./cipher.html", (err, data)=> {
    err ? err : html = data;
});

fs.readFile("./cipher.css",  (err, data)=> {
    err ? err : css = data;
});

fs.readFile('./cipher.js',  (err, data)=> {
    err ? err : js = data;
});

const listenPort = 8001;
//Create server
http.createServer((req, res) => {
    createserver(req, res, html, css, js);
}).listen(listenPort);

console.log("Server running on port "+listenPort+ ". Open http://localhost:"+listenPort+"/cipher")