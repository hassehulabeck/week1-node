let http = require('http')

http.createServer(showContent).listen(8080)
http.createServer(showContent).listen(8081)

function showContent(req, res) {
    let hostAndPort = req.headers.host
    res.write("Hej " + hostAndPort)
    res.end(() => {
        console.log(req.url)
    })
}