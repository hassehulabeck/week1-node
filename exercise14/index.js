const readline = require('readline');
const yn = require('yn')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const quests = [
    "Gillar du att arbeta med UX-design?",
    "Gillar du hellre att programmera?",
    "Gillar du UX-design så mycket att du funderar på att byta utbildning?"
]

results = [
    "Vad vill du?",
    "Du är på rätt plats",
    "Sök då till ITHS: https://www.iths.se/courses/ux-designer/"
]

rl.question(quests[0], (answer) => {
    if (yn(answer)) {
        nextQuestion(2)
    } else {
        nextQuestion(1)
    }
})

function nextQuestion(nr) {
    rl.question(quests[nr], (answer) => {
        if (!yn(answer)) {
            nr--
        }
        rl.write(results[nr])
        rl.close()
    })
}