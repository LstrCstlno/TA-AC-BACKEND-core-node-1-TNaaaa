console.log('Welcome to Nodejs')

var os = require("os")
console.log(os.freemem(), os.cpus(), os.uptime(), os.version()) 

var { readFile, unlink} = require("fs")

var buff1 = Buffer.alloc(12);
buff1.write("Heavy is the crown")
console.log(buff1.toString());

var url = require("url")
var parsedUrl = url.parse("https://airindia.com/fares/calculate?from=delhi&to=detroit", true)
console.log(parsedUrl.query, parsedUrl.pathname, parsedUrl.protocol)