//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {
    
    console.log(count)

}
 for ( let count = 1; count < 11; count += 2 ) {
    console.log(count)  // 1, 3, 5, 7, 9
}
for ( let count = 2; count < 11; count += 2 ) {
    console.log(count)  // 2, 4, 6, 8, 10
}


let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌"
]
// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3]
for (let i = 0; i < 6; i += 1) {
    console.log(messages[i]) 
}


let cards = [7, 3, 9]
for (let i = 0; i < cards.length; i++) {
    console.log(cards[i])
}
