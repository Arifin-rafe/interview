//rest vs spread operator
//spread operator is used to expand elements of an iterable (like an array or string) into individual elements.
// const arr = [1, 2, 3];
// const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
// console.log(newArr);
// Rest operator is used to collect multiple elements into a single array.
// function sum(...args) {
//     let total = 0;
//     for (let arg of args) {
//       total += arg;
//     }
//     return total;
//   }
//   console.log(sum(1, 2, 3)); // Output: 6

//what is ternary operator?
//The ternary operator is a shorthand way of writing if-else statements. 
//It allows you to write a conditional expression that evaluates to either a true value or a false value.

// var a 
// console.log(a) //undefined
// a=3

// var a =[1,2,3,7,4,5,6]
// console.log(a.sort())
// var b = a.sort().reverse()
// console.log(b)

//var vs const vs let
// var can be updated and redeclared function scope
// let can be updated but not redeclared block scope
// const cannot be updated or redeclared block scope

//what is hoisting?
//Hoisting is a JavaScript feature that moves variable and function declarations to the top of their containing scope.
//It allows you to access variables and functions before they are defined in the code

//new feature of es6
//let and const,spread operator,rest operator,template literals,arrow functions,promises,async await

// what is api?
// An API (Application Programming Interface) is a set of protocols, 
// routines, and tools for building software applications.
// It allows different software components to communicate and interact with each other.

//what is json?
//JSON (JavaScript Object Notation) is a lightweight data-interchange format.
// It is often used to transmit data between a server and a web page.

//what is private routing?
//Private routing is a type of routing in React Router that allows you to define
// specific routes that are only accessible to authenticated users.

// let a = [1,2,3]
// a[5] = 6
// console.log(a)
// console.log(a.indexOf(6))

//map vs filter
//map returns a new array with the results of the callback function applied to each element of the original array.
//filter returns a new array with the elements that pass the test implemented by the callback function.

// const a =[1,3,5,4,2]
// const b = a.filter(item=>item !== 2) // [1,3,5,4] find the elements that are not 2
// console.log(b)