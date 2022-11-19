const http = require("http");
const fs = require("fs");
const port = require("../env");
const createserver = require("./createserver");

let html, css, js;

fs.readFile("./rollingreviews.html", (err, data)=> {
    err ? err : html = data;
});

fs.readFile("./rollingreviews.css",  (err, data)=> {
    err ? err : css = data;
});

fs.readFile('./rollingreviews.js',  (err, data)=> {
    err ? err : js = data;
});

const listenPort = port("rollingreviews");
//Create server
http.createServer((req, res) => {
    createserver(req, res, html, css, js);
}).listen(listenPort);

console.log("Server running on port "+listenPort+ ". Open http://localhost:"+listenPort+"/rollingreviews")