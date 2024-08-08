// Basics

//     Q1: Print numbers 1 to 10 using a for loop.
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//     Q2: Print numbers 1 to 10 using a while loop.
let iQ2 = 1;
while (iQ2 <= 10) {
    console.log(iQ2);
    iQ2++;
}

//     Q3: Print numbers 10 to 1 using a for loop.
for (let iR = 10; iR >= 1; iR--) {
    console.log(iR);
}

//     Q4: Print numbers 10 to 1 using a while loop.
let iQ4 = 10;
while (iQ4 >= 1) {
    console.log(iQ4);
    iQ4--;
}
//     Q5: Print all even numbers between 1 and 20 using a for loop.
console.log("Even number between 1 to 20")
for (let iQ5 = 1; iQ5 <= 20; iQ5++) {
    if (iQ5 % 2 == 0) {
        console.log(iQ5);
    }
}

//     Q6: Print all odd numbers between 1 and 20 using a while loop.
console.log("Odd numbers between 1 to 20");
let iQ6 = 1;
while (iQ6 <= 20) {
    if (iQ6 % 2 != 0) {
        console.log(iQ6);
    }
    iQ6++;
}

//     Q7: Print the first 5 square numbers (1, 4, 9, 16, 25) using a for loop.
console.log("Square of first 5 numbers");
for (let i = 1; i <= 5; i++) {
    console.log(i ** 2);
}

//     Q8: Print the first 5 cube numbers (1, 8, 27, 64, 125) using a while loop.
console.log("Cube of first 5 numbers");
let iQ8 = 1;
while (iQ8 <= 5) {
    console.log(iQ8 ** 3);
    iQ8++;
}

//     Q9: Calculate the sum of numbers from 1 to 10 using a for loop.
console.log("Sum from 1 to 10");
let sum1To10 = 0;
for (let i = 1; i <= 10; i++) {
    sum1To10 += i;
}
console.log(sum1To10);

//     Q10: Calculate the sum of numbers from 1 to 10 using a while loop.
console.log("Sum from 1 to 10 using while loop");
let sum1To10UsingWhile = 0;
let iQ10 = 1;
while (iQ10 <= 10) {
    sum1To10UsingWhile += iQ10;
    iQ10++;
}
console.log(sum1To10UsingWhile);


// Nested Loops

//     Q11: Print a 5x5 grid of stars (*) using nested for loops.
console.log("5 x 5 Grid");
for (let i = 1; i <= 5; i++) {
    let rowEle = '';
    for (let j = 1; j <= 5; j++) {
        rowEle += "* ";
    }
    console.log(rowEle);
}

//     Q12: Print a right-angled triangle of stars with height 5 using nested for loops.
console.log("Right Angle triangle of height 5");
for (let i = 1; i <= 5; i++) {
    let rc = '';

    for (let j = 1; j <= i; j++) {
        rc += " * ";
    }
    console.log(rc);
}

//     Q13: Print a multiplication table (1 to 5) using nested for loops.
console.log("Table 1 to 5");
for (let ti = 1; ti <= 5; ti++) {
    console.log(`Table of ${ti}`);
    for (let tj = 1; tj <= 5; tj++) {
        console.log(`${ti} X ${tj} = ${ti * tj}`);
    }
}

//     Q14: Print a pyramid of numbers (1, 12, 123, ...) with 4 rows using nested for loops.
console.log("Pyramid of number increasing");
for (let i = 1; i <= 4; i++) {
    let x = '';
    for (let j = 1; j <= i; j++) {
        x += j;
    }
    console.log(x);
}

//     Q15: Print a checkerboard pattern of X and O with a size of 8x8 using nested for loops.
console.log("Checkerboard pattern of X and O with size of 8 X 8");
for (let i = 1; i <= 8; i++) {
    let pattern = '';
    if (i % 2 == 0) {
        for (let j = 1; j <= 4; j++) {
            pattern += "OX";
        }
    }
    else {
        for (let k = 1; k <= 4; k++) {
            pattern += "XO";
        }
    }
    console.log(pattern);
}

// Iterating Over Arrays

// We will use this given array for these questions.
let iteratingOverArrayUsed = [72, 15, 98, 43, 56, 29, 87, 62, 35, 10, 91, 53, 78, 44, 21, 67, 89, 14, 33, 50]

