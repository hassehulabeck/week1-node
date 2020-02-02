let user = require('./user-module.js')
let http = require('http')
let url = require('url')

http.createServer(respond).listen(8080)


function respond(req, res) {
    let requestUrl = url.search

    // Hantera favicon
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        res.end();
        console.log('favicon requested');
        return;
    }

    // Hantera ev querystring
    let params = url.parse(req.url, true)

    // vår information finns i objektet params.query
    if (params.query.userID == user.userID && params.query.password == user.password) {
        res.write("<h1>Userinfo</h1><p>" + user.name + "<p>" + user.credits)
    } else {
        res.writeHead(403)
        res.write("Not authorized")
    }

    res.end()

}

// URL-exempel: http://localhost:8080/?userID=12&password=1000foting