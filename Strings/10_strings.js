// ****************** Strings *****************

/*
**** Methods ****
1) Index Of
2) Slice
3) Substring
4) Substr
5) Replace
6) Replace All
7) Upper Case
8) Lower Case
9) Trim
10) Trim Start and Trim Left
11) Trim End and Trim Right
12) Pad Start
13) Pad End
14) Char At
15) Char Code At
16) Split
17) Locale Compare
*/

// Index Of - indexOf() method helps you to find the index of the element if it is present in the given object, such as string or array.
/*
Syntax:
stringName.indexOf("value to find index of");
*/

// Q1: Given the string let str = "Programming in JavaScript";, what will str.indexOf("Java") return?
let sq1 = "Programming in JavaScript";
console.log(sq1.indexOf("Java"));

// Q2: For the string let str = "The quick brown fox jumps over the lazy dog";, what does str.indexOf("fox") return?
let sq2 = "The quick brown fox jumps over the lazy dog";
console.log(sq2.indexOf("fox"));

// Q3: In the string let str = "Learning JavaScript is fun and rewarding";, what will str.indexOf("fun", 30) return?
let sq3 = "Learning JavaScript is fun and rewarding";
console.log(sq3.indexOf("fun",30));
// It will return -1 as the search for the index of the given word starts from index 30 and it is before it.

// Q4: With the string let str = "Find the index of the first 'e'";, what does str.indexOf("e") return?
let sq4 = "Find the index of the first 'e'";
console.log(sq4.indexOf("e"));

// Q5: What will str.indexOf("notfound") return for the string let str = "Check if this string contains 'notfound'";?
let sq5 = "Check if this string contains 'notfound'";
console.log(sq5.indexOf("notfound"));

// Q6: Given let str = "Case sensitivity matters";, what will str.indexOf("Sensitivity") return?
let sq6 = "Case sensitivity matters";
console.log(sq6.indexOf("Sensitivity"));
// It returns -1 as the case sensitivity matters to find the index of given value.

// Q7: For the string let str = "This is a test. This test is only a test.";, what does str.indexOf("test", 15) return?
let sq7 = "This is a test. This test is only a test.";
console.log(sq7.indexOf("test",15));

// Slice - slice() method is used to extract some part of the string and create a new string without modifying the original string.
/*
Syntax:
stringName.slice(startIndex, endIndex);
*/

// Q8: Given the string let str = "Hello, world!";, what will str.slice(7, 12) return?
let sq8 = "Hello, world!";
console.log(sq8.slice(7,12));

// Q9: For the string let str = "JavaScript is versatile";, what does str.slice(0, 10) return?
let sq9 = "JavaScript is versatile";
console.log(sq9.slice(0,10));

// Q10: In the string let str = "Extracting a substring";, what will str.slice(-9, -1) return?
let sq10 = "Extracting a substring";
console.log(sq10.slice(-9,-1));

// Q11: With the string let str = "String manipulation is fun";, what does str.slice(8) return?
let sq11 = "String manipulation is fun";
console.log(sq11.slice(8));

// Q12: Given let str = "The quick brown fox";, what will str.slice(4, 9) return?
let sq12 = "The quick brown fox";
console.log(sq12.slice(4,9));

// Q13: For the string let str = "Learning JavaScript";, what does str.slice(9, 4) return?
let sq13 = "Learning JavaScript";
console.log(sq13.slice(9,4));
// it returns a <empty string> as the endIndex cannot be less than the startIndex.

// Q14: In the string let str = "JavaScript is awesome";, what will str.slice(-8) return?
let sq14 = "JavaScript is awesome";
console.log(sq14.slice(-8));

// Substring - The substring() metod is used to extract some portion of the string between two given indeces, from start index to end index(exclusive). It preserves the original string. If the end index is less than the start index then it will swap the indeces and then give the result.
// Note for substring() - Index always start from 0, and if the starting index is given negative the it will consider it 0. And the index cannot be fractions, if found so then it will convert it into its lesser whole number.
/*
Syntax:
stringName.substring(startIndex, endIndex);
*/

// Q15: Given the string let str = "Hello, world!";, what will str.substring(7, 12) return?
let sq15 = "Hello, world!";
console.log(sq15.substring(7,12));

// Q16: For the string let str = "JavaScript is fun";, what does str.substring(0, 10) return?
let sq16 = "JavaScript is fun";
console.log(sq16.substring(0,10));

