function countdown (){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
    console.log("Happy TO See You!")
}

countdown()

let lap1=10
let lap2=20
let lap3=30
let lap4=40

function lapsum (){
    let totalLap = lap1 + lap2 + lap3 + lap4
    console.log(totalLap)
}
lapsum




// Create a function that increments the lapsCompleted variable with one
// Run it three times
let lapsCompleted = 0
function inc () {
    lapsCompleted = lapsCompleted + 1
}
inc();
inc();
inc();
console.log(lapsCompleted)