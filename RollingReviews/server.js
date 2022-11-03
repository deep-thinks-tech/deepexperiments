const http = require("http");
const fs = require("fs");
const port = require("../env");
const createserver = require("./createserver");

let html, css, js;

fs.readFile("./rollingreviews.html", (data, err)=> {
    err ? err : html = data;
});

fs.readFile("./rollingreviews.css", (data, err)=> {
    err ? err : css = data;
});

fs.readFile('./rollingreviews.js', (data, err)=> {
    err ? err : js = data;
});

const listenPort = port("rollingreviews");
//Create server
http.createServer((req, res) => {
    createserver(req, res, html, css, data);
}).listen(listenPort);

console.log("Server running on port "+listenPort+ ". Open http://localhost:"+listenPort+"/rollingreviews")