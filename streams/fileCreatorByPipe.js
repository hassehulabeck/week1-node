const fs = require('fs')

let readStream = fs.createReadStream('./feeder.txt')
let writeStream = fs.createWriteStream('./bigFile.txt')

readStream.pipe(writeStream)