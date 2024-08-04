// Q - Write a program that asks for the user's name and then prints a greeting message.
let userName = window.prompt("Enter Your Name");
document.write(`Hello! ${userName}, Nice Meeting You`);

// Q - Write a program that asks for two numbers and prints their sum.
let number1 = Number(window.prompt("Enter the first Number"));
let number2 = Number(window.prompt("Enter the second Number"));

let sumOfTwoNumbers = number1+number2;

console.log(`Sum of ${number1} + ${number2} = ${sumOfTwoNumbers}`);

// Q - Write a program that asks for a number and prints its square.
let numberToBeSquare = Number(window.prompt("Enter a number to get its square"));
console.log(`Square of ${numberToBeSquare} = ${numberToBeSquare**2}`);

// Q - Write a program that asks for two strings and prints their concatenation.
let string1 = window.prompt("Enter a string");
let string2 = window.prompt("Enter anotehr string");

let concatenationOfTwoStrings = string1 +" "+string2;

console.log(concatenationOfTwoStrings);

// Q - Write a program that asks for three numbers and prints their average.
let numToAvg1 = Number(window.prompt("Enter the 1st number"));
let numToAvg2 = Number(window.prompt("Enter the 2nd number"));
let numToAvg3 = Number(window.prompt("Enter the 3rd number"));

let averageOfThreeNums = (numToAvg1+numToAvg2+numToAvg3)/3;

document.write(`The average of ${numToAvg1}, ${numToAvg2}, ${numToAvg3} = ${averageOfThreeNums}`);

// Q - Write a program that asks for a temperature in Celsius and converts it to Fahrenheit.
let temperatureInCelcius = Number(window.prompt("The current temperature in celcius"));

let temperatureConvertor = (temperatureInCelcius*1.8) + 32;

document.getElementById("currentTemp").innerHTML = `The current temperature in farhenite is ${temperatureConvertor}`;

// Q - Write a program that asks for a number and checks if it is odd or even.
let checkForEvenOdd = Number(window.prompt("Enter number"));

if(checkForEvenOdd%2==0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}

// Q - Write a program that asks for the width and height of a rectangle and prints its area.
let lengthOfTriangle = Number(prompt("Enter the length"));
let breadthOfTriangle = Number(prompt("Enter the breadth"));

console.log("The area of triangle is ",lengthOfTriangle*breadthOfTriangle);

// Q - Write a program that asks for two numbers and an operator (+, -, *, /) and performs the corresponding calculation.
let calcNum1 = Number(window.prompt("Enter the first number"));
let calcNum2 = Number(window.prompt("Enter the second number"));
let operator = window.prompt("Enter one operator from the list - [+][-][%|*][/]");

if(operator=='+')
{
    console.log(calcNum1+calcNum2);
}
else if(operator=='-')
{
    console.log(calcNum1-calcNum2);
}
else if(operator=='*')
{
    console.log(calcNum1*calcNum2);
}
else if(operator=='/')
{
    console.log(calcNum1/calcNum2);
}
else
{
    console.log("operation cannot be provided");
}

// Q - Write a program that asks for a distance in kilometers and converts it to miles.'
let distInKm = Number(document.getElementById("kmToMi").innerHTML);

let distanceToMile = distInKm/1.609;

document.write(distanceToMile.toFixed(3));

// Q - Write a program that asks for two numbers and prints the larger one.
let smallNumber = Number(prompt("Enter a number"));
let largerNumber = Number(prompt("Enter another number"));

if(smallNumber>largerNumber)
{
    document.write(smallNumber," is larger");
}
else if(largerNumber>smallNumber)
{
    document.write(largerNumber," is larger");
}
else
{
    document.write(smallNumber," = ",largerNumber);
}

// Q - Write a program that asks for a number and prints whether it is positive, negative, or zero.
let numberCheck = Number(window.prompt("Enter a number"));

if(numberCheck>0)
{
    window.alert("The Number is Positive");
}
else if(numberCheck<0)
{
    window.alert("The Number is Negative");
}
else
{
    window.alert("The Number is Zero");
}

// Q - Write a program that asks for a number and prints if it is divisible by 5.
let numberForDiv5 = Number(document.getElementById("divBy5").innerHTML);

if(numberForDiv5%5==0)
{
    alert("The number is divisible by 5");
}
else
{
    alert("The number is not divisible by 5");
}

// Q - Write a program that asks for the base and height of a triangle and calculates its area.
let height = Number(prompt("Enter the height"));
let base = Number(prompt("Enter the base"));

let areaOfTriangle = (height*base)/2;

console.log(areaOfTriangle);

// Q - Write a program that asks for a number and prints whether it is greater than 10 or not.
let numG8Than10 = Number(prompt("Enter a number"));

if(numG8Than10>10)
{
    window.alert("The number is greater than 10");
}
else
{
    window.alert("The number is smaller or equal to 10");
}