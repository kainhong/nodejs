/// <reference path="./nodelib/node.js" />
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>hello</p>');
}).listen(3000);
console.log("http server start at 3000");