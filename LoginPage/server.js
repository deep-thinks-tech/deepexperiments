const http = require('http');
const fs = require('fs');
const createserver = require("./js/createserver.js")

let html;
let css;
let js;

fs.readFile('./login.html', (err,data) => {
    err ? err : html = data;
});

fs.readFile('./css/login.css', (err, data) => {
    err ? err : css = data;
});

fs.readFile('./js/login.js', (err, data) => {
    err ? err : js = data;
});

//Create server
http.createServer((req, res) => {
    createserver(req, res, html, css, js);
}).listen(8080);

console.log('Server listening on port 8080. Open http://localhost:8080/signup')