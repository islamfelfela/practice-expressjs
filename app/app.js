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


// const http = require('http')
// const fs = require('fs')


// const hostname = '127.0.0.1'
// const port = '8000'

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World!\n')
//     // console.log(req);

// })

// // console.log(process.argv[2]);
// // console.log(process.argv[3].substr(8, process.argv[3].length));


// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })







const express = require('express')
const mongoose = require('mongoose');
var bodyParser = require('body-parser');


const userRouter = require('./routes/users')
const postsRouter = require('./routes/posts')


const app = express()
const port = process.env.port || 8000

app.use(bodyParser.json());
app.use(express.json())


app.use('/users', userRouter);
app.use('/posts', postsRouter);
// configure the app to use bodyParser()




mongoose.connect('mongodb://localhost/Test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(err);
    else console.log("Conected to DataBase");


})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))