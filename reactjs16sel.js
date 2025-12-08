// Explain the basic of redux?
// Redux is a predictable state management library for JavaScript applications, commonly used with React. 
// It helps manage the state of an application in a single, centralized store, making it easier to reason about
// state changes and debug applications.

// The core principles of Redux are:
// 1. Single Source of Truth: The entire state of the application is stored in a single JavaScript object called the "store".
// This makes it easier to track changes and manage state.
// 2. State is Read-Only: The state of the application is read-only, meaning that the store cannot be modified directly. 
// Instead, actions are dispatched to the store to update the state.

// What is the use of reducer in react js?
// In React.js, a reducer is a pure function that takes the current state and an action as arguments and returns a new state.
// Reducers are commonly used in conjunction with state management libraries like Redux or the useReducer hook in React.
// The main purpose of a reducer is to specify how the state should change in response to different actions. 

// what is selector?
// In React.js, a selector is a function that takes the state as an argument and returns a subset of the state. 
// Selectors are used to extract specific parts of the state and make them available to the components that need them.

// what is the work of middleware in redux?
// Middleware in Redux is a way to extend the functionality of the Redux store. 
// It provides a third-party extension point between dispatching an action and the moment it reaches the reducer.
// Middleware can be used for various purposes, such as logging actions, handling asynchronous operations (like API calls), 
// and modifying actions before they reach the reducer. Commonly used middleware includes Redux Thunk and Redux Saga.

// what is redux saga?
// Redux Saga is a middleware library for managing side effects in Redux applications. 
// It uses generator functions to handle asynchronous operations, making it easier to manage complex async flows.
// Redux Saga allows you to write more readable and maintainable code for handling tasks like data fetching, 
// background processing, and more, by separating side effects from the main application logic.

// what is react 18.2.1 version means?
// 18 → Major version -Big changes
// 2 →  Minor version -New features, but safe
// 1 →  Patch version -Small fixes

// what is formik in react?
// Formik is a popular open-source library for building and managing forms in React applications. 
// It simplifies the process of handling form state, validation, and submission by providing a set of 
// reusable components and hooks. Formik helps developers create complex forms with ease, reducing boilerplate code 
// and improving the overall user experience.