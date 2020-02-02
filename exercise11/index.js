let http = require('http')
let events = require('events')

let counter = 0
let responseString = "An ordinary website"
const counterEmitter = new events.EventEmitter()

http.createServer(respond).listen(8080)

counterEmitter.on("Yikes", function () {
    responseString = "Now double digits!!!"
})

function respond(req, res) {

    // Hantera favicon
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        res.end();
        console.log('favicon requested');
        return;
    }

    counter++
    if (counter >= 10) {
        counterEmitter.emit("Yikes")
    }

    res.write(responseString)
    res.end()

}