// **** Array Methods ****

/*
Methods:-
1) Slice
2) Join
3) Delete
4) Flat
5) Flat Map
6) Some
7) Reduce
8) Map
9) Reverse
10) Every
11) Filter
12) Find Index
13) Find
14) Fill
15) Sort
16) Includes
*/

// Slice - The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments.
/*
Syntax:
Array.slice(startIndex, endIndex)
*/

// Q1: What does `arr.slice(1, 4)` return for `arr = [10, 20, 30, 40, 50, 60]`?
// Ans - It will return 20, 30, 40
let aq1 = [10,20,30,40,50,60];
console.log(aq1.slice(1,4));

// Q2: What is the result of `arr.slice(2)` for `arr = ['a', 'b', 'c', 'd', 'e']`?
// Ans - It will return c, d, e. As it starts from 2 but does not have any ending index so it will give elements till ending.
let aq2 = ['a', 'b', 'c', 'd', 'e'];
console.log(aq2.slice(2));

// Q3: Given `arr = [1, 2, 3, 4, 5]`, what will `arr.slice(-3, -1)` produce?
// Ans - it will give 3,4 as the index from back of 3 is -3 and it will go till -1(exclusive) whoes element will not be produced
let aq3 = [1,2,3,4,5];
console.log(aq3.slice(-3,-1));

// Q4: How does `arr.slice(0, -2)` work on `arr = [7, 14, 21, 28, 35]`?
let aq4 = [7,14,21,28,35];
console.log(aq4.slice(0,-2));

// Q5: What is the output of `arr.slice(-4)` for `arr = [100, 200, 300, 400, 500]`?
let aq5 = [100,200,300,400,500];
console.log(aq5.slice(-4));

// Join - The join() method creates and returns a new string by concatenating all elements of an array. It uses a specified seprator between each element in the resulting string.
/*
Syntax:
array.join(seperator)*/

// Q6: Given a list of strings ["apple", "banana", "cherry"], write a program to join these strings with a comma ", " as the separator.
let aq6 = ["apple","banana","cherry"];
console.log(aq6.join(", "));

// Q7: Given a list of strings ["dog", "cat", "mouse"], write a program to join these strings with a hyphen "-" as the separator.
let aq7 = ["dog", "cat", "mouse"];
console.log(aq7.join("-"));

// Q8: Given a list of strings ["hello", "", "world"], write a program to join these strings with a space " " as the separator.
let aq8 = ["hello","","world"];
console.log(aq8.join(" "));

// Q9: Given a list of integers [1, 2, 3, 4, 5], write a program to join these integers into a single string separated by a semicolon ";".
let aq9 = [1,2,3,4,5];
console.log(aq9.join(";"));

// Q10: Given a string "apple;banana;cherry", write a program to split this string by the semicolon ";" and then join the resulting list with a colon ":".
let aq10 = "apple;banana;cherry";
aq10 = aq10.split(";");
console.log(aq10.join(":"));

// Delete - The delete operator in JavaScript is used to remove a property from an object. It works for both properties owned by the object and those inherited from prototypes. When used on an array item, it creates a ‘hole’ in the array.
/*
Syntax: only for Arrray:
delete object['property']
*/

// Q11: Given an array let colors = ["red", "blue", "green", "yellow"], write a program to remove the element "blue" from the array.
let aq11 = ["red","blue","green","yellow"];
let fq11 = 0;
fq11 = aq11.indexOf("blue");
console.log(delete aq11[fq11]);
console.log(aq11);

// Q12: Given an array let numbers = [1, 2, 3, 4, 5], write a program to remove the element at index 2 (i.e., 3).
let aq12 = [1, 2, 3, 4, 5];
aq12.splice(2,1);
console.log(aq12);

// Q13: Given an array let names = ["Alice", "Bob", "Charlie"], write a program to remove the last element from the array.
let aq13 = ["Alice", "Bob", "Charlie"];
delete aq13[aq13.length-1];
console.log(aq13);

// Q14: Given an array let items = ["apple", "banana", "cherry"], write a program to remove the first element from the array.
let aq14 = ["apple", "banana", "cherry"];
delete aq14[0];
console.log(aq14);

