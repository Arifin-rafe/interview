// let arr =[1,2,3,4]
// arr.map((item,index)=>{
//     console.log(item>2)
//     console.log(index)
// })
//What is useMemo do?
// useMemo optimizes performance by avoiding expensive recalculations.
// Only memoizes values, not functions. For memoizing functions, use useCallback.
// Always provide a dependency array to tell React when to recompute.

// useMemo vs useCallback?
// useMemo memoizes the result of a function (a value) to avoid expensive recalculations. example: computed values
// useCallback memoizes the function itself to prevent unnecessary re-creations on re-renders. example: event handlers

// What is higher order component in react?
// A Higher-Order Component (HOC) in React is a function that takes a component
// and returns a new component with enhanced functionality.
// It is a pattern for reusing component logic without repeating code.
// HOCs do not modify the original component; they create a wrapper component.
// Common use cases for HOCs include code reuse, state abstraction, and props manipulation.
// Example of a simple HOC that adds a loading spinner to a component:

//conditional rendering in react?
// Conditional rendering in React allows you to render different UI elements based on certain conditions.
// You can use JavaScript operators like if, &&, and ? : within JSX to achieve this.

//what are the challenges of react js?
// 1.Learning Curve – JSX and component-based architecture can be tough for beginners.
// 2.State Management – Managing complex state can get tricky without libraries like Redux.
// 3.Performance – Optimizing React for better performance can be challenging.
// 4.Debugging – Debugging React apps can be more complex than regular JavaScript apps.

// difference between <em> tag vs <i> tagg in html?
// Use <em> for emphasis or importance (semantic).
// Use <i> for purely stylistic italic text (visual).

