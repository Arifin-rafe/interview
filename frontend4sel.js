// What is the difference between a Class component vs Functional component and which one to use and perform better?
// Class components and functional components are two different ways to define components in React.
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

// How to reduce a lot of console logs in react application?
// To reduce a lot of console logs in a React application, you can use the following strategies:
// Use custome logging utility: Create a custom logging utility that wraps around console.log
// structured logging
// use debug library

//What is heigher order component in react?
// A Higher-Order Component (HOC) in React is a function that takes a component
// and returns a new component with enhanced functionality.
// It is a pattern for reusing component logic without repeating code.
// HOCs do not modify the original component; they create a wrapper component.
// Common use cases for HOCs include code reuse, state abstraction, and props manipulation.
// Example of a simple HOC that adds a loading spinner to a component:

// what is reat?
// React is a JavaScript library for building user interfaces.
// It is maintained by Facebook and a community of individual developers and companies.
// React is used to build single-page applications and mobile apps.
