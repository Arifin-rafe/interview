// difference between fetch and axios in reactjs?
// Fetch and Axios are both used to make HTTP requests in ReactJS, but they have some differences:
// 1. Syntax: Fetch uses a more verbose syntax with Promises, while Axios has a simpler and cleaner syntax.
// 2. Response handling: Fetch returns a Promise that can be used to handle the response, while Axios returns
// a Promise that can be used to handle the response.

// what are error boundaries in reactjs?
// Error boundaries are React components that catch JavaScript errors anywhere in their child component tree,
// log those errors, and display a fallback UI instead of the component tree that crashed. 
// They help to prevent the entire application from crashing due to an error in a specific part of the UI.

// How to prevent re-rendering in reactjs?
// To prevent rerendering in ReactJS, you can use the following techniques:
// 1. PureComponent: Use the React.PureComponent class to create a component that does not rerender unless its props or state change.
// 2. useMemo: Use the useMemo hook to memoize expensive calculations and avoid unnecessary rerenders.
// 3. useCallback: Use the useCallback hook to memoize functions and avoid unnecessary re-creations on re-renders.

// Example of HOC in reactjs?
// A Higher-Order Component (HOC) is a function that takes a component and returns a new component.
// Example: const withLoading = (Component) => { return (props) => { return <Component {...props} /> }; };