// Q17: In the string let str = "Extracting a part";, what will str.substring(11, 15) return?
let sq17 = "Extracting a part";
console.log(sq17.substring(11,15));

// Q18: With the string let str = "String manipulation";, what does str.substring(8) return?
let sq18 = "String manipulation";
console.log(sq18.substring(8));

// Q19: Given let str = "The quick brown fox";, what will str.substring(4, 9) return?
let sq19 = "The quick brown fox";
console.log(sq19.substring(4,9));

// Q20: For the string let str = "Learning JavaScript";, what does str.substring(9, 4) return?
let sq20 = "Learning JavaScript";
console.log(sq20.substring(9,4));

// Q21: In the string let str = "JavaScript is amazing";, what will str.substring(-8) return?
let sq21 = "JavaScript is amazing";
console.log(sq20.substring(-8));

// Substr - The substr() method is used to extract some portion of a string usign a specified index and extending till for a given number of characters.
// Note the lenth shoult be positive as th substr() method only accepts +ve lenght number of characters.
/*
Syntax:
stringName.substr(index, length);
*/

// Q22: Given the string let str = "The quick brown fox";, what will str.substr(4, 5) return?
let sq22 = "The quick brown fox";
console.log(sq22.substr(4,5));

// Q23: For the string let str = "JavaScript programming";, what does str.substr(11, 6) return?
let sq23 = "JavaScript programming";
console.log(sq23.substr(11,6));

// Q24: In the string let str = "Learning new concepts";, what will str.substr(9, 3) return?
let sq24 = "Learning new concepts";
console.log(sq24.substr(9,3));

// Q25: With the string let str = "Front-end and back-end";, what does str.substr(0, 11) return?
let sq25 = "Front-end and back-end";
console.log(sq25.substr(0,11));

// Q26: Given let str = "Asynchronous JavaScript";, what will str.substr(-11, 10) return?
let sq26 = "Asynchronous JavaScript";
console.log(sq26.substr(-11,10));

// Q27: For the string let str = "Understanding closures";, what does str.substr(10, -6) return?
let sq27 = "Understanding closures";
console.log(sq27.substr(10,-6));

// Q28: In the string let str = "JavaScript fundamentals";, what will str.substr(-10, -3) return?
let sq28 = "JavaScript fundamentals";
console.log(sq28.substr(-10,-3));

// Replace - The replace() method is used to replace the first occurance of a given word with its first occurence. It does not alter the original string maintaining the integrity of the original string.
/*
stringName.replace(valueToBeReplaced, valueToReplaceWith)
*/

// Q29: Replace the first occurrence of "dog" with "cat" in the string "The dog chased the dog away".
let sq29 = "The dog chased the dog away";
let replaceQ29 = sq29.replace("dog","cat");
console.log(replaceQ29);

// Q30: Replace all occurrences of "foo" with "bar" in the string "foo foo foo" using a regular expression.
let sq30 = "foo foo foo";
let replaceQ30 = sq30.replace(/foo/g,"bar");
console.log(replaceQ30);

// Q31: In the string "2024-08-20", replace the hyphens with slashes to get "2024/08/20".
let sq31 = "2024-08-20";
let replaceQ31 = sq31.replace(/-/g,"/");
console.log(replaceQ31);

// Q32: Given the string "the quick brown fox", replace "quick" with "slow".
let sq32 = "the quick brown fox";
let replaceQ32 = sq32.replace("quick","slow");
console.log(replaceQ32);

// Q33: Replace the first vowel in the string "Hello World" with "X".
let sq33 = "Hello World";
let replaceQ33 = sq33.replace(/a|e|i|o|u/,"X");
console.log(replaceQ33);

// Q34: Replace all spaces with underscores in the string "This is a test" to get "This_is_a_test".
let sq34 = "This is a test";
let replaceQ34 = sq34.replace(/ /g,"_");
console.log(replaceQ34);

// Q35: In the string "I love JavaScript", replace "love" with "adore".
let sq35 = "I love JavaScript";
let replaceQ35 = sq35.replace("love","adore");
console.log(replaceQ35);

// Replace All - The replaceAll() method is used to replace all instances of a given substring or patternt with a new substring. It does not change the original string.
/*
Syntax:
stringName.replceAll(substringToReplace, substringToReplaceWith);
*/

