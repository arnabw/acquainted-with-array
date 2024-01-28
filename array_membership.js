/* 3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not. */

let books = ["javascript book", "python book", "c++ book", "c book", "java book"];

books.includes("javascript book") ? console.log("The book is available") : console.log("Not available");
books.includes("c# book") ? console.log("The book is available") : console.log("Not available");

