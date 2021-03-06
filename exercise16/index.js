const http = require('http')
const fs = require('fs')
const url = require('url')
let returStr = ""

/* Inte fullt fungerande, pga inte tänkt färdigt.
Det som strular är funktionen getData() som inte ger mig vad jag har tänkt mig.
Men ett utkast att studera och begrunda */

http.createServer((req, res) => {

    let userRequest = url.parse(req.url)

    if (userRequest.path.includes('login')) {
        // Skapa fil om den inte finns.
        userExists(userRequest.path)
        res.write("<html><h1>Loggat in")
        book("Login", userRequest.path)
        getData(userRequest.path)
        // console.log(returStr)
        res.write(returStr)
        res.end()
    }

    if (userRequest.path.includes('logout')) {
        book("Logout", userRequest.path)
        res.end("Loggat ut")
    }

    if (userRequest.path == "/")
        res.end("Publik sida")

    // Hantera favicon
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        res.end();
        return;
    }

}).listen(8080, () => {
    console.log("Lyssnar på 8080")
})

function userExists(p) {
    let username = extractUserName(p)
    fs.open(__dirname + "/" + username + ".log", "a", (err, fd) => {
        if (err)
            console.error(err)
        else
            console.log("Skapade fil till " + username)
    })
}

function extractUserName(data) {
    let username = data.split('/')
    return username[2]
}

function book(action, path) {
    let username = extractUserName(path)
    let data = action + ": " + new Date().toISOString() + "\r"
    fs.appendFile(username + ".log", data, (err) => {
        if (err) console.error(err)
    })
}

function getData(path) {
    let username = extractUserName(path)

    fs.readFile(__dirname + "/" + username + ".log", (err, data) => {
        if (err)
            console.error(err)
        else {
            data = data.toString('utf-8')
            logStrings = data.split("Z") // Använd Z i ISOstring-formatet, då det är sista tecknet i varje rad.
            // Egentligen ingen bra lösning, eftersom split nu tar bort bokstaven Z, och det är väl inte helt önskvärt...

            logStrings.forEach(str => {
                console.log(str)
            });

            returStr = "Senaste aktivitet<ul><li>"
            // De två senaste noteringarna. Det ligger en tomrad på index "length-1"...
            returStr += logStrings[(logStrings.length) - 3]
            returStr += "<li>" + logStrings[(logStrings.length) - 2]
        }
    })
}