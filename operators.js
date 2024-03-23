// 1# Arithmetic Operators:
// Addition [+]
var num1 = 2;
var num2 = 3;
var cart = num1 + num2;
console.log(cart);
// Subtraction [-]
var num3 = 5;
var num4 = 2;
var total = num3 - num4;
console.log(total);
// Multiplication [*]
var bags = 4;
var apples = 5;
var totalApples = bags * apples;
console.log(totalApples);
// Division [/]
var num5 = 20;
var num6 = 4;
var num7 = num5 / num6;
console.log(num7);
// Exponentiation [**]
var layer = 5;
var orange = 6;
var power = Math.pow(layer, 2);
console.log(power);
// Modulus [%]
var a = 10;
var b = 100;
var c = a % b;
console.log(c);
// Unary Operators:
var myAge = 15;
myAge++;
console.log(myAge); // Increment Operator
var yourAge = 15;
yourAge--;
console.log(yourAge); // Decrement Operator
// Combining Operators:
var result1 = 3 + (4 * 5);
console.log(result1); // Answer 23
var result2 = (3 + 4) * 5;
console.log(result2); // Answer 35
// Assignment Operators [=]
var x = 10;
var y = 5;
x += y;
console.log(x); // Answer 15
y += x;
console.log(y); // Answer 20
// String/Concatenation Operators:
var msg = "hello" + "world";
console.log(msg);
// Type Operators:
var myName = "syeda";
console.log(typeof (myName));
// Logical Operators:
var box1 = 5;
var box2 = 2;
var logicalAnd = (box1 > 0) && (box2 > 0);
console.log(logicalAnd);
var logicalOr = (box1 < 0) || (box2 > 0);
console.log(logicalOr);
var logicalNot = !(box1 > 0);
console.log(logicalNot);
// Logic Statement:
// If and If-Else Statements:
var isRaining = true;
if (isRaining) {
    console.log("wear a raincoat.");
}
else {
    console.log("wear sunglasses.");
}
// Else If Statement:
var weather = "cloudy";
if (weather === "raining") {
    console.log("wear a raincoat.");
}
else if (weather === "cloudy") {
    console.log("wear a light jacket.");
}
else {
    console.log("wear sunglasses.");
}
// Ternary/Conditional Operators:
var isHungry = false;
var snack = isHungry ? "apple" : "water";
console.log("you should have some ".concat(snack));
// Relational/Comparison Operators:
var pen1 = 5;
var pen2 = 2;
var isEqual = (pen1 == pen2);
console.log(isEqual);
var isNotEqual = (pen1 != pen2);
console.log(isNotEqual);
var isGreaterThan = (pen1 > pen2);
console.log(isGreaterThan);
var isLessThan = (pen1 < pen2);
console.log(isLessThan);
