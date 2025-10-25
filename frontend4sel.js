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
