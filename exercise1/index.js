const http = require('http')
var x = 10

http.createServer((req, res) => {
    res.write("Hajsan")
    res.end()
    x++
    console.log(req.url)
}).listen(8080, () => {
    console.log("Lyssnar nu på port 8080")
})