// Q36: Replace all occurrences of "apple" with "mango" in the string "apple pie and apple tart" using the replaceAll() method.
let sq36 = "apple pie and apple tart";
let replaceAllQ36 = sq36.replaceAll("apple","mango");
console.log(replaceAllQ36);

// Q37: In the string "1234-5678-9012", use replaceAll() to replace all hyphens (-) with colons (:).
let sq37 = "1234-5678-9012";
let replaceAllQ37 = sq37.replaceAll("-",":");
console.log(replaceAllQ37);

// Q38: Given the string "hello hello hello", use replaceAll() to replace all occurrences of "hello" with "hi".
let sq38 = "hello hello hello";
let replaceAllQ38 = sq38.replaceAll("hello","hi");
console.log(replaceAllQ38);

// Q39: Replace all instances of the word "sun" with "moon" in the string "The sun rises and the sun sets" using replaceAll().
let sq39 = "The sun rises and the sun sets";
let replaceAllQ39 = sq39.replaceAll("sun","moon");
console.log(replaceAllQ39);

// Q40: How can you use replaceAll() to replace all occurrences of the substring "123" with "abc" in the string "abc123def123ghi"?
let sq40 = "abc123def123ghi";
let replaceAllQ40 = sq40.replaceAll("123","abc");
console.log(replaceAllQ40);

// Q41: Given the string "foo bar baz foo bar", replace all occurrences of "bar" with "qux" using replaceAll().
let sq41 = "foo bar baz foo bar";
let replaceAllQ41 = sq41.replaceAll("bar","qux");
console.log(replaceAllQ41);

// Q42: Use replaceAll() to remove all instances of the substring "remove" from the string "This will remove remove remove text".
let sq42 = "This will remove remove remove text";
let replaceAllQ42 = sq42.replaceAll("remove","");
console.log(replaceAllQ42);

// Upper Case - The .toUpperCase() method is used to convert whole string to upper case and return a new string. The upper case method only takes one parameter and that is the string which you want to convert to upper case.
/*
Syntax:
stringName.toUpperCase()
*/

// Q43: Convert the string "hello world" to uppercase using the toUpperCase() method.
let sq43 = "hello world";
console.log(sq43.toUpperCase());

// Q44: Given the string "JavaScript is fun", use toUpperCase() to convert it to "JAVASCRIPT IS FUN".
let sq44 = "JavaScript is fun";
console.log(sq44.toUpperCase());

// Q45: Use the toUpperCase() method to change the string "This is a test" to uppercase.
let sq45 = "This is a test";
console.log(sq45.toUpperCase());

// Q46: Convert the string "welcome to the jungle" to uppercase.
let sq46 = "welcome to the jungle";
console.log(sq46.toUpperCase());

// Q47: Apply toUpperCase() to the string "123abc!@#" and print the result.
let sq47 = "123abc@#";
console.log(sq47.toUpperCase());

// Q48: Use toUpperCase() to convert "today's date" to uppercase. What will be the output?
let sq48 = "today's date";
console.log(sq48.toUpperCase());

// Q49: Given the string "Mixed CASE" with mixed casing, use toUpperCase() to make all characters uppercase.
let sq49 = "Mixed CASE";
console.log(sq49.toUpperCase());

// Lower Case - The .toLowerCase() method is used to convert the string to lower case and retrun a new string that contains characters converted to the lower case.
/*
Syntax:
stringName.toLowerCase()
*/

// Q50: Convert the string "GOODBYE" to lowercase using the toLowerCase() method.
let sq50 = "GOODBYE";
console.log(sq50.toLowerCase());

// Q51: Given the string "Coding Challenges", use toLowerCase() to convert it to "coding challenges".
let sq51 = "Coding Challenges";
console.log(sq51.toLowerCase());

// Q52: Use the toLowerCase() method to change the string "JavaScript Functions" to lowercase.
let sq52 = "JavaScript Functions";
console.log(sq52.toLowerCase());

// Q53: Convert the string "HELLO FROM THE OTHER SIDE" to lowercase.
let sq53 = "HELLO FROM THE OTHER SIDE";
console.log(sq53.toLowerCase());

// Q54: Apply toLowerCase() to the string "Th3 Qu1ck Br0wn F0x" and print the result.
let sq54 = "Th3 Qu1ck Br0wn F0x";
console.log(sq54.toLowerCase());

