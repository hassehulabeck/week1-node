const http = require('http')
const fs = require('fs')

// Vid request, servera filen.
http.createServer((req, res) => {
    if (req.url == "/") {
        let data = fs.createReadStream('./bigfile.txt')
        data.pipe(res)
    }
}).listen(8080)