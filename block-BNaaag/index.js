var fs = require("fs")

fs.readFile(`./content.md`, (err, file) => {
    console.log(file.toString())
})




function addName(string){
    return `Hello my name is ${string}`
}
async();
addName("lester")

function async(){
    setTimeout(() => {
        console.log("castelino")
    }, 3000)
}

var buff1 = Buffer.alloc(10);
buff1.write("Welcome to Buffer")

console.log(buff1.toString())


