var http = require("http");
var url = require("url")

// var newServer = http.createServer((req,res) => {
//     console.log(req, res)
// }).listen(5000)

var newServer2 = http.createServer((req,res) => {
    res.setHeader("content-type", "text/html")
    res.end("My first server in NodeJS")
}).listen(5100)

var newServer3 = http.createServer((req,res) => {
    res.setHeader("content-type", "text/html")
    console.log(req.headers)
    res.end(req.headers["user-agent"])
}).listen(5555)

var newServer4 = http.createServer((req,res) => {
    res.setHeader("content-type", "text/html")
    console.log(req.url, req.method)
    res.end(`the method used is ${req.method} and the url is ${req.url}`)
}).listen(5566)

var newServer5 = http.createServer((req,res) => {
    res.setHeader("content-type", "application/json")
    res.end(`req.headers`);
}).listen(7000)

var newServer6 = http.createServer((req,res) => {
    res.setHeader("content-type", "application/json")
    res.statusCode = 202;
    res.end();
}).listen(3333, () => console.log("Server listening on port 3333"))

var newServer7  = http.createServer((req,res) => {
    res.writeHead(202, {"content-type" : "text/html"});
    res.end(`<h3>Welcome to altcampus</h3>`);
}).listen(8000, () => console.log("Server listening on port 8000"))

var newServer8  = http.createServer((req,res) => {
    res.writeHead(202, {"content-type" : "application/json"});
    res.end("{success: true, message: 'Welcome to Nodejs'}");
}).listen(8888, () => console.log("Server listening on port 8888"))

var newServer9  = http.createServer((req,res) => {
    res.writeHead(202, {"content-type" : "text/html"});
    console.log(req.method)
    res.end("<h2>posted for first time</h2>");
}).listen(5050, () => console.log("Server listening on port 5050"))


var newServer10  = http.createServer((req,res) => {
    res.setHeader("content-type", "text/html")
    if(req.url === "/"){
        res.end("Hello, my name is Lester Castelino")
    }else if(req.url === "/about"){
        res.end("<h2>Hello, my name is Lester Castelino</h2>")}
    else if(req.method === "GET" && req.url === "/users"){
        res.end(`<form>
                <input type="email" name="name" placeholder="Enter name"> <input type="email" name="name" placeholder="Enter email">
                <input type="button" title="submit">
                </form>`)}
    else if(req.method === "POST" && req.url === "/users"){
        res.end("Posted for the second time")
    }else{
        res.statusCode = 404;
        res.end("error")
    }
}).listen(2345)


var parsedUrl = url.parse("/users?email=nodeserver@gmail.com", true)

var newServer = http.createServer((req,res) => {
    res.setHeader("content-type", "application/json")
    console.log(req.url)
    console.log(parsedUrl.pathname, parsedUrl)
    res.end(`{ email: 'nodeserver@gmail.com' }`)
}).listen(6969)