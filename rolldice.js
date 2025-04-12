function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1 // to get 1-6 if no +1 then we get 0-5
    return randomNumber
}

console.log( rollDice() )