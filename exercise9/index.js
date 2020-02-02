const https = require('https')
const http = require('http')
let output = ""

https.get('https://www.hulabeck.se/html/temp/products.json', (res) => {

    // När vi får napp...
    res.on('data', (d) => {
        output += d
    })

    // När det är klart
    res.on('end', () => {
        let products = JSON.parse(output)
        displayProducts(products)
    })
})

function displayProducts(prods) {
    let output = "<html><head><meta charset='utf-8'"

    prods.products.forEach(p => {
        output += "<p>" + p.name + ": " + p.consumerPrice
    });

    http.createServer((req, res) => {
        res.write(output)
        res.end()
    }).listen(8080)
}