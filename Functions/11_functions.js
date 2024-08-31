// *********** Functions in JavaScript ***********
// Function are set of programs that can be used anywhere in the application multiple times. It promets code resuability. We do not have to write the same code again and again to use it, write it once use everywhere. Function makes it simple to break down big program into smaller manageble pieces.
// 1. Function Declarations
// Q 1 - Write a function declaration named multiply that takes two numbers and returns their product.
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 3));

// Q 2 - Create a function named greetUser that takes a user’s name as a parameter and logs a greeting message.
function greetUser(uName) {
    return "Good morning" + " " + uName + "! Have a nice day.";
}
console.log(greetUser("Nishant Rana"));

// Q 3 - Define a constructor function Car that accepts make and model as parameters and assigns them to the instance.
function car(make, model) {
    this.make = make;
    this.model = model;
    this.about = function () {
        return this.make + " " + this.model;
    }
}
let g63 = new car('Mercedes', 'GWagon');
console.log(g63.make);
console.log(g63.model)
console.log(g63.about());

// Q 4 - Write a method inside an object calculator that returns the result of adding two numbers.
let calculator = {
    num1: 43,
    num2: 65,
    addition: function () {
        return this.num1 + this.num2;
    }
}
console.log(calculator.addition());

// Q 5 - Implement a function that calculates the factorial of a number using a function declaration.
// n! = n * (n-1)!
function factorial(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(6));

// 2. Function Parameters

// Default Parameter
// Q 6 - Write a function named discountPrice that takes price and discount as parameters, with discount having a default value of 5%. Return the discounted price.
function discountPrice(price, discount = 0.05) {
    return `Total after discount: ${price - (price * discount)}`;
}
console.log(discountPrice(100));

// Q 7 - Modify the discountPrice function to return the original price if the discount is not provided.
function modifedDiscountPrice(price) {
    return "Total: " + price;
}
console.log(modifedDiscountPrice(100));

// Function Rest Parameter - The rest parameter in javascript is used to accept unlimited number of arguments and then they are gathered into an array.
/*
Syntax:
function name(...parameter){
    // statement
}

name(a1,a2,a3,...,aN);
*/
// Q 8 - Create a function sumAll that uses the rest parameter to accept any number of arguments and returns their sum.
function sumAll(...n){
    return n.reduce((number1,number2) => number1+number2);
}
console.log(sumAll(1,2,3,4,5,6,7,8,9,10));

// Q 9 - Implement a function combineStrings that takes multiple string arguments and concatenates them into one string.
function combineString(...strs){
    return strs.join(" ");
}
console.log(combineString("my","name","is","Nishant","Rana"));

