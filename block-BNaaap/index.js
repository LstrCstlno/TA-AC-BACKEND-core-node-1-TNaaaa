var http = require("http")
var resTest = http.createServer((req, res)=>{
    res.writeHead(201, {'Content-Type':'text/html'});
    res.end("This is the end");
}).listen(4444, ()=> {console.log("listening")})