//     Q16: Print each element of an array using a for loop.
console.log("Print element of array using for loop");
for (let ele = 0; ele < iteratingOverArrayUsed.length; ele++) {
    console.log(`${ele + 1} element = ${iteratingOverArrayUsed[ele]}`);
}

//     Q17: Print each element of an array using a while loop.
console.log("Print element of array using while loop");
let iQ17 = 0;
while (iQ17 < iteratingOverArrayUsed.length) {
    console.log(`${iQ17 + 1} element = ${iteratingOverArrayUsed[iQ17]}`);
    iQ17++;
}

//     Q18: Find the sum of all elements in an array using a for loop.
console.log("Sun of elements in array using for loop");
let sumOfElementsFor = 0;
for (let i = 0; i < iteratingOverArrayUsed.length; i++) {
    sumOfElementsFor += iteratingOverArrayUsed[i];
}
console.log("Sum = ", sumOfElementsFor);

//     Q19: Find the sum of all elements in an array using a while loop.
console.log("Sum of elements in array using while loop");
let iQ19 = 0;
let sumOfElementsWhile = 0;
while (iQ19 < iteratingOverArrayUsed.length) {
    sumOfElementsWhile += iteratingOverArrayUsed[iQ19];
    iQ19++;
}
console.log("Sum = ", sumOfElementsWhile);

//     Q20: Find the maximum value in an array using a for loop.
console.log("Maximum element of the array");
let maximumElement = 0;
for (let currentIndex = 0; currentIndex < iteratingOverArrayUsed.length; currentIndex++) {
    if (iteratingOverArrayUsed[currentIndex] > maximumElement) {
        maximumElement = iteratingOverArrayUsed[currentIndex];
    }
}
console.log("Maximum element = ", maximumElement);

//     Q21: Find the minimum value in an array using a for loop.
console.log("Minimum element of the array");
let minimumElement = 0;
for (let currentIndex = 0; currentIndex < iteratingOverArrayUsed.length; currentIndex++) {
    if (currentIndex == 0) {
        minimumElement = iteratingOverArrayUsed[currentIndex];
    }
    else {
        if (iteratingOverArrayUsed[currentIndex] < minimumElement) {
            minimumElement = iteratingOverArrayUsed[currentIndex];
        }
    }
}
console.log("Minimum element = ", minimumElement);

//     Q22: Count the number of elements in an array using a for loop.
console.log("Count the number of elements in array");
let countElementsQ22 = 0;
for (let i = 0; i < iteratingOverArrayUsed.length; i++) {
    countElementsQ22 += 1;
}
console.log(countElementsQ22);

//     Q23: Reverse the order of elements in an array using a for loop.
console.log("Reverse the order of elements in  an array using a for loop");
let reversedArrayQ23 = [];
for (let backIndex = iteratingOverArrayUsed.length - 1; backIndex >= 0; backIndex--) {
    reversedArrayQ23.push(iteratingOverArrayUsed[backIndex]);
}
console.log(reversedArrayQ23);

//     Q24: Create a new array with each element doubled using a for loop.
console.log("Double each element of array using for loop");
let doubledElementArrayQ24 = [];
for (let index = 0; index < iteratingOverArrayUsed.length; index++) {
    doubledElementArrayQ24[index] = (iteratingOverArrayUsed[index] ** 2);
}
console.log(doubledElementArrayQ24.join(' | '));

// Using for...in and for...of

// Object used in these questions
let objectExample = {
    name: "nishant",
    age: 20,
    occupation: "learner",
    country: "INDIA",
    hobbies: ["swimming", "reading", "running"]
}

//     Q25: Iterate over the properties of an object using a for...in loop.
console.log("Iterate over object properties using for in loop");
for (let properties in objectExample) {
    console.log(properties);
}

//     Q26: Iterate over the values of an object using a for...of loop on an array created from Object.values().
console.log("Iterating over object values using for of loop");
let objectValues = Object.values(objectExample);
for (let values of objectValues) {
    console.log(values);
}
//     Q27: Use a for...in loop to count the number of properties in an object.
console.log("Number of elements in object");
let countObjectPropertiesQ27 = 0;
for (let ele in objectExample) {
    countObjectPropertiesQ27 += 1;
}
console.log(countObjectPropertiesQ27);

//     Q28: Use a for...of loop to print the elements of a Set.
console.log("for of loop to print elements of a set");
const setExample = (["apple", "samsung", "redmi", "nokia", "redmi", "samsung"]);
for (let setElements of setExample) {
    console.log(setElements);
}

