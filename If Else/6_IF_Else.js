// Q1: Write an if statement that checks if a number x is greater than 10.
let x = 25;
if (x > 10) {
    console.log("The number is greater than 10");
}

// Q2: Write an if-else statement that prints "Even" if a number x is even, otherwise prints "Odd".
let eveNum = 36;
if (eveNum % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

// Q3: Write an if-else if-else statement that checks if a number x is positive, negative, or zero.
let checkforPNZ = -25;
if (checkforPNZ >= 0) {
    if (checkforPNZ == 0) {
        console.log("Number is zero");
    }
    else {
        console.log("Number is positive");
    }
}
else {
    console.log("Number is negative");
}

// Q4: Write an if statement that checks if a variable age is less than 18 and prints "Minor" if true.
let tellYorAge = 13;
if (tellYorAge < 18) {
    console.log("Minor");
}

// Q5: Write an if-else statement that checks if a variable temperature is above 30 and prints "Hot"; otherwise, print "Cool".
let tempForCheck = 32;
if (tempForCheck > 30) {
    console.log("Hot");
}
else {
    console.log("Cold");
}

// Q6: Write an if-else if statement to determine if a number x is between 1 and 10 (inclusive), and print "In range" if true.
let valueToCheckRange = 6;
if (valueToCheckRange >= 1 && valueToCheckRange <= 10) {
    console.log("In range");
}
else {
    console.log("Not In range");
}

// Q7: Write a nested if-else statement that checks if a number x is positive; if it is, check if it's greater than 50 and print "High" or "Low".
let checkGr8Than50 = 49;
if (checkGr8Than50 > 50) {
    console.log("High");
}
else {
    console.log("Low");
}

// Q8: Write an if statement that prints "Adult" if a variable age is 18 or older.
let checkAdultAge = 21;
if (checkAdultAge >= 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}

// Q9: Write an if-else statement that checks if a variable score is greater than 80 and prints "Pass"; otherwise, print "Fail".
let checkPass80 = 89;
if (checkPass80 >= 80) {
    console.log("Pass");
}
else {
    console.log("Fail");
}

// Q10: Write an if-else if statement that determines the day of the week based on a number day from 1 to 7, where 1 is Monday and 7 is Sunday.
let dayNumber = 4;
if (dayNumber == 1) {
    console.log("Monday");
}
else if (dayNumber == 2) {
    console.log("Tuesday");
}
else if (dayNumber == 3) {
    console.log("Wednesday");
}
else if (dayNumber == 4) {
    console.log("Thursday");
}
else if (dayNumber == 5) {
    console.log("Friday");
}
else if (dayNumber == 6) {
    console.log("Saturday");
}
else if (dayNumber == 7) {
    console.log("Sunday");
}

// Q11: Write an if statement to check if a variable isRaining is true and print "Take an umbrella".
let isRaining = true;
if(isRaining==true)
{
    console.log("Take an umbrella");
}
else
{
    console.log("Go enjoy the day");
}

// Q12: Write an if-else statement to determine if a number x is divisible by 3. Print "Divisible" if true, otherwise print "Not divisible".
let divBy3 = 51;
if(divBy3%3==0)
{
    console.log("Divisible");
}
else
{
    console.log("Not divisible");
}

// Q13: Write a nested if-else statement that checks if a number x is even; if it is, check if it is greater than 10 and print "Large" or "Small".
let evenCheckGr8than10 = 51;
if(evenCheckGr8than10%2==0)
{
    if(evenCheckGr8than10>10)
    {
        console.log("Large");
    }
    else
    {
        console.log("Small");
    }
}
else
{
    console.log("Odd");
}

// Q14: Write an if-else statement that prints "Pass" if a variable marks is greater than or equal to 50, otherwise prints "Fail".
let passFailCheck = 35;
if(passFailCheck>=50)
{
    console.log("Pass");
}
else
{
    console.log("Fail");
}

// Q15: Write an if-else if statement to classify a number x as "Negative", "Zero", or "Positive".
let checkType = 0;
if(checkType>0)
{
    console.log("Positive");
}
else if(checkType<0)
{
    console.log("Negative");
}
else
{
    console.log("Zero");
}

// Q16: Write an if-else statement to print "Morning" if a variable time is before 12, otherwise print "Afternoon".
let timeCheck = 13;
if(timeCheck<12 && timeCheck>=0)
{
    console.log("Morning");
}
else
{
    console.log("Afternoon");
}

// Q17: Write an if statement to check if a variable isStudent is false and print "Not a student".
let isStudent = false;
if(isStudent==true)
{
    console.log("A student");
}
else
{
    console.log("Not a student");
}

// Q18: Write an if-else statement to check if a number x is greater than 100 and print "High"; otherwise, print "Low".
let numGr8100 = 84;
if(numGr8100>100)
{
    console.log("High");
}
else
{
    console.log("Low");
}

// Q19: Write an if-else if statement to print "Cold", "Warm", or "Hot" based on a temperature variable temp with ranges 0-15, 16-25, and above 25.
let tempRange = 35;
if(tempRange>=0 && tempRange<=15)
{
    console.log("Cold");
}
else if(tempRange>=16 && tempRange<=25)
{
    console.log("Warm");
}
else if(tempRange>25)
{
    console.log("Hot");
}
else
{
    console.log("Freezing");
}

// Write a JavaScript function named checkEligibility that takes an age as input and determines if a person is eligible to vote. A person is eligible to vote if they are 18 years old or older. The function should also check if the age is a valid number (i.e., not less than 0) and handle invalid input appropriately.
let checkAgeForVote = 21;
if(checkAdultAge>0)
{
    if(checkAdultAge>=18)
    {
        console.log("Yes you can vote");
    }
    else
    {
        console.log("No you cannot vote");
    }
}
else
{
    console.log("Age cannot be negative enter a valid age");
}