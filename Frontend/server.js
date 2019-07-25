var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

http.createServer(function(req , res){
    if(req.url.match("\.html$")){
        var htmlPath = path.join(__dirname,req.url);
        var fileStream = fs.createReadStream(htmlPath , "UTF-8");
        res.writeHead(200,{"content-type":"text/html"});
        fileStream.pipe(res);
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname,req.url);
        var fileStream = fs.createReadStream(cssPath , "UTF-8");
        res.writeHead(200,{"content-type":"text/css"});
        fileStream.pipe(res);
    }else if(req.url.match("\.jpg$")){
        var imagePath = path.join(__dirname,req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200,{"content-type":"text/image"});
        fileStream.pipe(res);
    }else if(req.url.match("\.js$")){
        var jsPath = path.join(__dirname,req.url);
        var fileStream = fs.createReadStream(jsPath , "UTF-8");
        res.writeHead(200,{"content-type":"text/js"});
        fileStream.pipe(res);
    }
}).listen(8080);