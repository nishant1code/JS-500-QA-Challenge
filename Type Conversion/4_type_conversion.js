// Q1 - Write a program that converts the string "123" to a number and prints it.
let stringNumber = "123";
let numberOfString = Number(stringNumber);

console.log(numberOfString);
console.log(typeof(numberOfString));

// Q2 - Write a program that converts the number 456 to a string and prints it.
let numberTostring = 456;
let stringOfNumber = numberTostring.toString();

console.log(stringOfNumber);

// Q3 - Write a program that converts the string "789.45" to an integer and prints the result.
let floatStr = "789.45";
let floatOfString = Number(floatStr);

console.log(floatOfString);

// Q4 - Write a program that converts the boolean value true to a string and prints it.
let boolVal = true;
let boolToStr = String(boolVal);

console.log(boolToStr);

// Q5 - Write a program that converts the string "3.14159" to a float and prints it.
let piStr = "3.14159";
let piStrToNum = Number(piStr);

console.log(piStrToNum);

// Q6 - Write a program that converts the number 0 to a boolean and prints the result.
let zeroNum = 0;
let zeroNumToBool = Boolean(zeroNum);

console.log(zeroNumToBool);

// Q7 - Write a program that converts the string "hello,world" to an array using split and prints the result.
let arrHello = "hello,world";
let helloStr = arrHello.split('');

console.log(helloStr);

// Q8 - Write a program that converts the array ['apple', 'banana', 'cherry'] to a string using join and prints it.
let arrVals = ['apple','banana','cherry'];

let arrToStr = arrVals.join(', ');

console.log(arrToStr);

// Q9 - Write a program that converts the number 123456 to exponential notation (e.g., "1.23456e+5") and prints it.
let num1To6 = 123456;

let expoOfnum = num1To6.toExponential();

console.log(expoOfnum);

// Q10 - Write a program that converts the boolean value false to a number and prints it.
let boolFalse = false;

let boolToNum = Number(boolFalse);

console.log(boolToNum);