// Argument Object - The argument object serves as a local variable and is available in all non arrow function. We can refer to all the arguments of the function using arguments object / attribute.
// Q 10 - Write a function printArguments that logs each argument it receives using the arguments object.
function printArguments(){
    for(let i = 0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}

printArguments(1,2,3);
printArguments("Nishant","Rana");

// Q 11 - Create a function calculateStats that takes any number of numeric arguments and returns an object with sum, average, and count properties using the arguments object.
function calculateStats(){
    let arr = Array.from(arguments);
    let sum = arr.reduce((num1, num2) => num1 + num2);
    let count = arguments.length;
    let average = sum/count;
    return {
        sum:sum,
        average: average,
        count: count
    }
}

console.log(calculateStats(1,2,3,4,5,6));

// Argument Pass by Value - The parameters when called is called arguments. When we call a function and pass a value then we send the value of the variable not the address of the variable. If we try to alter the value of the variable then it will not alter the value outside the function.
// Q 12 - Write a function incrementValue that takes a number, increments it by 1, and returns the new value. Test it with a variable and log the results.
function incrementValue(num){
    return num+1;
}

let numQ12 = 26;
console.log(incrementValue(numQ12));
console.log(numQ12);

// Q 13 - Create a function toUpperCase that takes a string argument and returns the string in uppercase.
function toUpperCase(str){
    return str.toUpperCase();
}

let strQ13 = "abcdefg";
console.log(toUpperCase(strQ13));

// Object Pass by Reference - In pass by reference the function recives the address of the object rather than value. It we alter the value of variable inside the function it affects the original value.
// Q 14 - Write a function updatePerson that takes an object with name and age properties and updates the age property. Log the updated object.
function updatePerson(personObjQ14){
    personObjQ14.age+=1;
    return personObjQ14;
}

let personObjQ14 = {
    name:"Nishant Rana",
    age: 19
}

console.log(personObjQ14);
console.log(updatePerson(personObjQ14));
console.log(personObjQ14);

// Q 15 - Create a function modifyObject that takes an object with properties a and b, modifies a by adding 10, and returns the object.
function modifyObject(numObj){
    numObj.a += 10;
    return numObj;
}

let numObjQ15 = {
    a:12,
    b:13
}

console.log(numObjQ15);
console.log(modifyObject(numObjQ15));
console.log(numObjQ15);

// 3. Function Expressions
// The function expression is used to create function inside a variable. It lets us create a anonymous function a function that does not have a name, and that makes a diffrence of using function declaration and function expression. It also lets us to create IIFE (Imediately Invoked Function Expression) this function is invoked or called as soon as it is created.

// Function Expression (Anonymous) - Function that is created inside a varaible, this function does not have name.
/*
let variable = function(paramters){
    // statement
}
*/
// Q 16 - Write an anonymous function expression that calculates the square of a number and assign it to a variable. Call this function with a number.
let squareFEq16 = function(number){
    return number**2;
}
console.log(squareFEq16(4));

// Q 17 - Implement an anonymous function expression that checks if a number is negative and logs the result.
let checkNegativeFEq17 = function(number){
    return number<0?'Negative':'Positive';
}
console.log(checkNegativeFEq17(-12));
console.log(checkNegativeFEq17(12));

// Function Expression (Named) - Function created inside a expression, this function have a name also.
/*
let variable = function name(paramters){
    // statement
}
*/
// Q 18 -  Define a named function expression powerOfTwo that takes a number and returns its power of 2.
let functionQ18 = function powerOfTwo(number){
    return number**2;
}
console.log(functionQ18(3));

// Q 19 - Write a named function expression logResult that logs the result of multiplying two numbers. Use it to multiply 3 and 4.
let functionQ19 = function logResult(num1, num2){
    return num1*num2;
}
console.log(functionQ19(3,4));

// Arrow Function - The arrow function is a short form of defining a function using => arrow design.
/*
let variable = (parameters) => { statement } 
*/
// Q 20 - Create an arrow function add that takes two parameters and returns their sum.
let functionQ20 = (num1, num2) => {
    return num1+num2;
}
console.log(functionQ20(10,5));

// Q 21 - Write an arrow function isOdd that takes a number and returns true if it's odd, otherwise false.
let isOdd = (numberToCheck) => numberToCheck%2!=0?"Is odd":false;
console.log(isOdd(10));
console.log(isOdd(11));

// Q 22 - Convert the following function to an arrow function:
//     function multiply(x, y) {
//         return x * y;
//     }
let functionQ22 = (x, y) => x*y;
console.log(functionQ22(8,5));

// 4. Nested Functions
// Function inside another function is called nested function. The inner function have access to all the variables and parameters of the outer function, this creates a function hierarchy.
/*
function outer(paramters of outer function){
    // statement of outer function.
    function inner(paramters of inner function){
        // statement of inner function.
    }
    // inner function calling.
    inner;
    //rest statement of outer function.
}
*/
/*
calling of nested function -> outer(a)(b), here 'a' is the parameter of outer function and 'b' is paramter of inner function.
*/
// Q 23 - Write a function outerFunction that contains a nested function innerFunction which adds two numbers and returns the result. Call innerFunction from within outerFunction.
function outerFunction(a){
    function innerFunction(b){
        return a + b;
    }
    return innerFunction;
}
console.log(outerFunction(3)(5));

// Q 24 - Create a function parentFunction that includes a nested function childFunction to multiply a number by 10 and return the result of calling childFunction.
function parentFunction(num){
    function childFunction(){
        return num*10;
    }
    return childFunction;
}
console.log(parentFunction(8)());

// Q 25 - Write a function calculate with a nested function subtract that subtracts two numbers and returns the result of calling subtract.
function calculate(num1){
    function subtract(num2){
        return num1 - num2;
    }
    return subtract;
}
console.log(calculate(9)(5));

// 5. IIFE (Immediately Invoked Function Expression)
// IIFE are funtions that is executed immediately when they are defined. They are used to create a local scope for variable to preven them from poluting the global scope.
/*
(function (){
    // logic for function
})();
*/
// Paramter of IIFE - We can give paramter in IIFE, but we have to give the parameter when use write the () 'braces' for executing the function.

// Q 26 - Write an IIFE that logs the string "I am executed immediately!" to the console.
(function (){
    console.log("I am executed immediately!");
})();

// Q 27 - Create an IIFE that initializes a variable x to 10 and logs its value.
(function (){
    var x = 10;
    console.log(x);
})();

// Q 28 - Write an IIFE that returns an object with a getDate method that logs the current date.
(function (){
    const today = new Date();
    console.log(today.toDateString());
})();

// Q 29 - Refactor the following code to use an IIFE:
//     function showMessage() {
//         var message = "Hello, world!";
//         console.log(message);
//     }
//     showMessage();
(function (){
    var message = "Hello, world!";
    console.log(message);
})();

// Q 30 - Create an IIFE that accepts a parameter name and logs "Hello, [name]!", invoking it immediately with the argument "Alice".
(function (name){
    console.log(`Hello, ${name}!`);
})("Alice");

// Note we can give paramter in IIFE, but we have to give the parameter when use write the () 'braces' for executing the function.

// Additional Questions
// Q 31 - Write a function that takes a number and returns a function which adds that number to its input.
function add(number){
    function inputAdd(value){
        return number + value;
    };
    return inputAdd;
}
let functionQ31 = add(5);
console.log(functionQ31(3));

// Q 32 - Create a function stringRepeater that uses a closure to return a new function which repeats a given string a specified number of times.
function stringRepeater(str){
    function repeatN(times){
        return str.repeat(times);
    }
    return repeatN;
}
console.log(stringRepeater("N")(5));

// Q 33 - Create a function createMultiplier that takes a number n as an argument and returns a new function. This returned function should take another number as its argument and return the result of multiplying this number by n.
function createMultiplier(n1){
    function multiply(n2){
        return n1*n2;
    }
    return multiply;
}
console.log(createMultiplier(5)(5));

// Q 34 - Create a named function expression checkEven that takes a number and returns true if it is even, otherwise false.
let functionQ34 = function checkEven(number){
    return number%2==0?true:false;
}
console.log(functionQ34(5));

// Q 35 - Write a function findMax that uses the rest parameter to find the maximum value among its arguments.
function findMax(...a){
    let max = 0;
    for(let i = 0; i<a.length; i++){
        if(max<a[i]){
            max = a[i];
        }
    }
    return max;
}
console.log(findMax(8,56,6,68,3));

// Q 36 - Create a function multiplyNumbers that accepts an array of numbers and returns their product using the reduce method.
function multiplyNumbers(...number){
    return number.reduce((p,c) => p*c);
}
console.log(multiplyNumbers(5,2,6,3));

// Q 37 - Define a function makeCounter that returns an object with methods increment and getCount to keep track of a count.
function makeCounter(){
    let count = 0;
    return {
        increment: function(){
            count++;
        },
        getCount: function(){
            return count;
        }
    }
}
let x = makeCounter();
x.increment();
x.increment();
console.log(x.getCount());

// Q 38 - Write a function mergeArrays that takes two arrays as arguments and returns a single array with the elements of both arrays combined.
function mergeArrays(arr1){
    function mergeWith(arr2){
        return arr1.concat(arr2);
    }
    return mergeWith;
}
let a1 = [1,2,3,4,5];
let a2 = [6,7,8,9];
console.log(mergeArrays(a1)(a2));

// Q 39 - Create a function createGreeting that takes a greeting message as an argument and returns another function. This returned function should take a name as an argument and return a personalized greeting message.
function createGreeting(message){
    function greetTo(name){
        return message+" "+name;
    }
    return greetTo;
}
let q39 = createGreeting("Have a nice day!");
console.log(q39("Nishant"));

// Q 40 - Create a function createPerson that takes a name and age as arguments and returns an object with the following methods:
//    getName(): Returns the name of the person.
//    getAge(): Returns the age of the person.
//    haveBirthday(): Increases the person's age by 1.

function createPerson(name, age){
    return{
        getName: function(){
            return name;
        },
        getAge: function(){
            return age;
        },
        haveBirthday: function(){
            return age+1;
        }
    }
}
let me = createPerson("Ajay",32);
console.log(me.getName());
me.haveBirthday();
console.log(me.getAge());