//     Q29: Use a for...of loop to print the characters of a string.
console.log("Print characters of string using for of loop");
let stringExample = "Hello! Captain";
for (let ele of stringExample) {
    document.write(ele + "<br>")
}

// break and continue

//     Q30: Print numbers 1 to 10, but stop when the number 5 is reached using a for loop and break.
console.log("Break statement using for loop");
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

//     Q31: Print numbers 1 to 10, skipping the number 5 using a for loop and continue.
console.log("Continue statement using for loop");
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

//     Q32: Print all numbers from 1 to 20, but stop the loop if a number is divisible by 4 using while and break.
console.log("Break statement using while loop");
let iQ32 = 1;
while (iQ32 <= 20) {
    if (iQ32 % 4 == 0) {
        break;
    }
    console.log(iQ32);
    iQ32++;
}

//     Q33: Print all numbers from 1 to 20, but skip numbers divisible by 4 using while and continue.
console.log("Continue statement using while loop");
let iQ33 = 0;
while (iQ33 < 20) {
    iQ33++;
    if (iQ33 % 4 == 0) {
        continue;
    }
    console.log(iQ33);
}

// Advanced

//     Q34: Create a Fibonacci sequence up to the 10th number using a for loop.
console.log("Fibonacci series using for loop");
let current = 0;
let next = 1;
let fib = 0;
let x = []
for (let i = 0; i < 10; i++) {
    x.push(current);
    fib = current + next;
    current = next;
    next = fib;
}
console.log(x.join(" , "));

//     Q35: Create a Fibonacci sequence up to the 10th number using a while loop.
console.log("Fibonacci series using while loop");
let currentW = 0;
let nextW = 1;
let fibW = 0;
let fibArrW = [];
let iteration = 0;
while (iteration < 10) {
    iteration++;
    fibArrW.push(currentW);
    fibW = currentW + nextW;
    currentW = nextW;
    nextW = fibW;
}
console.log(fibArrW.join(" , "));

//     Q36: Write a for loop that prints each element of a nested array.
console.log("Print elements of nested array");
let nestedArrayExample = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
for (let i = 0; i < nestedArrayExample.length; i++) {
    console.log("Elements of row", i + 1);
    console.log(nestedArrayExample[i]);
}

//     Q37: Write a for loop that prints each sub-array of a nested array.
console.log("Each sub array of nested array");
for (let i = 0; i < nestedArrayExample.length; i++) {
    console.log("Elements of row", i);
    for (let j = 0; j < nestedArrayExample[i].length; j++) {
        console.log(`Element (${i},${j}) = ${nestedArrayExample[i][j]}`);
    }
}

//     Q38: Calculate the factorial of a number using a for loop.
// !n = n * n-1;
console.log("Factorial using for loop");
let factToNum = 5;
let factorial = 1;
let tempQ38 = factToNum;
for (let i = 0; i < factToNum; i++) {
    factorial = factorial * tempQ38;
    tempQ38--;
}
console.log(`Factorial of ${factToNum} = ${factorial}`);

//     Q39: Calculate the factorial of a number using a while loop.
console.log("Factorial using while loop");
let facToNumW = 5;
let factorialW = 1;
let tempQ39 = facToNumW;
let iterationQ39 = 0;
while (iterationQ39 < facToNumW) {
    iterationQ39++;
    factorialW = factorialW * tempQ39;
    tempQ39--;
}
console.log("Factorial of ", facToNumW, " = ", factorialW);

//     Q40: Generate a list of prime numbers less than 50 using a for loop.
console.log("Prime number up to 50 using for loop");
let primeArrF = [];
function checkPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
for (let i = 2; i <= 50; i++) {
    if (checkPrime(i)) {
        primeArrF.push(i);
    }
}
console.log(primeArrF.join(' , '));

//     Q41: Generate a list of prime numbers less than 50 using a while loop.
console.log("Prime number up to 50 using while loop");
let primeArrW = [];
let iQ41 = 2;
while (iQ41 <= 50) {
    if (checkPrime(iQ41)) {
        primeArrW.push(iQ41);
    }
    iQ41++;
}
console.log(primeArrW.join(' , '));

