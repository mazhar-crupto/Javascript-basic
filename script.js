// Variable Declearation
// Syntax: var variable_name = variable_value;
var x = 15 
var a = 'Salman Khan'

// Print Statement
// syntax: console.log(value)
console.log(x);

// alert is function which gives popup
alert(a); 

// Datatypes: Primitive and Referential
// Primitive Datatypes are Number, String, Boolean, Null, Undefined, symbol
// Hoisting: trying to access the data before its decleration.

// Statement: Set of Instructions
// Conditional: if, if else, switch
// Looping: while, do while, for


// If Statement

var p = true
if (p == true){
  console.log("This is True");
}
else{
  console.log("This is False")
}

// Ternary Operator
// Syntax: condition ? runs if true : runs if false

q = true ? console.log("This is True") : console.log("This is False")

// Truthy Value: True, 1, 2, 3, --------, n
// Falsy Value: False, 0, null, undefined

// Switch Statement: Use the switch statement to select one of many code blocks to be executed.
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

let dice = 5;
switch (dice) {
  case 1:
    console.log("you got one");
    break;
  case 2:
    console.log("you got two"); // Prints: you got two
    break;
  case 3:
    console.log("you got three");
    break;
  case 4:
    console.log("you got four");
    break;
  case 5:
    console.log("you got five");
    break;
  case 6:
    console.log("you got six");
    break;
  default:
    console.log("you did not roll the dice");
}

// Looping Statements

// FOR LOOP
// Syntax:  for(initialization; condition; increment/decrement){        }

for(var i = 0; i <= 5; i++){
  console.log('The value is' + i);
}

// While Loop
// Syntax:  while(condition){      }

var t = 0;
while(t<5){
  console.log("the value is " + t)
  t++
}

// Do While
// do {
//   statement;
// } while (condition);

let n = 6
do {
    let square = n * n;
    n--;
    console.log(square);
 // expected output: 36, 25, 16, 9, 4, 1
} while (n>0);

// Logical Operators: AND , OR, NOT

// AND Operator

var e = 6;
var f = 3;

if(e < 10 && f > 1){
  console.log("True");
}
else{
  console.log("False")
}