// Q15: Given an array let scores = [10, 20, 30, 40, 50], write a program to remove the elements 20 and 30 using the splice method.
let aq15 = [10,20,30,40,50];
aq15.splice(1,2);
console.log(aq15);

// Flat - The Array flat() method creates a new array that contains more than one array. Basically creates a simple array from an array that contains multiple arrays.
/*
Syntax:
array.flat([depth])
*/

// Q16: Given a nested array let arr = [1, [2, 3], 4], write a program to flatten the array to a single level using the flat method.
let aq16 = [1,[2,3],4];
let flatq16 = aq16.flat(1);
console.log(flatq16);

// Q17: Given a nested array let arr = [1, [2, [3, 4]], [5, 6]], write a program to flatten the array to a single level using the flat method with appropriate depth.
let aq17 = [1, [2, [3, 4]], [5, 6]];
let flatq17 = aq17.flat(1);
console.log(flatq17);

// Q18: Given a nested array let arr = [1, [2, [3, [4, 5]]]], write a program to flatten the array with a depth of 2 using the flat method.
let aq18 = [1, [2, [3, [4, 5]]]];
let flatq18 = aq18.flat(2);
console.log(flatq18);

// Q19: Given a nested array let arr = [1, [2, [3, [4, [5]]]], 6], write a program to flatten the array with a depth of 3 using the flat method.
let aq19 = [1, [2, [3, [4, [5]]]], 6];
let flatq19 = aq19.flat(3);
console.log(flatq19);

// Q20: Given a nested array let arr = [1, [], [2, [3, []]], 4], write a program to flatten the array to a single level using the flat method.
let aq20 = [1, [], [2, [3, []]], 4];
let flatq20 = aq20.flat(1);
console.log(flatq20);

// FlatMap - The flatMap() method transforms each element of an array using a mapping function and flattens the result into a new array. It applies the function to every element, avoiding empty ones, and preserves the original array. 
/*
Syntax:
let A = array.flatMap(callback(current_value, index, array)){
    It returns the new array's elements.
}
*/

// Q21: Given an array of arrays let arr = [[1, 2], [3, 4], [5]], use flatMap to flatten the array to a single level.
let aq21 = [[1, 2], [3, 4], [5]];
let flatMapQ21 = aq21.flatMap((n) => n);
console.log(flatMapQ21);

// Q22: Given an array of arrays let arr = [[1, 2], [3, 4], [5]], use flatMap to increment each number by 1 and flatten the result.
let aq22 = [[1, 2], [3, 4], [5]];
let flatMapQ22 = aq22.flatMap((n) => n.map((m) => m+1));
console.log(flatMapQ22);

// Q23: Given an array of objects let arr = [{ numbers: [1, 2] }, { numbers: [3, 4] }], use flatMap to extract and flatten the numbers arrays.
let aq23 = [{numbers: [1,2]}, {numbers: [3,4]}];
let flatMapQ23 = aq23.flatMap((n) => n["numbers"].map((m) => m));
console.log(flatMapQ23);

// Q24: Given an array of arrays let arr = [[1, 2], [], [3, 4], [5]], use flatMap to remove any empty arrays and flatten the result.
let aq24 = [[1, 2], [], [3, 4], [5]];
let flatMapQ24 = aq24.flatMap((n) => n);
console.log(flatMapQ24);

// Q25: Given an array of arrays where each sub-array contains numbers, use flatMap to flatten the array to a single level, but only include numbers greater than 3.
let aq25 = [[1, 2, 3], [4, 5], [6, 7, 8]];
let flatMapQ25 = aq25.flatMap((n) => n.filter((m) => m>3));
console.log(flatMapQ25);

// Some -  The Array some() method checks if at least one element of the array satisfies the condition implemented by the provided function.
/*
Syntax:
array.some(callback(elements, index, array),thisArg);
*/

// Q26: Given an array of numbers let arr = [1, 2, 3, 4, 5], use the some() method to check if there is any number greater than 3.
let aq26 = [1, 2, 3, 4, 5];
let someQ26 = aq26.some((n) => n>3);
console.log(someQ26);

