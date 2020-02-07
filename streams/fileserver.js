const http = require('http')
const fs = require('fs')
const eventEmitter = require('events')


const errorEmitter = new eventEmitter()

// Vid request, servera filen.
http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile('./bigfile.txt', (err, data) => {
            if (err) {
                errorEmitter.emit('fileNotExist', 'bigfile.txt')
            }

            res.end(data)
        })
    }
}).listen(8080)

errorEmitter.on('fileNotExist', (filename) => {
    console.log(filename + " not exist")
})