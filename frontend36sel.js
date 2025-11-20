// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }
// Answer: 5
// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }
// Answer: 0 1 2 3 4

// what is hoisting is js?
// Hoisting is a JavaScript feature that moves variable and function declarations to the top of their containing scope.
// It allows you to access variables and functions before they are defined in the code.

// What is Closure?
// A closure is when an inner function remembers variables from its outer function’s scope,
// even after the outer function has finished running.
// Closures are often used to create private variables or functions.

// Describe apply and bind method in js?
// Call, apply, and bind are methods used to set the 'this' context in JavaScript functions.
// Call invokes the function immediately with a specified 'this' value and arguments provided individually.
// Apply is similar to call, but it takes arguments as an array.
// Bind returns a new function with a specified 'this' value and can have preset initial arguments.

// Difference promies and async await?
// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
// They use .then() and .catch() methods to handle success and failure cases.
// Async/await is syntactic sugar built on top of promises that allows you to write asynchronous code in a more synchronous-looking manner.
// It uses the 'async' keyword to declare a function and 'await' to pause execution until a promise is resolved.

// what is event delegation in js?
// Event delegation is a technique in JavaScript where a single event listener is added to a parent element
// to manage events for its child elements. Instead of attaching individual event listeners to each child,
// the parent listens for events that bubble up from the children, improving performance and simplifying code management.

// What is heigher order component in react?
// A Higher-Order Component (HOC) in React is a function that takes a component
// and returns a new component with enhanced functionality.
// It is a pattern for reusing component logic without repeating code.
// HOCs do not modify the original component; they create a wrapper component.
// Common use cases for HOCs include code reuse, state abstraction, and props manipulation.
// Example of a simple HOC that adds a loading spinner to a component:

// what is context api in react?
// The Context API in React is a way to manage global state and share data across the component tree
// without having to pass props down manually at every level.
// It allows you to create a Context object, which can hold values that can be accessed by any component
// within the Provider component. This is useful for themes, user authentication, and other global settings.

// Difference between stateful and stateless components?
// Stateful components are React components that manage their own state using the 'this.state' object.
// Stateless components are pure functions that return JSX without any internal state management.
// They do not have access to 'this.state' or 'this.setState()'.

// Controlled vs Uncontrolled components?
// Controlled components are those whose state is controlled by the React state. //example form
// An uncontrolled component is one where the form data is handled by the DOM itself, not by React state.// useRef