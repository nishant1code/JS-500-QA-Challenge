// What is the default value of a variable that has been declared but not initialized in JavaScript?
// -> undefined is the default value of a variable that has been declared but not initialized in js.
let number;
console.log(number);

// How do you explicitly set a variable to null and what does null represent in JavaScript?
// -> Null represent nothing it has its own value
let changeToNull = null;
console.log(changeToNull);

// How would you declare a variable named age and assign it the number 30?
let age = 30;

// How do you create a string variable called message with the value "Hello, JavaScript!"?
let message = "Hello, JavaScript";

// What boolean value would you assign to a variable isLoggedIn to represent that a user is logged in?
let isLoggedIn = true;

// What is a Symbol and how can you create a new symbol with a description "uniqueKey"?
// -> Symbol is a primitive data type in js, and it gives the value a unique identifier and its immutable. Symbols are often used as unique property keys in objects to avoid name clashes and ensure that property keys do not accidentally overwrite each other.
let newSymbol = Symbol("uniqueKey");

// How do you define a BigInt with the value 123456789012345678901234567890?
// -> to define a BigInt you give 'n' at the end of the value, example given below
let oneTozeroRepeat = 123456789012345678901234567890n;
console.log(oneTozeroRepeat);

// What is the difference between undefined and null in JavaScript?
// -> undefined meaning that the value is not initialized or no value assigned
// -> null meaning nothing, to intentionally define empty, it is defined as varname = null;

// What is the result of subtracting 8 from 15? How would you store this result in a variable named difference?
let difference = 8-15;
console.log(difference);

// How can you concatenate the strings "JavaScript" and "is fun" into one string?
let concatStrings = "JavaScript"+"is fun";

// What is the result of the boolean expression true || false? How would you store this result in a variable named result?
// -> the expression will give true as || (or) checks if one atleast one value is true.
let result = true || false;
console.log(result);

// Can you compare two Symbol values to check if they are equal? Explain why or why not.
// -> we can compare two Symbol values to check if they are equal but it will give use false as the Symbol gives the value a unique identification.
let symbol1 = Symbol("unique");
let symbol2 = Symbol("unique");
console.log(symbol1==symbol2);

// How would you perform addition on two BigInt values, such as 100n and 200n, and store the result in a variable named total?
let total = 100n+200n;
console.log(total);

// How do you find the length of the string "Hello" and store this length in a variable named lengthOfHello?
let hStr = "Hello";
let lengthOfHello = hStr.length;
console.log(lengthOfHello);

// How can you check if a variable named item is undefined?
let varUndefined;
let checkUndefined = varUndefined === undefined;
console.log(checkUndefined);

// How can you determine if a variable data is explicitly set to null?
let varNull = null;
let checkNull = varNull === null;
console.log(checkNull);

// How do you convert the string "25" into a number and store it in a variable named numValue?
let kaam25 = "25";
let numValue = Number(kaam25);
console.log(typeof(numValue));

// What boolean value does the expression "" == false evaluate to and why?
// -> the expression will give true as the js take everything as true except "" '' `` , null , false , undefined , 0 , -0 , 0n , NaN;
let boolValue = "" == false;
console.log(boolValue);

// How do you create a symbol with the description "identifier" and store it in a variable named idSymbol?
let idSymbol = "identifire";

// How can you check if a variable largeNumber is of type BigInt?
let largeNumber;
let checkBigIntofLN = typeof(largeNumber) == 'bigint';
console.log(checkBigIntofLN);

let x = "nishant" == true;
console.log(x);