const http = require('http')
const fs = require('fs')



// Vid request, servera filen.
http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile('./bigfile.txt', (err, data) => {
            if (err) console.error(err)

            res.end(data)
        })
    }
}).listen(8080)