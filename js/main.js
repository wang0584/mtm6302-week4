console.log("JS file add!")

const region = "Canada"

if (region === "Canada") {
    console.log("You are seeing Canadian version of this site")
}

let price = 20
const shippingFee = 15
let cartTotal

if(price >= 50){
    cartTotal = price
} else {
    cartTotal = price + shippingFee
}
//console.log(cartTotal)
document.getElementById("cart1").innerHTML += "Your cart total is: " + cartTotal

//reassigning the price
price = 105
const discount = 0.15

if (price >= 100) {
    cartTotal = price - (price * discount)
} else if (price >= 50) {
    cartTotal = price
} else {
    cartTotal = price + shippingFee
}
console.log(cartTotal)
document.getElementById("cart2").innerHTML += "Your cart total is: " + cartTotal

/* Switch */

//let planet = "Eeeeearth"
let planet = "Earth"

let message

switch (planet) {
    case "Earth":
        message = "Welcome to the third planet!"
        break
    case "Mars":
        message = "Welcome to the red planet!"
        break
    case "jupiter":
        message = "Welcome to the largest planet!"
        break
    default:
       // message = "We do not service this planet!"
        message = `you are on ${planet}, We do not service!`
}
console.log(message)

document.getElementById("cart3").innerHTML += message


//Switch EX2 with stacking cases
let answer = "b"
switch (answer) {
    case "a":
    case "b":
    case "d":
       // console.log("Incorrect answer, please try again")
        document.getElementById("quiz").innerHTML += "Incorrect answer, please try again"
        break
        case "c":
        console.log("Perfect,You did great job!")
}