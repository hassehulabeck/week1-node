let fs = require('fs')
let randExp = require('randexp')

let fileName
let slumpWord
let text = ""

// Kolla om det finns något argument på kommandoraden.
if (process.argv.length < 3) {
    fileName = "someFile.txt"
} else {
    fileName = process.argv[2]
}


// Skapa 500 slumpade ord.
for (let i = 0; i < 500; i++) {
    slumpWord = new randExp(/\w{2,12}/)
    text += slumpWord.gen() + " "
}


fs.writeFile(fileName, text, (err) => {
    if (err)
        console.error(err)
    else {

    }
})