// Q55: Use toLowerCase() to convert "This is a Sample Text" to lowercase. What will be the output?
let sq55 = "This is a Sample Text";
console.log(sq55.toLowerCase());

// Q56: Given the string "Uppercase Letters", use toLowerCase() to make all characters lowercase.
let sq56 = "Uppercase Letters";
console.log(sq56.toLowerCase());

// Trim - The trim() method is used to remove unnecessary whitespaces from both sides of a string. It does not alter the original string and it is useful to sanitize user input or triming unnecessay spaces form the string.
/*
Syntax:
stringName.trim()
*/

// Q57 - Given the string let str = " Hello World! ", what is the result of applying str.trim()?
let sq57 = " Hello World! ";
console.log(sq57.trim());

// Q58 - For the string let str = "\t\n Welcome to JavaScript! \n\t", what does str.trim() return?
let sq58 = "\t\n Welcome to JavaScript! \n\t";
console.log(sq58.trim());

// Q59 - What does str.trim() return when applied to let str = " "?
let sq59 = " ";
console.log(sq59.trim());
// It returns <empty string> as there is nothing to return.

// Q60 - What is the result of str.trim() on let str = "NoSpacesHere"?
let sq60 = "NoSpacesHere";
console.log(sq60.trim());

// Q61 - If let str = " LeadingSpaces", what is the output of str.trim()?
let sq61 = " LeadingSpaces";
console.log(sq61.trim());

// Q62 - What will str.trim() output for let str = "TrailingSpaces "?
let sq62 = "TrailingSpaces ";
console.log(sq62.trim());

// Q63 - When str = " SpecialChars!@#$$%^ ", what is the result of str.trim()?
let sq63 = " SpecialChars!@#$$%^ ";
console.log(sq63.trim());

// Trim Start and Trim Left
// Trim Start - The trimStart() method is used to remove whitespaces from the starting of the string. It does not modify the string including the whitespaces after the string.
/*
Syntax:
stringName.trimStart()
*/

// Q64 - Given the string let str = " \tSpaces at the start", what is the result of applying str.trimStart()?
let sq64 = " \tSpaces at the start";
console.log(sq64.trimStart());

// Q65 - What does str.trimStart() return for the string let str = "\n\n Extra newlines at the beginning"?
let sq65 = "\n\n Extra newlines at the beginning";
console.log(sq65.trimStart());

// Q66 - For the string let str = "No leading spaces", what will str.trimStart() output?
let sq66 = "No leading spaces";
console.log(sq66.trimStart());

// Trim Left - The trimLeft() method is an alias of the trimStart() method. Just like the trimStart() method it removes whitespaces form the starting of the string, or we can say from the left side of the string.
/*
Syntax:
stringName.trimLeft()
*/

// Q67 - What is the result of str.trimLeft() for the string let str = "\t\n Extra leading whitespace"?
let sq67 = "\t\n Extra leading whitespace";
console.log(sq67.trimLeft());

// Q68 - Given the string let str = " Text with spaces at the start", what does str.trimLeft() return?
let sq68 = " Text with spaces at the start";
console.log(sq68.trimLeft());

// Q69 - For the string let str = " \t\t More spaces before text", what is the result of str.trimLeft()?
let sq69 = " \t\t More spaces before text";
console.log(sq69.trimLeft());

// Q70 - What will str.trimLeft() output for let str = "No spaces at the start"?
let sq70 = "No spaces at the start";
console.log(sq70.trimLeft());

// Trim End and Trim Right
// Trim End - The trimEnd() method is used to remove white spaces from the ending of the string. It do not remove white spaces form the starting, and it also does not alter the original string.
/*
Syntax:
stringName.trimEnd();
*/
// Q71 - You have the following string: let str = "Hello, World! "; Use the trimEnd() method to remove the trailing spaces.
let sq71 = "Hello, World! ";
console.log(sq71.trimEnd());

// Q72 - Given the string: let sentence = "JavaScript is fun! "; Use the trimEnd() method to remove the trailing whitespace. What will the length of the resulting string be?
let sq72 = "JavaScript is fun! ";
console.log(sq72.trimEnd().length);

