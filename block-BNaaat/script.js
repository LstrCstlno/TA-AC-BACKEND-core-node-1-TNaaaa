var fs = require("fs");
var http = require("http");

var createServer = http.createServer((req,res) => {
    if(req.url === "/file"){
        res.setHeader("Content-Type", "text/html");
        fs.readFile( "./node.html" , (err, data) => {
            if(err) console.log(err)
            res.end(data)
        } )
    }
    else if(req.url === "/stream"){
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream("./node.html").pipe(res)
    }
}).listen(5555, ()=> {
    console.log("listening")
})