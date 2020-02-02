const accounts = require('./accounts.js')
const textBank = require('./text-bankomat.js')
let http = require('http')

http.createServer((req, res) => {
    res.write("<html><input type='number' value=0 />")
    res.end()
}).listen(8080)

textBank