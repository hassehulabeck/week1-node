let users = require('./user-module.js')
let http = require('http')
let url = require('url')
let eventEmitter = require('events')

const loginEmitter = new eventEmitter()
var inloggade = []
let username = " "

http.createServer(respond).listen(8080) // Publika sidan
http.createServer(listUsers).listen(10000) // Adminsidan

loginEmitter.on('login', (username) => {
    // listUsers()
})

function listUsers(req, res) {
    res.write("<html><head><meta charset='utf-8'>")
    res.write("User " + username + " har loggat in.<ul>")
    inloggade.forEach(user => {
        res.write("<li>" + user.name)
    })
    res.end()
}


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

    // Hantera ev querystring
    let params = url.parse(req.url, true)

    // Kolla om det finns en user med angivet userID
    let user = users.filter(user => {
        if (user.userID == params.query.userID)
            return true
    })
    if (user.length == 1) {
        if (params.query.password == user[0].password) {
            res.write("<h1>Userinfo</h1><p>" + user[0].name + "<p>" + user[0].credits)
            inloggade.push(user[0])
            loginEmitter.emit('login', user[0].name)
        } else {
            console.log(user)
            console.log(params.query.password)
            res.writeHead(403)
            res.write("Not authorized")
        }
    }
    res.end()
}