// Q27: Given an array of objects let users = [{ age: 25 }, { age: 30 }, { age: 18 }], use the some() method to check if there is any user older than 21.
let aq27 = [{ age: 25 }, { age: 30 }, { age: 18 }];
let someQ27 = aq27.some((n) => n["age"]>21);
console.log(someQ27);

// Q28: Given an array of strings let words = ['apple', 'banana', 'cherry'], use the some() method to check if any string contains the letter 'a'.
let aq28 = ['apple', 'banana', 'cherry'];
let someQ28 = aq28.some((element) => element.includes('a'));
console.log(someQ28);

// Q29: Given an array of numbers let numbers = [2, 4, 6, 8], use the some() method to check if there is any even number greater than 10.
let aq29 = [2,4,6,8];
let someQ29 = aq29.some((en) => en>10);
console.log(someQ29);

// Q30: Given an array of arrays where each sub-array contains numbers let arr = [[1, 2], [3, 4], [5, 6]], use the some() method to check if there is any sub-array that contains the number 5.
let aq30 = [[1, 2], [3, 4], [5, 6]];
let someQ30 = aq30.some((n) => n.some((m) => m===5));
console.log(someQ30);

// Reduce - The array reduce() method reduces array element into one single element by calling given function for each elements from left to right.
/*
Syntax:-
arrayName.reduce(callback(firstValue, currentValue, currentIndex, array) {fuction statement});
*/
// Q 31: Given [1, 2, 3, 4, 5], use reduce() to calculate the sum of all elements.
let aq31 = [1,2,3,4,5];
let reduceQ31 = aq31.reduce((totalValue, currentValue) => totalValue + currentValue);
console.log(reduceQ31);

// Q 32: Given [10, 20, 30, 40], use reduce() to find the product of all elements.
let aq32 = [10, 20, 30, 40];
let reduceQ32 = aq32.reduce(function product(product, currentValue){
    return product*currentValue;
    
});
console.log(reduceQ32);

// Q 33: Given [5, 7, 9, 2, 8], use reduce() to find the maximum value.
let aq33 = [5,7,9,2,8];
let reduceQ33 = aq33.reduce(function maximum(initialValue, currentValue){
    return initialValue>currentValue?initialValue:currentValue;
});
console.log(reduceQ33);

// Q 34: Given [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }], use reduce() to calculate the average age.
let aq34 = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }];
let reduceQ34 = aq34.reduce((initialValue, currentValue) => initialValue + currentValue.age , 0);
console.log(reduceQ34/3);

// Q 35: Given ['apple', 'banana', 'cherry'], use reduce() to concatenate all strings into one, separated by a comma.
let aq35 = ['apple', 'banana', 'cherry'];
let reduceQ35 = aq35.reduce((initialValue, currentValue) => initialValue+","+currentValue);
console.log(reduceQ35);

// Q 36: Given [1, -1, 2, -2, 3, -3], use reduce() to add the up.
let aq36 = [1, -1, 2, -2, 3, -3];
let reduceQ36 = aq36.reduce((sum, current) => sum+current);
console.log(reduceQ36);

// Q 37: Given [2, 4, 6, 8], use reduce() to create an object with elements as keys and their squares as values.
let aq37 = [2,4,6,8];
let reduceQ37 = aq37.reduce((objs, current) => {
    objs[current] = current**2;
    return objs;
},{});
console.log(reduceQ37);
console.log(typeof(reduceQ37));

// Q 38: Given ['cat', 'dog', 'fish'], use reduce() to create a single string where each word is separated by a hyphen (-).
let aq38 = ['cat', 'dog', 'fish'];
let reduceQ38 = aq38.reduce((initial, current) => initial+"-"+current);
console.log(reduceQ38);

// Q 39: Given [1, 2, 3, 4, 5], use reduce() to create an object where the keys are the numbers and the values are booleans indicating whether the number is odd (true) or even (false).
let aq39 = [1,2,3,4,5];
let reduceQ39 = aq39.reduce((obj, value) => {
    obj[value] = value%2!==0?true:false;
    return obj;
},{});
console.log(reduceQ39);

// Q 40:  Given [10, 5, 8, 3, 12], use reduce() to find the minimum value in the array.
let aq40 = [10, 5, 8, 3, 12];
let reduceQ40 = aq40.reduce((inital, current) => inital>current?current:inital);
console.log(reduceQ40);

