// How can we break js code?
// To break a JavaScript code, you can use the debugger statement. 
// This statement is used to pause the execution of the code and open a debugger window in the browser.
// You can then use the debugger window to inspect the current state of the code, set breakpoints,
// and step through the code line by line.

//undefine vs undeclared?
//Undefined is a variable that has been declared but has not been assigned a value yet.
//Undeclared is a variable that has not been declared in the current scope.

//what are the type of variables?
//let, const and var

//local vs global?
//Global variables are variables that are declared outside of any function or block of code.
//Local variables are variables that are declared inside a function or block of code.

// var vs let differcence?
// Var is a keyword that is used to declare a variable in JavaScript.
// Let is a keyword that is used to declare a block-scoped variable in JavaScript.
// Var is function-scoped, while let is block-scoped.
// var can be redeclared and updated, while let cannot be redeclared.
// Var is hoisted, while let is not hoisted.

// What is the use of debugger keyword?
// The debugger keyword is used to pause the execution of the code and open a debugger window in the browser.
// You can then use the debugger window to inspect the current state of the code, set breakpoints,
// and step through the code line by line.

// what is ternary operator?
// The ternary operator is a shorthand way of writing if-else statements. 
// It allows you to write a conditional expression that evaluates to either a true value or a false value.

// explain me webstorage?
// browser can store data locally, session storage and local storage

//different life cycle method of functional component?
// constructor
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// what is ajax?
// AJAX (Asynchronous JavaScript and XML) is a technique that allows a webpage to request
// or send data to the server without reloading the entire page.
// It makes web apps fast, smooth, and interactive.

// how can we pass state to one component to another?

// where we can use settimeout and setinterval in js?

// setTimeout Real examples:
// Show a popup after 2 seconds
// Debouncing user input
// Delay navigation

// setInterval Real examples:
// Updating a live clock
// Auto refreshing data every 5 seconds
// Running background timers in games

// what is a stateless component?

// A stateless component is a component that does not have its own state.
// It only receives data through props and displays UI.

// what is redux action?
// A Redux action is a plain JavaScript object that describes what happened.
// { type: "ADD_TODO", payload: "Buy milk" }
// It cannot change the state directly. It just tells Redux what you want to do.

// what is redux thunk?
// redux Thunk is a middleware that allows you to write async code (like API calls) inside Redux actions.
// Without thunk → actions must be synchronous.
// With thunk → actions can be asynchronous.