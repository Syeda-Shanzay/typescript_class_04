// 1# Arithmetic Operators:

// Addition [+]
let num1 : number = 2
let num2 : number = 3
let cart : number = num1 + num2
console.log(cart)

// Subtraction [-]
let num3 : number = 5
let num4 : number = 2
let total : number = num3 - num4
console.log(total)

// Multiplication [*]
let bags : number = 4
let apples : number = 5
let totalApples : number = bags * apples
console.log(totalApples)

// Division [/]
let num5 : number = 20
let num6 : number = 4
let num7 : number = num5/num6
console.log(num7)

// Exponentiation [**]
let layer = 5
let orange = 6
let power = layer**2
console.log(power)

// Modulus [%]
let a = 10
let b = 100
let c = a % b
console.log(c)

// Unary Operators:
let myAge : number = 15
myAge++
console.log(myAge) // Increment Operator

let yourAge : number = 15
yourAge--
console.log(yourAge) // Decrement Operator

// Combining Operators:
let result1 = 3 + (4 * 5)
console.log(result1) // Answer 23
let result2 = (3 + 4) * 5
console.log(result2) // Answer 35

// Assignment Operators [=]
let x : number = 10
let y : number = 5
x += y
console.log(x) // Answer 15
y +=x
console.log(y) // Answer 20

// String/Concatenation Operators:
let msg = "hello" + "world"
console.log(msg)

// Type Operators:
let myName = "syeda"
console.log(typeof(myName))

// Logical Operators:
let box1 = 5
let box2 = 2
let logicalAnd = (box1>0) && (box2>0)
console.log(logicalAnd)
let logicalOr = (box1<0) || (box2>0)
console.log(logicalOr)
let logicalNot = !(box1>0)
console.log(logicalNot)

// Logic Statement:
// If and If-Else Statements:
let isRaining =true
if (isRaining) {
    console.log("wear a raincoat.")
} else {
    console.log("wear sunglasses.")
}

// Else If Statement:
let weather = "cloudy"
if (weather === "raining") {
    console.log("wear a raincoat.")
} else if (weather === "cloudy") {
    console.log("wear a light jacket.")
} else {
    console.log("wear sunglasses.")
}

// Ternary/Conditional Operators:
let isHungry = false
let snack = isHungry? "apple" : "water"
console.log(`you should have some ${snack}`)

// Relational/Comparison Operators:
let pen1 = 5
let pen2 = 2
let isEqual = (pen1 == pen2)
console.log(isEqual)
let isNotEqual = (pen1 != pen2)
console.log(isNotEqual)
let isGreaterThan = (pen1 > pen2)
console.log(isGreaterThan)
let isLessThan = (pen1 < pen2)
console.log(isLessThan)