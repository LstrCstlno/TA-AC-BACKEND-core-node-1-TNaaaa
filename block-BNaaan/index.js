var http = require("http");

var server = http.createServer((req,res) => {
    console.log(req.headers, req.url, req.method);
res.end(`Responded`)
}).listen(3000, () => {
    console.log("listeining")
});

// var server = http.createServer(host)

// function host(req, res){
//     res.end("end")
// }

// server.listen(3000, () => {
//     console.log("listened")
// })