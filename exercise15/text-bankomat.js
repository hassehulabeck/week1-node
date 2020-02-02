const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var quest = rl.question('Vilket konto? ', (account) => {
    console.log(`Thank you for your valuable feedback: ${account}`)
    rl.close()
})

module.exports = quest