//     Q42: Print the first 10 numbers of the Collatz sequence starting from 10 using a while loop.
/* The Collatz sequence, also known as the 3n + 1 sequence, is a sequence of numbers defined as follows:
Collatz Sequence Rules:
    Start with any positive integer n.
    If n is even, divide it by 2.
    If n is odd, multiply it by 3 and add 1.
    Repeat the process with the new value of n.

The sequence continues until n becomes 1. According to the Collatz conjecture, this sequence will always eventually reach 1, regardless of which positive integer you start with.
*/
console.log("Collatz sequence using for loop");
let collatzNumber = 10;
let upToCollatz = collatzNumber;
for (let i = 1; i <= upToCollatz; i++) {
    if (collatzNumber % 2 == 0) {
        collatzNumber = collatzNumber / 2;
        if (collatzNumber / 2 == 1) {
            console.log("The mark of 1 HIT !!!!");
            break;
        }
    }
    else {
        collatzNumber = (3 * collatzNumber) + 1;
    }
    console.log("Current collatz value = ", collatzNumber);
}

// Special Cases

//     Q43: Print a sequence of numbers where each number is the previous number plus 2 using a for loop.
console.log("Print sequence of number incremented by 2 using while loop");
for (let i = 0; i < 10; i++) {
    console.log(i * 2);
}

//     Q44: Print a sequence of numbers where each number is the previous number times 2 using a while loop.
console.log("Print sequence of number incremented by 2 using while loop");
let iQ44 = 0;
while (iQ44 < 10) {
    console.log(iQ44 * 2);
    iQ44++;
}

//     Q45: Create a pattern where each row contains a number of * equal to its row number (e.g., 1 *, 2 **, 3 ***, etc.) using nested for loops.
console.log("Pattern using for loop");
for (let i = 1; i <= 6; i++) {
    let patternStrQ45 = '';
    for (let j = 1; j <= i; j++) {
        patternStrQ45 += "* ";
    }
    console.log(`${i} ${patternStrQ45}`);
}

//     Q46: Print all numbers from 1 to 100, but replace multiples of 3 with “Fizz”, multiples of 5 with “Buzz”, and multiples of both with “FizzBuzz” using a for loop.
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


// Iteration Challenges

//     Q47: Use a for loop to find the first number greater than 50 that is also a multiple of 7.
console.log("Print the first number greater than 50 and is multiple of 7 using for loop");
for (let i = 51; ; i++) {
    if (i % 7 == 0) {
        console.log(i);
        break;
    }
}

//     Q48: Use a while loop to find the first number greater than 50 that is also a multiple of 7.
console.log("Print the first number greater than 50 and is multiple of 7 using while loop");
let iQ48 = 51;
while (true) {
    if (iQ48 % 7 == 0) {
        console.log(iQ48);
        break;
    }
    iQ48++;
}

//     Q49: Print a reverse pyramid of numbers (e.g., 54321, 5432, 543, ...) with 5 rows using nested for loops.
console.log("Reverse pyramid with number 54321, 5432, ...");
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 5; j >= i; j--) {
        pattern = pattern + j + " ";
    }
    console.log(pattern);
}
//     Q50: Print the sum of all even numbers between 1 and 50 using a for loop.
console.log("Print sum of even number between 1 to 50");
let sumQ50 = 0;
for (let i = 2; i <= 50; i += 2) {
    sumQ50 += i;
}
console.log(sumQ50);

// Combining Loops with Functions

//     Q51: Write a function that prints numbers from 1 to n using a for loop.
console.log("Function to print numbers from 1 to n");
function printNumsF(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
printNumsF(100);

//     Q52: Write a function that calculates the sum of numbers from 1 to n using a while loop.
console.log("Sum of numbers till n using while loop");
function sumToNW(n) {
    let sumOfNums = 0;
    let i = 1;
    while (i <= n) {
        sumOfNums += i;
        i++;
    }
    return sumOfNums;
}
console.log(sumToNW(50));

//     Q53: Write a function that returns the factorial of a number using a for loop.
// !n = n * n-1
console.log("Function for factorial using for loop");
function factF(n) {
    let factorial = 1;
    let temp = n;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * temp;
        temp--;
    }
    return factorial;
}
console.log(factF(6));

//     Q54: Write a function that returns the factorial of a number using a while loop.
console.log("Function for factorial using while loop");
function factW(n) {
    let temp = n;
    let factorialW = 1;
    let i = 1;
    while (i <= n) {
        factorialW *= temp;
        temp--;
        i++;
    }
    return factorialW;
}
console.log(factW(6));

