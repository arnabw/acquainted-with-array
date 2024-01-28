/* 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not. */

let array = [1, 2, 3];
let string = "Arnab";
let number = 5;

Array.isArray(array) ? console.log("It's an Array") : console.log("It's not an Array");
Array.isArray(string) ? console.log("It's an Array") : console.log("It's not an Array");
Array.isArray(number) ? console.log("It's an Array") : console.log("It's not an Array");