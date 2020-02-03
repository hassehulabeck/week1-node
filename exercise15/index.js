const http = require('http')
const fs = require('fs')

const header = require('./modules/header.js')
const footer = require('./modules/footer.js')

let content = ""

function read() {
    fs.readFile('./content.txt', (err, data) => {
        if (!err)
            content = data
        else
            console.error(err)
    })
}

function writeTime() {
    let now = new Date()
    let str = "<li>" + now.toISOString()
    fs.appendFile('./content.txt', str, (err) => {
        if (!err) {
            console.log("Det gick bra att skriva")
            // När vi har skrivit till filen, läser vi den direkt.
            read()
        }
    })
}

http.createServer((req, res) => {

    // Hantera favicon
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        res.end();
        console.log('favicon requested');
        return;
    }

    // Skriv tiden för request i filen. Och läs även in ny content.
    writeTime()
    res.write(header + content + footer)
    res.end()

}).listen(8080, () => {
    console.log("Nu lyssnar webbservern")
    // Börja med att läsa in från filen.
    read()
})