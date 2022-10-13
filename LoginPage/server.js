const http = require('http');
const fs = require('fs');

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
    res.statusCode = 200;

    if (req.url.indexOf('.css') != -1){
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(css);
        res.end();
        return;
    }
    
    if (req.url.indexOf('/js/login.js') != -1){
        res.writeHead(200, {'Content-Type': 'text/js'});
        res.write(js);
        res.end();
        return;
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
}).listen(8080);

console.log('Server listening on port 8080. Open http://localhost:8080/')