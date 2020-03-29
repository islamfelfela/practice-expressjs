// function add(a, b) {
//     console.log(a + b);
//     return a + b
// }

// function math(a, b, cb) {
//     a += 2;
//     b += 2;
//     if (typeof add === "function") cb(a, b)
// }

// math(2, 2, add);


const http = require('http')
const fs = require('fs')


const hostname = '127.0.0.1'
const port = '8000'

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World!\n')
})

console.log(process.argv[2]);
console.log(process.argv[3].substr(8, process.argv[3].length));


// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })