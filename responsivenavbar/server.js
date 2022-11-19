const http = require("http");
const fs = require("fs");
const createserver = require("./createserver");
const port = require("../env");

let html, css, js, img;

fs.readFile("./responsivenavbar.html",(err, data) => {
    err ? err : html = data;
});
fs.readFile("./responsivenavbar.css",(err, data) => {
    err ? err : css = data;
});
fs.readFile("./responsivenavbar.js",(err, data) => {
    err ? err : js = data;
});
fs.readFile("./logo.svg", (err, data) => {
    err ? err : img = data;
});

//Retrieve Port
const listenPort = port("responsivenavbar");
//Create server
http.createServer((req, res) => {
    createserver(req, res, html, css, js, img);
}).listen(listenPort);

console.log("Server running on port "+listenPort+ ". Open http://localhost:"+listenPort+"/responsivenavbar");