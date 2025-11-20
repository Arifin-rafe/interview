// console.log(sum(2,3))
// console.log(sum(2)(3))

// function sum(x,y){
//     if(y== undefined){
//         return z =>{
//             return x+z
//         }
//     }
//     return x+y
// }

//setInterval vs setTimeout?
// setInterval is used to repeatedly execute a function at a specified interval, 
// while setTimeout is used to execute a function once after a specified delay.

//what are the status codes from api in nodejs?
// 200: OK
// 201: Created
// 202: Accepted
// 204: No Content
// 300 : Multiple Choices
// 400: Bad Request
// 401: Unauthorized
// 403: Forbidden
// 404: Not Found
// 500: Internal Server Error

//librarys for http requests?
// axios
// fetch

//how to handle erroes in fetch?
// try catch

//what is hoisting in js?
// Hoisting is a JavaScript feature that moves variable and
// function declarations to the top of their containing scope.
// It allows you to access variables and functions before they
// are defined in the code

//what is event loop?
// The event loop allows JavaScript to handle asynchronous tasks.
// Even though JavaScript runs on a single thread, the event loop 
// lets long operations (like API calls or timers) run in the background, 
// and when they finish, the event loop pushes their callbacks back into the call stack. 
// This keeps the program fast and non-blocking.

//difference between synchronous and asynchronous code?
// Synchronous code is executed line by line, waiting for 
// each line to complete before moving on to the next line.
// Asynchronous code is executed concurrently, allowing multiple 
// lines to run simultaneously.

//why we use promise?
// Promise is a JavaScript object that represents the eventual completion
// or failure of an asynchronous operation. It allows you to handle
// and manage asynchronous
// operations in a more structured and readable manner.

//life cycle method of functional component?
// constructor
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// What is heigher order component in react?
// A Higher-Order Component (HOC) in React is a function that takes a component
// and returns a new component with enhanced functionality.
// It is a pattern for reusing component logic without repeating code.
// HOCs do not modify the original component; they create a wrapper component.
// Common use cases for HOCs include code reuse, state abstraction, and props manipulation.
// Example of a simple HOC that adds a loading spinner to a component