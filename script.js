const questions = [
    {
        "que": "Which is the following markup language.",
        "a": "HTML",
        "b": "CSS",
        "c": "JAVASCRIPT",
        "d": "PHP",
        "correct": "a"
    },

    {
        "que": "Which tag is used at the starting and end of HTML document.",
        "a": "BODY",
        "b": "HTML",
        "c": "BR",
        "d": "IMG",
        "correct": "b"
    },

    {
        "que": "Which extension is used to save the HTML document",
        "a": ".web",
        "b": ".CSS",
        "c": ".HTML",
        "d": ".webpage",
        "correct": "c"
    },

    {
        "que": "Write the name of the tag which contains the contents of a whole webpage.",
        "a": "HTML",
        "b": "DOCTYPE HTML",
        "c": "BODY",
        "d": "HEAD",
        "correct": "c"
    },

    {
        "que": "Write the name of the tag which is empty tag and used to break a line.",
        "a": "LINEBREAK",
        "b": "BREAKLINE",
        "c": "BREAK",
        "d": "BR",
        "correct": "d"
    }

]

let index = 0
let total = questions.length
// console.log(total)
let right = 0
let wrong = 0
const quesBox = document.getElementById("quesBox")
const optionInput = document.querySelectorAll(".options")
const loadQuestion = () => {
    if (index === total) {
        return endQuis()
    }
    reset()
    const data = questions[index]
    // console.log(data.que)
    // console.log(data)
    quesBox.innerText = `${index + 1} ${"."} ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a
    optionInput[1].nextElementSibling.innerText = data.b
    optionInput[2].nextElementSibling.innerText = data.c
    optionInput[3].nextElementSibling.innerText = data.d
}

const submitQuez = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        right++
    }
    else {
        wrong++
    }

    index++
    loadQuestion()
    return
}

const getAnswer = () => {
    let answer
    optionInput.forEach(
        (input) => {

            if (input.checked) {

                // console.log(input.value)
                answer = input.value
            }

        }
    )
    return answer
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const restart = () => {
    document.location.reload()
}

const endQuis = () => {
    document.getElementById("box").innerHTML =
        `<div style="text-align: center; height: 40%">
    <h1>Thanks for playing quiz.</h1>
    <h3>${right} / ${total} are correct</h3>
    </div>`
}

loadQuestion()