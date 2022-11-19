module.exports = function(req, res, html, css, js, img) {
    
    res.statusCode = 200;

    if (req.url.indexOf('.css') != -1){
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(css);
        res.end();
        return;
    }
    
    if (req.url.indexOf('.js') != -1){
        res.writeHead(200, {'Content-Type': 'text/js'});
        res.write(js);
        res.end();
        return;
    }

    if (req.url.indexOf('.svg') != -1){
        res.writeHead(200, {'Content-Type': 'img'});
        res.write(img);
        res.end();
        return;
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
}