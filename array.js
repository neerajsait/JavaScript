//Arrays are used to store multiple values in a single variable and ordered list of items....

let firstCard = 10
let secondCard = 4

let cards = [firstCard, secondCard]

console.log(cards[0])
console.log(cards[1])

function render() {

}

let experience = ["intermediate", "beginner", "advanced"]
let education = ["high school", "college", "university"]
let licience = ["driving", "flying", "boating"]
let mySkills = [experience, education, licience]

console.log(experience.length)

let score = ["hardik " + 45 + "(" + 14 + ")"]
console.log(score[0])


let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)

// How can you remove the last item in an array? Try to google it!
messages.pop()
console.log(messages)