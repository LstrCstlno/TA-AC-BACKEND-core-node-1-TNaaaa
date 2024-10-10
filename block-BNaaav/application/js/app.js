var http = require("http");
var url = require("url");
var fs = require("fs")



let server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.setHeader("content-type", "text/html")
        fs.createReadStream("./application/Home.html").pipe(res)
    }
    if(req.url == "/blog"){
        res.setHeader("content-type", "text/html")
        fs.createReadStream("./application/blog.html").pipe(res)
    }
    if(req.url.split('.').pop() === 'css') {
        // set header for css file
        res.setHeader('Content-Type', 'text/css');
        // read css file and send it in response
        fs.createReadStream('./application/assets/stylesheet/styles.css').pipe(res)
        }
}).listen(4020, () => console.log("listening"));
