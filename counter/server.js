const http = require('http');
const fs = require('fs');
const createserver = require('./createserver');

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
http.createServer((req, res) => {
    createserver(req, res, html, css, js);
}).listen(8080);
console.log('Server listening on port 8080. Open http://localhost:8080/counter.html')