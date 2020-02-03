let fs = require('fs')

// Create library.
fs.mkdir("temp", (err) => {
    if (err) {
        if (err.errno = -4075)
            console.log("Katalogen finns redan")
    } else {
        fs.open("temp/input.txt", "a", (err) => {
            if (err) {
                console.error(err)
            } else
                console.log("Filen skapades.")
        })
        fs.open("temp/output.txt", "a", (err) => {
            if (err) {
                console.error(err)
            } else
                console.log("Filen output.txt skapades.")
        })
        console.log("Din katalog skapades utan större problem.")
    }
})