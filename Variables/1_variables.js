// How do you declare a variable named age and set its value to 25?
var age = 25;
// let age = 25;

// If you have a variable named name set to "Alice", how would you change its value to "Bob"?
// -> we will call the variable and give assign new value to withot deleting the old value.
let name = "Alice";
name = "Bob";

// What type of value would you assign to a variable isStudent to indicate that someone is a student?
// -> will assign Boolean value i.e. 'true' to tell if a someone is a student or not.
let isStudent = true;

// Given two variables, firstName with the value "John" and lastName with the value "Doe", how can you combine these into a single string with the full name "John Doe"?
let firstName = "John";
let lastName = "Doe";
let fullName = firstName+" "+lastName;
console.log(fullName);

// If you have two variables, num1 with the value 5 and num2 with the value 10, how would you calculate their sum and store it in a new variable?
let num1 = 5;
let num2 = 10;
let sum = num1+num2;
console.log(sum);

// What is an example of a good variable name in JavaScript, and why is it important to follow naming conventions?
/*
-> The name should be descriptive and must tell what it does.
-> Variable name must be clear
-> Following camelCase is good practice (the starting with lowercase)
*/
let totalAmount = 100;
/*
-> Here total amount gives a clear vision that the variable contains total of amount
*/

// If you have a variable strNum with the value "7" (a string) and another variable num with the value 5 (a number), what will happen if you add these two variables together?
// -> it will give 75 because it will convert the 5 to string
var strNum = "7";
var strNum2 = 5;
console.log(strNum+strNum2);

// What will the value of a variable be if you declare it but do not initialize it?
// -> Then the value inside the variable will give undefined as we did not initialize a value to it.

// What is the purpose of using the const keyword to declare a variable, and what happens if you try to change its value later?
// -> the const keyword is used to store values that will not change, if we try to change the value then it will through an error.
const pi = 3.142;
// pi = "3.142";

// How do you access a property of an object? For example, if you have an object named person with properties firstName and lastName, how would you get the value of the firstName property?
// -> we can get the value using the dot operator (.) or square bracket[]
let person = {
    firstName : "Nishant",
    lastName : "Rana"
}

console.log(person.firstName);
console.log(person["firstName"]);
