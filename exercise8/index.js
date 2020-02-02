const http = require('http')
const fs = require('fs')

let words = ""

// Data kommer att vara i form av en buffer
fs.readFile('./textfil.txt', (err, data) => {
    if (err)
        console.error(err)
    else {
        http.createServer((req, res) => {
            data = data.toString('utf-8')
            words = data.split(" ")
            let slump = words[Math.floor(Math.random() * words.length)]
            res.write(slump)
            res.end()
        }).listen(8080)
    }


})