// Q73 - Consider the following code: let text = " Leading spaces and trailing spaces "; let trimmedText = text.trimEnd(); console.log(\Original length: ${text.length}`); console.log(`Trimmed length: ${trimmedText.length}`);What will be the output of theconsole.log` statements?
let sq73 = " Leading spaces and trailing spaces ";
console.log(`Origianl length: ${sq73.length}`);
console.log(`Trimmed Length: ${sq73.trimEnd().length}`);

// Trim Right - The trimRight() method is an alias of the trimEnd() method and it does exactly same thing like trimEnd(), it removes whitespaces from the right side of the string.
/*
Syntax:
stringName.trimRight();
*/
// Q74 - Use trimRight() on the string " Hello, World! " and describe the result.
let sq74 = " Hello, World! ";
console.log(sq74.trimRight());

// Q75 - Apply trimRight() to the string "Hello\tWorld!\n" and describe the result.
let sq75 = "Hello\tWorld!\n";
console.log(sq75.trimRight());

// Q76 - Apply trimRight() to the string "NoWhitespace" and describe the result.
let sq76 = "NoWhitespace";
console.log(sq76.trimRight());

// Q77 - Use trimRight() on the string "Text with trailing spaces " and describe the r
let sq77 = "Text with trailing spaces ";
console.log(sq77.trimRight());

// Pad Start - The padStart() method is used to pad a string with another string until the given length is reached. The padStart is implementd from the left side of the sting.
/*
Syntax:
string.padStart(length, padString);
*/
// Q78 - What is the result of "abc".padStart(10, '*')?
let sq78 = "abc";
console.log(sq78.padStart(10,"*"));

// Q79 - What does "123".padStart(6, '0') return?
let sq79 = "123";
console.log(sq79.padStart(6,'0'));

// Q80 - What happens with "data".padStart(-5, ' ')?
let sq80 = "data";
console.log(sq80.padStart(-5,' '));

// Q81 - What is the result of "hello".padStart(8, 'x')?
let sq81 = "hello";
console.log(sq81.padStart(8,'x'));

// Q82 - What does "test".padStart(10, 'abc') produce?
let sq82 = "test";
console.log(sq82.padStart(10,'abc'));

// Q83 - What is the outcome of "hello".padStart(12, '-')?
let sq83 = "hello";
console.log(sq83.padStart(12,'-'));

// Q84 - What happens when you use "pad".padStart(3, ' ')?
let sq84 = "pad";
console.log(sq84.padStart(3,' '));

// Pad End - The padEnd() method is used to pad a string with given string unitl the given length is reached. The padding in padEnd() method is done at the end of the string, meaning right side of the string.
/*
Syntax:
string.padEnd(length, padString);
*/
// Q85 - What is the result of "cat".padEnd(8, '-')?
let sq85 = "cat";
console.log(sq85.padEnd(8,'-'));

// Q86 - What does "hello".padEnd(12, '0') return?
let sq86 = "hello";
console.log(sq86.padEnd(12,'0'));

// Q87 - What happens when you use "open".padEnd(7, ' ')?
let sq87 = "open";
console.log(sq87.padEnd(7,' '));

// Q88 - What is the result of "data".padEnd(10, 'x')?
let sq88 = "data";
console.log(sq88.padEnd(10,'x'));

// Q89 - What does "java".padEnd(9, 'abc') produce?
let sq89 = "java";
console.log(sq89.padEnd(9,'abc'));

// Q90 - What is the outcome of "code".padEnd(6, '!')?
let sq90 = "code";
console.log(sq90.padEnd(6, '!'));

// Q91 - What happens when you use "end".padEnd(5, '*')?
let sq91 = "end";
console.log(sq91.padEnd(5,'*'));

// Char at - The charAt() method is used return the character at a given index if it is present in string. Index in javascript strings starts from 0.
/*
Syntax:
string.charAt(index);
*/
// Q92 - What does "hello".charAt(1) return?
let sq92 = "hello";
console.log(sq92.charAt(1));

// Q93 - What is the result of "JavaScript".charAt(4)?
let sq93 = "JavaScript";
console.log(sq93.charAt(4));

// Q94 - What does "OpenAI".charAt(0) return?
let sq94 = "OpenAI";
console.log(sq94.charAt(0));

// Q95 - What is the output of "code".charAt(2)?
let sq95 = "code";
console.log(sq95.charAt(2));

// Q96 - How does "example".charAt(10) behave when called?
let sq96 = "example";
console.log(sq96.charAt(10));