// Map - The map() method creates a new array by applying the give functoin for each element in the given array. It skips empty element, and another feature is it does not alter the origin array.
/*
Syntax:
arrayName.map((element, index, array) => {...});
*/

// Q41: Given an array of numbers [1, 2, 3, 4], use the map method to create a new array where each number is doubled. What does the new array look like?
let aq41 = [1,2,3,4];
let mapQ41 = aq41.map((element) => element*2);
console.log(mapQ41);

// Q42: Given an array of strings ['apple', 'banana', 'cherry'], use map to create a new array where each string is in uppercase.
let aq42 = ['apple', 'banana', 'cherry'];
let mapQ42 = aq42.map((element) => element.toUpperCase());
console.log(mapQ42);

// Q43: Given an array of objects representing users [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }], use map to create a new array with just the names of the users.
let aq43 = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
let mapQ43 = aq43.map((element) => element.name);
console.log(mapQ43);

// Q44: Given an array [10, 20, 30, 40], use the map method to create a new array where each element is the product of the original element and its index in the array.
let aq44 = [10, 20, 30, 40];
let mapQ44 = aq44.map((element, index) => element*index);
console.log(mapQ44);

// Q45: Given an array of numbers [1, 2, 3], use map to create an array of objects where each object has a value property with the number and an isEven property that indicates if the number is even.
let aq45 = [1,2,3];
let mapQ45 = aq45.map((element) => ({
    value: element,
    isEven: element%2==0
}));
console.log(mapQ45);

// Q46: Given an array of functions [x => x + 1, x => x * 2] and an input array [1, 2, 3], use map to apply each function to each element in the input array. What does the result look like?
let aq46 = [x => x + 1, x => x * 2];
let inputaq46 = [1,2,3];
let mapQ46 = aq46.map((func) => inputaq46.map(func));
console.log(mapQ46);

// Q47: Given an array of numbers [1, 2, 3], use map to first square each number, and then use another map to add 10 to each squared number. What does the final array look like?
let aq47 = [1,2,3];
let mapQ47 = aq47.map((element) => element**2);
let mapQ247 = mapQ47.map((element) => element+10);
console.log(mapQ247);

// Q48: Given an array of objects [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], use map to create a new array of strings where each string is formatted as "ID: <id>, Name: <name>".
let aq48 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
let mapQ48 = aq48.map((element) => `ID: ${element.id} Name: ${element.name}`);
console.log(mapQ48);

// Q49: Given an array of numbers [1, 2, 3, 4, 5, 6], use map to first filter out even numbers and then square them. Note: You will need to use filter in conjunction with map.
let aq49 = [1, 2, 3, 4, 5, 6];
let mapFQ49 = aq49.filter((element) => element%2==0);
let mapQ49 = mapFQ49.map((item) => item**2);
console.log(mapQ49);

// Q50: Given an array of strings ['cat', 'dog', 'elephant'], use map to create a new array containing the length of each string.
let aq50 = ['cat', 'dog', 'elephant'];
let mapQ50 = aq50.map((item) => item.length);
console.log(mapQ50);

// Reverse - The reverse() array method is used to reverse each and every element, the first element becomes las element and the last element becomes the first element, and so on.
/*
Syntax:
arrayName.reverse();
*/

// Q51: Given an array [1, 2, 3, 4, 5], use the reverse method to reverse the order of the elements. What does the array look like after reversing?
let aq51 = [1,2,3,4,5];
let revQ51 = aq51.reverse();
console.log(revQ51);

// Q52: Given a 2D array [[1, 2], [3, 4], [5, 6]], use the reverse method to reverse the order of the sub-arrays. What does the new 2D array look like?
let aq52 = [[1, 2], [3, 4], [5, 6]];
let rev52 = aq52.reverse();
console.log(rev52);

// Q53: Given an array of strings ['apple', 'banana', 'cherry'], use the reverse method to reverse the order of the strings. What is the resulting array?
let aq53 = ['apple', 'banana', 'cherry'];
let revQ53 = aq53.reverse();
console.log(revQ53);

