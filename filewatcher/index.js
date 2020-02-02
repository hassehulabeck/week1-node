const fs = require('fs')
const http = require('http')
const filen = './content.txt'

// Globala vars för req & res
let request, response

http.createServer(render).listen(8080)

function render(req, res) {
    request = req
    response = res
    fs.readFile(filen, (err, data) => {
        if (err) {
            res.writeHead(500)
            res.write(err)
        } else {
            res.writeHead(200)
            res.write(data)
        }
        res.end()
    })
}

// Add a watcher on file 'content.txt'
fs.watch(filen, (eventType, filen) => {
    render(request, response)
})