// Q97 - What is the result of "data".charAt(3)?
let sq97 = "data";
console.log(sq97.charAt(3));

// Q98 - What does "test".charAt(-1) return?
let sq98 = "test";
console.log(sq98.charAt(-1));

// Char code at - The charCodeAt() method return a number which represents the unicode of the character at the given index.
/*
string.charCodeAt(index);
*/
// Q99 - What is the result of "hello".charCodeAt(1)?
let sq99 = "Hello";
console.log(sq99.charCodeAt(1));

// Q100 - What does "JavaScript".charCodeAt(4) return?
let sq100 = "JavaScript";
console.log(sq100.charCodeAt(4));

// Q101 - What is the output of "OpenAI".charCodeAt(0)?
let sq101 = "OpenAI";
console.log(sq101.charCodeAt(0));

// Q102 - How does "code".charCodeAt(2) behave?
let sq102 = "code";
console.log(sq102.charCodeAt(2));

// Q103 - What does "example".charCodeAt(10) return?
let sq103 = "example";
console.log(sq103.charCodeAt(10));

// Q104 - What is the result of "data".charCodeAt(3)?
let sq104 = "data";
console.log(sq104.charCodeAt(3));

// Q105 - What does "test".charCodeAt(-1) return?
let sq105 = "test";
console.log(sq105.charCodeAt(-1));

// Split - The split() method is used to seprate the string by a given specified seprator and those elements will become the elemnts of array. This method breaksdown the given string to array. If sepratro is not defined then it will sepracte each character and will convert to array elements.
/*
Syntax:
string.split(seprator, limit)
limit -> Defines the upper limit on the number of splits to be found in the given string. If the string remains unchecked after the limit is reached then it is not reported in the array.
*/
// Q106 - Given the string "apple,banana,orange", use the split() method to separate the string into an array of individual fruit names. What is the resulting array?
let sq106 = "apple,banana,orange";
console.log(sq106.split(','));

// Q107 - Given the string "one,two,three,four", use the split() method to split the string by commas, but limit the result to only 2 elements. What is the resulting array?
let sq107 = "one,two,three,four";
console.log(sq107.split(',',2));

// Q108 - Given the string "Hello world, how are you?", use the split() method to split the string by spaces. What is the resulting array?
let sq108 = "Hello world, how are you?";
console.log(sq108.split(' '));

// Q109 - Given the string "apple#banana#cherry#date", use the split() method to split the string by the # character. What is the resulting array?
let sq109 = "apple#banana#cherry#date";
console.log(sq109.split('#'));

// Q110 - Given the string "2024-08-23", use the split() method to split the string by the - character. What is the resulting array?
let sq110 = "2024-08-23";
console.log(sq110.split('-'));

// Q111 - Given the string "a,b,c,", use the split() method to split the string by commas. What is the resulting array?
let sq111 = "a,b,c";
console.log(sq111.split(','));

// Q112 - Given the string "one1two2three3four", use the split() method with a regular expression to split the string by digits. What is the resulting array?
let sq112 = "one1two2three3four";
console.log(sq112.split(/\d/));

// Locale Compare - The localeCompare() method is a inbuilt javascript string method to compare string elements. It return a positive number is referece string is lexically greater than the compare string, return negative number is refrence string is smaller and 0 if they both are equal.
/*
referenceString.localeCompare(compareString);
*/
// Q113 - Use the localeCompare() method to compare the strings "apple" and "banana". What is the result?
console.log("apple".localeCompare("banana"));

// Q114 - Use the localeCompare() method to compare the strings "apple" and "Apple". What is the result?
console.log("apple".localeCompare("Apple"));

// Q115 - Compare the strings "resume" and "résumé" using localeCompare() with a locale option set to "fr". What is the result?
console.log("resume".localeCompare("résumé"));

// Q116 - Use the localeCompare() method to compare the strings "résumé" and "resume" what is the result?
console.log("résumé".localeCompare("resume"));

// Q117 - Compare the strings "test" and "test" using the localeCompare() method. What is the result?
console.log("test".localeCompare("test"));

// Q118 - Use the localeCompare() method to compare the strings "naïve" and "naive". What is the result when using { sensitivity: 'accent' }?
console.log("naïve".localeCompare("naive"));

// Q119 - Compare the strings "apple pie" and "apple" using the localeCompare() method. What is the result?
console.log("apple pie".localeCompare("apple"));