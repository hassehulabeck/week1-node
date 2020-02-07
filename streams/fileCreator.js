const fs = require('fs')

let writeStream = fs.createWriteStream('./feeder.txt')

for (let i = 0; i < 100000; i++) {
    writeStream.write("Hej ")
}

writeStream.end()