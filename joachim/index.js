const http = require('http')
const fs = require('fs')

let thePage = function () {
    console.log('In thePage function')
    fs.writeFile('./index.html', "<HTML>", (err) => {
        if (err) throw err
        console.log('Starting to make a new HTML-file')

        fs.readFile('./header.txt', 'utf8', (err, data) => {
            if (err) throw err
            fs.appendFile('./index.html', data, 'utf8', (err) => {
                if (err) throw err
                console.log('Added header to HTML-file!')
                fs.readFile('./content.txt', 'utf8', (err, data) => {
                    if (err) throw err
                    fs.appendFile('./index.html', data, 'utf8', (err) => {
                        if (err) throw err
                        console.log('Added content to HTML-file')
                        fs.readFile('./footer.txt', 'utf8', (err, data) => {
                            if (err) throw err
                            fs.appendFile('./index.html', data, 'utf8', (err) => {
                                if (err) throw err
                                console.log('Added a footer to HTML-file')
                                fs.appendFile('./index.html', '</HTML>', 'utf8', (err) => {
                                    if (err) throw err
                                    console.log(' Closing the HTML-file, FML!')
                                })
                            })
                        })
                    })
                })
            })
        })
    })​
}​​​​
http.createServer((req, res) => {
    ​
    // let currentTime = moment().format('LLLL')
    // console.log(currentTime)
    fs.appendFile('./content.txt', currentTime, (err) => {
        if (err) throw err
    })
    console.log('creating page')
    let page = thePage()​
    res.write(page)
    res.end()
}).listen(8080)