//     Q55: Write a function that takes an array and returns a new array with each element squared using a for loop.
console.log("Function that return a new array by squaring the given array elements for loop");
function squaredArrF(arr) {
    let newSquaredArray = [];
    for (let i = 0; i < arr.length; i++) {
        newSquaredArray.push(arr[i] ** 2);
    }
    return newSquaredArray;
}
let argsArrF = [5, 6, 9, 7, 6, 3, 2, 7, 4];
let callSquaredArr = squaredArrF(argsArrF);
console.log(callSquaredArr);

//     Q56: Write a function that takes an array and returns a new array with only even numbers using a for loop.
console.log("Function that return a new array that have only even numbers in the given array elements using while loop")
function evenArrW(x) {
    let newEvenArrayW = [];
    let i = 0;
    while (i < x.length) {
        if (x[i] % 2 == 0) {
            newEvenArrayW.push(x[i]);
        }
        i++;
    }
    return newEvenArrayW;
}
let callEvenArrW = evenArrW(argsArrF);
console.log(callEvenArrW);

// Nested Loop Challenges

//     Q57: Write a function that prints a matrix (2D array) with a specified number of rows and columns using nested for loops.
console.log("Print a matrix(2D) array using for loop");
let twoDArrF = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function printTwoDArr(x) {
    for (let row = 0; row < x.length; row++) {
        let str = '';
        for (let column = 0; column < x[row].length; column++) {
            str = str + x[row][column] + " "
        }
        console.log(str);
    }
}
printTwoDArr(twoDArrF);

//     Q58: Write a function that generates a multiplication table of size n x n using nested for loops.
console.log("Print multiplication table of n X n using for loop");
function multiplofnN(n) {
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            console.log(`Table of ${i}`);
            for (let j = 1; j <= n; j++) {
                console.log(`${i} X ${j} = ${i * j}`);
            }
        }
    }
}
multiplofnN(10);

//     Q59: Write a JavaScript function sumEvenNumbers(n) that takes a positive integer n and returns the sum of all even numbers from 1 to n (inclusive).
console.log("Sum of even number using for loop");
function sumEvenNumbers(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumEvenNumbers(10));

//     Q60: Write a JavaScript function findLargestPrime(arr) that takes an array of positive integers arr and returns the largest prime number in the array. If there are no prime numbers, return null.
console.log("Print the largest prime number in the array using for loop");
let primeArr = [3, 10, 7, 12, 5];

function checkPrimeX(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function findLargestPrime(arr) {
    let maxPrime = null;
    for (let i = 0; i < arr.length; i++) {
        if (checkPrimeX(arr[i])) {
            if (arr[i] > maxPrime) {
                maxPrime = arr[i];
            }
        }
    }
    return maxPrime;
}
console.log(findLargestPrime(primeArr));

// Miscellaneous

// string used in these questions
let bio = "Hi my name is Nishant Rana";

//     Q61: Write a for loop that prints out the characters of a string in reverse order.
console.log("Print the characters of string in reverse order using for loop");
let revStrF = '';
for (let index = bio.length - 1; index >= 0; index--) {
    revStrF += bio[index];
}
console.log(revStrF);

//     Q62: Write a while loop that prints out the characters of a string in reverse order.
console.log("Print the characters of string in reverse order using while loop");
let revStrW = '';
let iQ62 = bio.length - 1;
while (iQ62 >= 0) {
    revStrW += bio[iQ62];
    iQ62--;
}
console.log(revStrW);

//     Q63: Create a for loop that prints out the Fibonacci sequence up to a specified number of terms.
console.log("Print fibonacci series up to a specified number");
let fibSeries = [0, 1];
let fibonacciNumber = 0;
let tillNumber = 10;
for (let i = 1; i <= tillNumber - 2; i++) {
    fibonacciNumber = fibSeries[i - 1] + fibSeries[i];
    fibSeries.push(fibonacciNumber);
}
console.log(fibSeries.join(" "));

//     Q64: Write a JavaScript function that prints numbers from 1 to n (inclusive) in a single line, separated by spaces.
for(let i = 1; i<=100; i++){
    console.log(i);
}

//     Q65: Write a JavaScript function that calculates the sum of the first n natural numbers. Natural numbers start from 1 (i.e., 1, 2, 3, ...).
let sumOfN = 0;
for(let i = 1; i<=100; i++){
    sumOfN += i;
}
console.log(sumOfN);