// Q54: Given an array [10, 20, 30, 40, 50], use the reverse method to reverse the order of the elements and then use slice to get a copy of the reversed array. What does the copied array look like?
let aq54 = [10, 20, 30, 40, 50];
aq54.reverse();
let revQ54 = aq54.slice();
console.log(revQ54);

// Q55: Given an array of numbers [5, 10, 15, 20], use the reverse method to reverse the array and then use map to add 5 to each element in the reversed array. What does the final array look like?
let aq55 = [5,10,15,20];
aq55.reverse();
let revQ55 = aq55.map((element) => element+5);
console.log(revQ55);

// Every - The every() method check that if all the elements in the array satisfies the condition, if every element satisfies the condition then it retruns true, and if any element retruns false then it will return false. This method do not iterate over empty elments and does not change the original array.
/*
Syntax:
arrayName.every(condition);
*/

// Q56: Given an array of numbers [2, 4, 6, 8], use the every() method to check if all numbers in the array are even. What is the result?
let aq56 = [2, 4, 6, 8];
let everyQ56 = aq56.every((element) => element%2==0);
console.log(everyQ56);

// Q57: Given an array of strings ['apple', 'banana', 'cherry'], use every() to check if all strings have a length greater than 4 characters. What is the result?
let aq57 = ['apple', 'banana', 'cherry'];
let everyQ57 = aq57.every((element) => element.length>4);
console.log(everyQ56);

// Q58: Given an array of objects representing students [{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 90 }], use every() to check if all students have grades greater than or equal to 80.
let aq58 = [{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 90 }];
let everyQ58 = aq58.every((element) => element.grade>=80);
console.log(everyQ58);

// Q59: Given an array of numbers [1, 3, 5, 7], use every() to check if all numbers in the array are greater than 0. What is the result?
let aq59 = [1, 3, 5, 7];
console.log(aq59.every((element) => element>0));

// Q60: Given an array [true, true, false], use every() to check if all elements in the array are true. What is the result?
let aq60 = [true, true, false];
console.log(aq60.every((items) => items===true));

// Filter - The filter() method creates a new array which includes the values of the original array that pass the given condition. It ignores empty elements which makes it effective to work with. It's a powerful tool for extracting data based on a specified criteria from a given array.
/*
Syntax:-
arrayName.filter(callback(element, index, array), thisValue);
*/

// Q61: Use the filter() method to create an array containing only the even numbers from the array [1, 2, 3, 4, 5, 6].
let aq61 = [1, 2, 3, 4, 5, 6];
let filterQ61 = aq61.filter((value) => value%2==0);
console.log(filterQ61);

// Q62: Use the filter() method to create an array containing only words with more than 5 letters from the array ['apple', 'banana', 'cherry', 'date'].
let aq62 = ['apple', 'banana', 'cherry', 'date'];
let filterQ62 = aq62.filter((letter) => letter.length>5);
console.log(filterQ62);

// Q63: Use the filter() method to create an array of users who are older than 30 from the array [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 }].
let aq63 = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 }];
let filterQ63 = aq63.filter((user) => user.age>30);
console.log(filterQ63);

// Q64: Use the filter() method to create an array with numbers that are multiples of 5 from the array [10, 15, 20, 25, 30].
let aq64 = [10, 15, 20, 25, 30];
let filterQ64 = aq64.filter((number) => number%5==0);
console.log(filterQ64);

// Q65: Use the filter() method to create an array with only the non-empty strings from the array ['hello', '', 'world', 'JavaScript', ''].
let aq65 = ['hello', '', 'world', 'JavaScript', ''];
let filterQ65 = aq65.filter((strings) => strings!=='');
console.log(filterQ65);

// Q66: Use the filter() method to create an array of products with a price less than 800 from the array [{ name: 'Laptop', price: 1000 }, { name: 'Phone', price: 500 }, { name: 'Tablet', price: 750 }].
let aq66 = [{ name: 'Laptop', price: 1000 }, { name: 'Phone', price: 500 }, { name: 'Tablet', price: 750 }];
let filterQ66 = aq66.filter((product) => product.price<800);
console.log(filterQ66);

