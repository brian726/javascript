//  Assignment

1 a String is a   sequence of characters used to represent Text.it can be enclosed in single quotes ('') or double quotes ("")

// 2 use the let,var,const keyword  followed by the variable name and assign it a string value
let greeting = 'Hello, World!';

// 3 use the toUpperCase() method

// 4 use the indexof() method

// 5 let greeting = 'Hello' + '' + 'World!';
// console.log(greeting); // Output:
// Hello World!

6 use the includes() method

7 use the substring() method

8 slicde() can take negative indices and   includes the end index while
substring() cannot take negative indiices and excludes the end IDBIndex

9 use the replaceAll() method or replace() with a   RegExp

// 10 let string = 'Hello World this is JavaScript';
// let wordsArray = string.split('');
// console.log(wordsArray);
// // Output: ['Hello', 'World', 'this', 'is', 'JavaScript']

// 11 let originalString = '   Hello, World!';
// let trimmedString =
// originalString.trim();
// console.log(trimmedString); // Output:
// Hello, World!

12 use the spread operator or Array.from().

// 13 let originalString = 'Hello';
// let reversedString =
// originalString.split('').reverse().join('');
// console.log(reversedString); // Output: olleh

// 14 let mainString = 'Hello, World';
// let substring = 'Hello';
// if (mainString.startsWith(substring)) {
//   console.log('String starts with substring');
// } else {
//   console.log('String does not start with substring');
// }

// 15 let repeatedString = 'Hello'.repeat(3);
// console.log(repeatedString); // Output: HelloHelloHello

// 16 let originalString = 'This is a "quoted" string.';
// console.log(originalString); // Output: This  is a "quoted" string.


// 1 let num = prompt("Enter a number");
// if (num % 2 == 0 && num % 3 == 0) {
//   console.log("BUZZ AND FIZZ");
// } else if (num % 2 == 0) {
//   console.log("BUZZ");
// } else if (num % 3 == 0) {
//   console.log("FIZZ");
// } else {
//   console.log("Not divisible by 2 or 3");
// }

// 2 let age = parseInt(prompt("Enter your age"));
// if (age >= 18) {
//   console.log("You are eligible to vote");
// } else {
//   console.log("You are not eligible to vote");
// }

// 3 let  num = parseInt(prompt(Enter a number));
// if (num > 0) {
//   console.log("Positive");
// } else if (num < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

4 // ussing while loop
let num = parseInt(prompt("Enter a number"));
let i = 1,
while (i <= 10) {
  console.log(`${num} x ${i} {num * i}`);
    i++;
}

    

// 5 let num1 = parseInt(prompt("Enter first number"));
// let num2 = parseInt(prompt("Enter second number"));
// if (num1 >  num2) {
//   console.log(`${num1} is larger`);
// } else if (num2 > num1) {
//   console.log(`${num2} is larger`);
// } else {
//   console.log("Both numbers are equal");
// }

6 