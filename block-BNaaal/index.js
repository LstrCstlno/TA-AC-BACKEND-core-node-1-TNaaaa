var http = require("http")
var httpServer = http.createServer((req, res) => {
    console.log("welcome")
}).listen(4000)