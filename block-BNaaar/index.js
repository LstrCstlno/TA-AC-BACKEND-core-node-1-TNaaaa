var http = require("http");
var url = require("url");
var server = http.createServer((req, res) => {
    var parsedUrl = url.parse(req.url)
    var pathname = parsedUrl.pathname
    if(req.method === `GET` && pathname === `/`){
        res.end("Welcome to home page")
    }else if(req.method === `GET` && pathname === `/about`){
        res.setHeader("Content-Type" ,"text/html")
        res.end("<h2> This is all about node js</h2>")
    }else if(req.method === `POST` && pathname === `/about`){
        res.setHeader("Content-Type" ,"text/JSON")
        res.end("message: this is not a post request")
    }
    // console.log(req.url, req.method, parsedUrl)
    // res.end()
}).listen(5000, () => console.log("listening"))