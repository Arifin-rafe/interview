//spread vs rest operators?
// Spread operator is used to expand elements of an iterable (like an array or string) into individual elements.
// const arr = [1, 2, 3];
// const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
// console.log(newArr);
// Rest operator is used to collect multiple elements into a single array.

// console.log(abc)
// var abc = 10;

//lexical scope 
// function outerFunction() {
//     let outerVariable = 'I am from outer function';
//     function innerFunction() {
//         console.log(outerVariable); // Accessing variable from outer scope
//     }
//     innerFunction();
// }
// outerFunction(); // Output: I am from outer function

const abc ={
    name:"rafe",
    age:20,
    address:"dhaka"
}

let xyz = {
    ...abc,
    name:"sabbir"
}
const {name, ...pqr} = abc; //rest operator
console.log(pqr,xyz); //

// What is function curring?
// Currying means converting a function that takes multiple arguments into a sequence of functions, 
// each taking one argument at a time

// map vs forEach?
// map() creates a new array with the results of calling a provided function on every element in the calling array.
// forEach() executes a provided function once for each array element but does not return a new array.

// What is the difference between a Class component vs Functional component and which one to use and perform better?

// Class components are ES6 classes that extend from React.Component and have a render method.
// They can hold state and lifecycle methods. Functional components, on the other hand,
// are plain JavaScript functions that return JSX.
// With the introduction of React Hooks in version 16.8,
// functional components can also manage state and side effects.
// The choice between class components and functional components depends on
// the specific requirements of your application.
// If you need to manage state and lifecycle methods, use class components.
// If you need to write pure functions that return JSX, use functional components.
// In terms of performance, functional components with hooks are generally more efficient
// than class components because they have a smaller memory footprint and can be optimized better by
// the React's reconciliation algorithm.
// However, the performance difference is often negligible for most applications.
// It's more important to focus on writing clean, maintainable code rather than
// worrying about the performance differences between the two component types.

//what is CDN?
// CDN stands for Content Delivery Network. It is a network of servers distributed across various geographical locations.
// The primary purpose of a CDN is to deliver web content, such as images, videos, stylesheets, and scripts,
// to users more efficiently and quickly by caching the content on multiple servers closer to the user's location.
// This reduces latency, improves load times, and enhances the overall user experience.
// CDNs also help in reducing the load on the origin server and provide better scalability and reliability for web applications.

//what is the role of transpiler in react?
// A transpiler in React is a tool that converts modern JavaScript (ES6+)
// and JSX syntax into a version of JavaScript that is compatible with older browsers.

//what id babel?
// Babel is a popular JavaScript transpiler that is commonly used in React development.
// It transforms modern JavaScript code and JSX into backward-compatible JavaScript code
// that can run in older browsers or environments that do not support the latest features.

//is useState a synchronous or asynchronous function?
// The state updates in React using useState are asynchronous.
// When you call the state updater function returned by useState,
// React schedules the update and re-renders the component later,
// rather than updating the state immediately.