const http = require('http');
const fs = require('fs');
const createserver = require('./createserver');
const port = require("../env");

let html;
let css;
let js;

fs.readFile('./counter.html', (err, data) => {
    err ? err : html = data;
});

 fs.readFile('./counter.css', (err, data) => {
    err ? err : css = data;
})

 fs.readFile('./counter.js', (err, data) => {
    err ? err : js = data;
})

//Create server
const listenPort = port("counter");
http.createServer((req, res) => {
    createserver(req, res, html, css, js);
}).listen(listenPort);
console.log("Server running on port "+listenPort+ ". Open http://localhost:"+listenPort+"/counter")