// Q67: Use the filter() method to create an array with sentences that have more than 30 characters from the array ['Short sentence.', 'This one is a bit longer.', 'Another short one.', 'This one is quite a long sentence compared to others.'].
let aq67 = ['Short sentence.', 'This one is a bit longer.', 'Another short one.', 'This one is quite a long sentence compared to others.'];
let filterQ67 = aq67.filter((sentence) => sentence.length>30);
console.log(filterQ67);

// Q68: Use the filter() method to create an array with elements whose index is an odd number from the array [0, 1, 2, 3, 4, 5].
let aq68 = [0, 1, 2, 3, 4, 5];
let filterQ68 = aq68.filter((_, index) => index%2!==0);
console.log(filterQ68);

// Q69: Use the filter() method to create an array with dates from the year 2024 from the array [new Date('2024-01-01'), new Date('2023-12-31'), new Date('2024-02-14'), new Date('2023-06-15')].
let aq69 = [new Date('2024-01-01'), new Date('2023-12-31'), new Date('2024-02-14'), new Date('2023-06-15')];
let filterQ69 = aq69.filter((date) => date.getFullYear()===2024);
console.log(filterQ69);

// Q70: Use the filter() method to create an array of employees who work in the 'Engineering' department and have more than 5 years of experience from the array [{ name: 'John', department: 'HR', years: 5 }, { name: 'Jane', department: 'Engineering', years: 10 }, { name: 'Bob', department: 'Engineering', years: 3 }, { name: 'Alice', department: 'Marketing', years: 7 }].
let aq70 = [{ name: 'John', department: 'HR', years: 5 }, { name: 'Jane', department: 'Engineering', years: 10 }, { name: 'Bob', department: 'Engineering', years: 3 }, { name: 'Alice', department: 'Marketing', years: 7 }];
let filterQ70 = aq70.filter((employee) => employee.department==="Engineering" && employee.years>5);
console.log(filterQ70);

// FindIndex - The findIndex() method returns the first index of the element of an array that satisfies a given condition.
/*
Syntax:-
arrayName.findIndex(callback(currentvalue, index, array), thisValue);
*/

// Q71: Use findIndex() to find the index of the first number less than 10 in the array [15, 8, 12, 5, 20].
let aq71 = [15, 8, 12, 5, 20];
let findIndexQ71 = aq71.findIndex((number) => number<10);
console.log(findIndexQ71);

// Q72: Use findIndex() to find the index of the first string that starts with the letter 'b' in the array ['apple', 'banana', 'cherry', 'blueberry'].
let aq72 = ['apple', 'banana', 'cherry', 'blueberry'];
let findIndexQ72 = aq72.findIndex((string) => string.startsWith('b'));
console.log(findIndexQ72);

// Q73: Use findIndex() to find the index of the user with the name 'Bob' in the array [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 }].
let aq73 = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 }];
let findIndexQ73 = aq73.findIndex((user) => user.name==='Bob');
console.log(findIndexQ73);

// Q74: Use findIndex() to find the index of the first number that is not a multiple of 3 in the array [3, 6, 9, 12, 15].
let aq74 = [3, 6, 9, 12, 15];
let findIndexQ74 = aq74.findIndex((number) => number%3!==0);
console.log(findIndexQ74);

// Q75: Use findIndex() to find the index of the first non-null value in the array [null, undefined, 'value', 42].
let aq75 = [null, undefined, 'value', 42];
let findIndexQ75 = aq75.findIndex((element) => element!==null);
console.log(findIndexQ75);

// Q76: Use findIndex() to find the index of the product with the name 'Tablet' in the array [{ name: 'Laptop', price: 1000 }, { name: 'Phone', price: 500 }, { name: 'Tablet', price: 750 }].
let aq76 = [{ name: 'Laptop', price: 1000 }, { name: 'Phone', price: 500 }, { name: 'Tablet', price: 750 }];
let findIndexQ76 = aq76.findIndex((divice) => divice.name==='Tablet');
console.log(findIndexQ76);

