const os = require('os')
const http = require('http')
let output = "<html><ul>"
var processorData = os.cpus()

http.createServer((req, res) => {
    processorData.forEach((cpu) => {
        output += "<li>Model: " + cpu.model
    })
    res.write(output)
    res.end()
}).listen(8080)