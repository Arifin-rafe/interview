// What is first class function?
// A function that can be assigned to a variable, passed as an argument,
// or returned from a function is said to be a first-class function.
// A function that is passed as an argument or returned from another function
// is called a first-class function.

// What does “invoke a function” mean?
// To invoke a function simply means to call it — that is, to execute the code inside the function.

// optional chaining vs ternary operator vs template literal?
// In JavaScript, **optional chaining (`?.`)** is used to safely access nested object properties
// without causing an error if a property is missing. The **ternary operator (`? :`)** is a shorthand
// for conditional statements, letting you choose between two values in one line. The **template literal (`` ` ` ``)**
// uses backticks and `${}` to easily insert variables or expressions inside strings.

// What is the difference between a function and a method?
// A function is a block of code that performs a specific task,
// while a method is a function that is associated with an object and performs a specific task on that object.

// let myName = "md minhazul arifin";
// function abc(myName) {
//   let newName = myName.split(" ");
//   let pew = "";
//   for (let x of newName) {
//     let mew = x[0].toUpperCase();
//     pew += mew + x.slice(1, x.length) + " ";
//   }
//   return pew.trim();
// }
// console.log(abc(myName));

// What is Closure?
// closure is a function that has access to variables from its outer function even after
// the outer function has finished executing. USED TO CREATE PRIVATE VARIABLES
// Common Uses:
// Data privacy (like private variables)
// Counters
// Function factories
// Event handlers that remember data
//What are caches?
// Caches are used to store data that is frequently accessed.
// They are used to reduce the number of requests to the server and improve performance.
// Browser Cache → Stores website files locally for faster reloading.
// Server Cache → Keeps frequently used data on the server to reduce database requests.
// Application Cache / Memory Cache → In apps, stores computed results to avoid recalculation.
// CDN Cache → Content Delivery Networks cache data near users for faster access globally.

// function isPalindrome(str) {
//     const cleaned = str.replace(/\s+/g, '').toLowerCase(); // Remove spaces and convert to lowercase
//     const reversed = cleaned.split('').reverse().join('');
//     return cleaned === reversed;
// }
// console.log(isPalindrome("madam"));       // true
// console.log(isPalindrome("Race car"));    // true
// console.log(isPalindrome("hello"));       // false

// Difference between Library vs Frame Work?
// Library:
// A library is a collection of pre-written code (functions, classes, utilities) that
// you call when you need it. You are in control; you decide when and where to use it.
// Framework:
// A framework is a set of pre-defined rules and structure that dictates the flow of your application.
// The framework calls your code, not the other way around. This is often called “Inversion of Control”.

//What methods can be used to optimize react code for better performance?
// useMemo-memorise calculation of value,
// useCallback-memorise function ,
// Proper key in lists, // to avoid unnecessary re-renders
// Minimize parent state Reduce re-renders of children,
// use react lazy loading
// use react virtualization for large lists
