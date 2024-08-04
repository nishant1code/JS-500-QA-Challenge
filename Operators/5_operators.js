// Q1: What is the result of the expression 5 + 3?
// 8 - its a arithmetic operation
console.log(5+3);

// Q2: What will be the output of 10 - 4 * 2?
// 2 - the operation will be like 4*2 then the result will be minus by 10
console.log(10-4*2);

// Q3: What does the ++ operator do when used before a variable, e.g., ++x?
// This is an increment operator it increments the value by 1, and acc. to ++x it will first increment the value then give the result.
let x = 1;
console.log(++x);

// Q4: What is the result of the expression 5 > 3?
// The result will be 'true' as it is a comparison operator it chceck if (leftValue > rightValue) left value is greater than right value.
console.log(5 > 3); 

// Q5: How does the != operator differ from the !== operator?
// ' != ' it check the if the left value is not equals to right value, it only checks the values.
// ' !== ' it check if the left value is not eqauls to right value and it also check if the type is also same or not, its a strict checking.
console.log(5 != '5'); // it gives false as value 5 is equals

console.log(5 !== '5'); // it gives true as value 5 is same but type is different

// Q6: What will the expression false || true evaluate to?
// the expression false || true returns 'true' as the OR operator check if at least one value is true 
// and there is also ||= where the the right value is assigned to left when the left value is falsy ex - x ||= y
console.log(false || true);

// Q7: What does the && operator do in a logical expression?
// the && (AND) operator is used to check if both the value are true if any one is false then it will return false.
// there is &&= where the right value is assigned only if right value is truthly ex x ||= y
console.log(false && true);

// Q8: What is the result of 5 % 2?
// this will give the remainder ex - 5 % 2 = 1
console.log(5%2);

// Q9: What does the = operator do in JavaScript?
// the ' = ' operator is called assignment operator and it is used to assign the value to the variable.
let equalOperator = 10;

// Q10: What will be the output of 3 === '3'?
// the output will result in false as the values in same but the type is different one is Number and another one is String.
console.log(3==='3');

// Q11: How do you check if a variable x1 is not equal to 10 using the !== operator?
let x1;
console.log(x1!==10); // this will result true as x is not equals to 10

// Q12: What is the result of the expression !true?
// the result of the expression !true is false as the ! (NOT) operator changes the boolean value.
console.log(!true);

// Q13: What does the ternary operator condition ? trueValue : falseValue do?
// let varName = condition ? trueValue : falseValue;
let ternaryOperatorEx = 10>9 ? "Yes" : "No";
console.log(ternaryOperatorEx);

// Q14: What will the expression 5 ** 2 evaluate to in JavaScript?
// we will get 25 as the right expression will me squared or multiplied two times
console.log(5**2);

// Q15: What is the result of 10 / 2 + 3?
// 8 will be the result as / hare above or higher operator precedence than +
console.log(10 / 2 + 3);