// Q77: Use findIndex() to find the index of the first item with the id of 2 in the array [{ id: 1, type: 'fruit', name: 'apple' }, { id: 2, type: 'vegetable', name: 'carrot' }, { id: 3, type: 'fruit', name: 'banana' }].
let aq77 = [{ id: 1, type: 'fruit', name: 'apple' }, { id: 2, type: 'vegetable', name: 'carrot' }, { id: 3, type: 'fruit', name: 'banana' }];
let findIndexQ77 = aq77.findIndex((item) => item.id===2);
console.log(findIndexQ77);

// Q78: Use findIndex() to find the index of the inner array that contains the number 8 in the nested array [[1, 2, 3], [4, 5, 6], [7, 8, 9]].
let aq78 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let findIndexQ78 = aq78.findIndex((element) => element.includes(8));
console.log(findIndexQ78);

// Q79: Use findIndex() to find the index of the first object where the name property is 'Charlie' in the array [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 }].
let aq79 = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 }];
let findIndexQ79 = aq79.findIndex((user) => user.name==='Charlie');
console.log(findIndexQ79);

// Q80: Use findIndex() to find the index of the first even number in the array [1, 3, 5, 7, 8, 10].
let aq80 = [1, 3, 5, 7, 8, 10];
let findIndexQ80 = aq80.findIndex((number) => number%2===0);
console.log(findIndexQ80);

// Find - The find() method retrns the first element that pass the given test condition, it retrun undefined if no match found. Find method does not changes the original array, and ignores empty slots.
/*
Syntax:-
arrayName.find(callback(element, index, array), thisValue);
*/

// Q81: Find the first element in the array [1, 2, 3, 4, 5] that is greater than 3.
let aq81 = [1,2,3,4,5];
let findQ81 = aq81.find((number) => number>3);
console.log(findQ81);

// Q82: Find the user with the name 'Bob' in the array [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }].
let aq82 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
let findQ82 = aq82.find((user) => user.name==='Bob');
console.log(findQ82);

// Q83: Find the number 40 in the array [10, 20, 30]. What is returned if it doesn't exist?
let aq83 = [10, 20, 30];
let findQ83 = aq83.find((number) => number===40);
console.log(findQ83);
// So undefined is return is the condition is not matched.

// Q84: Find the first word that has more than 5 letters in the array ['apple', 'banana', 'cherry'].
let aq84 = ['apple', 'banana', 'cherry'];
let findQ84 = aq84.find((letter) => letter.length>5);
console.log(findQ84);

// Q85: Find the student with a score less than 80 in the array [{ name: 'John', score: 85 }, { name: 'Jane', score: 92 }, { name: 'Jim', score: 78 }].
let aq85 = [{ name: 'John', score: 85 }, { name: 'Jane', score: 92 }, { name: 'Jim', score: 78 }];
let findQ85 = aq85.find((student) => student.score<80);
console.log(findQ85);

// Q86: Find the first even number in the array [5, 10, 15, 20, 25].
let aq86 = [5, 10, 15, 20, 25];
let findQ86 = aq86.find((number) => number%2==0);
console.log(findQ86);

// Q87: Find the first true value in the array [false, false, true, false].
let aq87 = [false, false, true, false];
let findQ87 = aq87.find((value) => value===true);
console.log(findQ87);

// Q88: Find the item where price multiplied by quantity is greater than 50 in the array [{ price: 10, quantity: 2 }, { price: 20, quantity: 1 }, { price: 15, quantity: 5 }].
let aq88 = [{ price: 10, quantity: 2 }, { price: 20, quantity: 1 }, { price: 15, quantity: 5 }];
let findQ88 = aq88.find((item) => item.price*item.quantity>50);
console.log(findQ88);

// Q89: Find the first number that is divisible by 4 using an arrow function in the array [2, 4, 6, 8, 10].
let aq89 = [2, 4, 6, 8, 10];
let findQ89 = aq89.find((number) => number%4===0);
console.log(findQ89);

// Q90: Find the letter 'e' in the array ['a', 'b', 'c', 'd']. What will be returned if 'e' is not in the array?
let aq90 = ['a', 'b', 'c', 'd'];
let findQ90 = aq90.find((letter) => letter==='e');
console.log(findQ90);

// Fill - The fill() method is used to fill all the elements of the array with a static value from start index to end index. This method manipulates original string.
/*
Syntax:-
arrayName.fill(value,startIndex, endIndex);
*/

