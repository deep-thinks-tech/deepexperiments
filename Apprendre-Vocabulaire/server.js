const http = require("http");
const fs = require("fs");
const createserver = require("./createserver");

let html, css, js;

fs.readFile("./av.html", (err, data)=> {
    err ? err : html = data;
});

fs.readFile("./av.css",  (err, data)=> {
    err ? err : css = data;
});

fs.readFile('./av.js',  (err, data)=> {
    err ? err : js = data;
});

const listenPort = 8000;
//Create server
http.createServer((req, res) => {
    createserver(req, res, html, css, js);
}).listen(listenPort);

console.log("Server running on port "+listenPort+ ". Open http://localhost:"+listenPort+"/wordguessor   ")