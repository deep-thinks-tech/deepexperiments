const http = require("http");
const fs = require("fs");
const createserver = require("./createserver");
const port = require("../env");

let html, css, js;

fs.readFile("./responsivenavbar.html",(err, data) => {
    err ? err : html = data;
});
fs.readFile("./responsivenavbar.css",(err, data) => {
    err ? err : css = data;
});
fs.readFile("./responsivenavbar.js",(err, data) => {
    err ? err : js = data;
});

//Retrieve Port
const listenport = port("responsivenavbar");
//Create server
http.createServer((req, res) => {
    createserver(req, res, html, css, js);
}).listen(listenport);

console.log("Server running on port "+listenPort+ ". Open http://localhost:"+listenPort+"/responsivenavbar");