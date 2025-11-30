// session storage vs local storage?
// Local storage is persistent, meaning the data is saved even after the user closes the browser.
// Session storage is temporary, meaning the data is cleared when the user closes the browser.

// string methods used in js?
// 1. charAt(): Returns the character at a specified index.
// 2. concat(): Joins two or more strings.
// 3. indexOf(): Returns the index of the first occurrence of a substring.
// 4. lastIndexOf(): Returns the index of the last occurrence of a substring.
// 5. length: Returns the length of a string.
// 6. slice(): Extracts a section of a string and returns a new string.
// 7. substring(): Extracts a section of a string and returns a new string.
// 8. toLowerCase(): Converts a string to lowercase.
// 9. toUpperCase(): Converts a string to uppercase.

// falsy values in js?
// false 0 " " NaN null undefined

// async vs defer?
// async: The script is downloaded in the background and executed as soon as it is available,
// without blocking the HTML parsing.
// defer: The script is downloaded in the background but executed only after the HTML parsing is complete.

// function firstRepeatedChar(str) {
//   const freq = {};

//   for (let char of str.toLowerCase()) {
//     if (/[a-z]/.test(char)) {
//       if (freq[char]) return char;
//       freq[char] = 1;
//     }
//   }
//   return null;
// }
// console.log(firstRepeatedChar("Hello, World!")); // l

// function abc (a=10,b=20){
//     return a+b
// }
// console.log(abc(5,10)); // 15
// console.log(abc(5)); // 25
// console.log(abc()); // 30

// what is shadow dom?
// The Shadow DOM is a web standard that enables encapsulation of a component's internal structure and styling.
// It allows developers to create self-contained components with their own DOM tree, styles, and behavior,
// preventing interference from the main document's styles and scripts.

// what is promise chaining?
// Promise chaining is a technique in JavaScript where multiple asynchronous operations are performed
// sequentially using Promises. Each operation returns a Promise, allowing the next operation to wait
// for the previous one to complete before executing. This creates a chain of Promises, making it easier
// to manage complex asynchronous workflows and handle errors in a structured manner.