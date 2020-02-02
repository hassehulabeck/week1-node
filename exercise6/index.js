const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const filePath = '../exercise4/temp'
let filesToDelete

// Mycket hårdkodat, men det beror lite på uppgiftens karaktär.
fs.readdir(filePath, (err, files) => {
    if (err)
        console.error(err)
    else {
        console.log(files)
        filesToDelete = files
        askUser()
    }
})

function askUser() {
    rl.question('Vill du att jag tar bort de listade filerna? (j/n) ', (answer) => {
        if (answer == "Ja" || answer == "ja" || answer == "j" || answer == "J") {
            filesToDelete.forEach(ftd => {
                fs.unlink(filePath + "/" + ftd, (err) => {
                    if (err)
                        console.error(err)
                    else
                        console.log("Filerna har tagits bort.")
                })
            });
        }
        rl.close();
    });
    rl.write("j")

}