// Q91: Given the array [1, 2, 3, 4, 5], use the fill() method to replace all elements with the value 10.
let aq91 = [1, 2, 3, 4, 5];
console.log(aq91.fill(10));

// Q92: Given the array [0, 0, 0, 0, 0], use the fill() method to replace the values from index 2 to the end with the value 7.
let aq92 = [0,0,0,0,0];
console.log(aq92.fill(7,2));

// Q93: Given the array ['a', 'b', 'c', 'd', 'e'], use the fill() method to replace the values from index 1 to index 3 (inclusive) with the string 'x'.
let aq93 = ['a', 'b', 'c', 'd', 'e'];
console.log(aq93.fill('x',1,4));

// Q94: Given the array [5, 10, 15, 20, 25], use the fill() method to replace the elements from index 1 to index 3 with the value 100. Note that the end index is exclusive.
let aq94 = [5, 10, 15, 20, 25];
console.log(aq94.fill(100,1,4));

// Q95: Given the array [1, 2, 3, 4, 5], use the fill() method to replace all elements with the value 99, but only if the array length is greater than 4.
let aq95 = [1, 2, 3, 4, 5];
if(aq95.length>4){
    console.log(aq95.fill(99));
}

// Sort - The sort() method sort the array on the place and return the sorted array. By default it sort the elements as strings in ascending order. A custom comparison function can be provided for to sort for differnet data types.
/*
Syntax:-
arrayName.sort();
*/

// Q96: Given the array [4, 2, 5, 1, 3], use the sort() method to sort the array in ascending order.
let aq96 = [4, 2, 5, 1, 3];
let sortQ96 = aq96.sort();
console.log(sortQ96);

// Q97: Given the array [10, 5, 100, 50], use the sort() method to sort the array in descending order.
let aq97 = [10, 5, 100, 50];
let sortQ97 = aq97.sort((a,b) => b-a);
console.log(sortQ97);

// Q98: Given the array ['banana', 'apple', 'cherry'], use the sort() method to sort the array in alphabetical order.
let aq98 = ['banana', 'apple', 'cherry'];
let sortQ98 = aq98.sort();
console.log(sortQ98);

// Q99: Given the array [{ name: 'John', age: 25 }, { name: 'Jane', age: 20 }, { name: 'Bob', age: 30 }], use the sort() method to sort the array of objects by age in ascending order.
let aq99 = [{ name: 'John', age: 25 }, { name: 'Jane', age: 20 }, { name: 'Bob', age: 30 }];
let sortQ99 = aq99.sort((a,b) => a.age-b.age);
console.log(sortQ99);

// Q100: Given the array [2.5, 1.2, 3.7, 4.6], use the sort() method to sort the array in ascending order based on numeric values.
let aq100 = [2.5, 1.2, 3.7, 4.6];
let sortQ100 = aq100.sort();
console.log(sortQ100);

// Includes - The includes() method return true if the array contains a given element and returns false if the element is present. It start from a given index and if no index is given it by defaults start from index 0;
/*
Syntax:-
arrayName(searchValue, indexToStart);
*/

// Q101: Given the array [1, 2, 3, 4, 5], use the includes() method to check if the array contains the number 3.
let aq101 = [1, 2, 3, 4, 5];
console.log(aq101.includes(3));

// Q102: Given the array ['apple', 'banana', 'cherry'], use the includes() method to check if the array contains the string 'banana'.
let aq102 = ['apple', 'banana', 'cherry'];
console.log(aq102.includes('banana'));

// Q103: Given the array [10, 20, 30, 40, 50], use the includes() method to check if the array contains the number 25. What is returned?
let aq103 = [10, 20, 30, 40, 50];
console.log(aq103.includes(25));
// It retruns false if the given element is not present in the array.

// Q104: Given the array [true, false, false], use the includes() method to check if the array contains the boolean value true.
let aq104 = [true, false, false];
console.log(aq104.includes(true));

// Q105: Given the array [1, 2, 3, 4, 5] with a starting index of 2, use the includes() method to check if any of the elements from index 2 onward contain the number 4.
let aq105 = [1, 2, 3, 4, 5];
console.log(aq105.includes(4,2));