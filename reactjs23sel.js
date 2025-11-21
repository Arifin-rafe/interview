//what is event loop?
// The event loop allows JavaScript to handle asynchronous tasks.
// Even though JavaScript runs on a single thread, the event loop 
// lets long operations (like API calls or timers) run in the background, 
// and when they finish, the event loop pushes their callbacks back into the call stack. 
// This keeps the program fast and non-blocking.”

// How to send data from child to parent component?
// To send data from a child component to a parent component,
// the parent defines a callback function and passes it to the child as a prop. example:

// what is react fragment?
// React.Fragment is a special component in React that allows
// you to group multiple elements without adding an extra div element to the DOM.

// Controlled vs Uncontrolled components?
// Controlled components are those whose state is controlled by the React state. //example form
// An uncontrolled component is one where the form data is handled by the DOM itself, not by React state.// useRef

// what is usereducer hook?
// It is an alternative to useState, especially when the state has multiple values or 
// when updates depend on previous state.
// It works similar to Redux, using a reducer function and actions.

// What is heigher order component in react?
// A Higher-Order Component (HOC) in React is a function that takes a component
// and returns a new component with enhanced functionality.
// It is a pattern for reusing component logic without repeating code.
// HOCs do not modify the original component; they create a wrapper component.
// Common use cases for HOCs include code reuse, state abstraction, and props manipulation.
// Example of a simple HOC that adds a loading spinner to a component or logging functionality

// what is compossition?
// Composition in React means building components by combining smaller components.
// Instead of inheritance, React uses composition to reuse UI, pass JSX using children, 
// and create flexible layouts

// WHAT is SSR (Server Side Rendering)?
// SSR means rendering the UI on the server and sending fully formed HTML to the browser.
//  It improves SEO and initial load performance compared to client-side rendering.