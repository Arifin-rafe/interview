// console.log("rafe"-100) // This will output NaN (Not a Number) because subtracting a
// // number from a string that cannot be converted to a number results in NaN.

// what is rest operator in js?
// The rest operator in JavaScript is represented by three dots (...) and is used to
// collect multiple elements into a single array or object. It is commonly used in
// function parameters to gather all remaining arguments into an array.

// what is spread operator in js?
// The spread operator in JavaScript is also represented by three dots (...) and is
// used to expand elements of an array or object into individual elements. It is
// commonly used to copy arrays, merge arrays, or pass elements of

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.filter((x) => (x > 5));
// console.log(arr2); 

// useMemo vs useCallback?
// useMemo memoizes the result of a function (a value) to avoid expensive recalculations. example: computed values
// useCallback memoizes the function itself to prevent unnecessary re-creations on re-renders.
// example: event handlers

// What methods can be used to optimize react code for better performance?
// useMemo-memorise calculation of value,
// useCallback-memorise function ,
// Proper key in lists,
// Minimize parent state Reduce re-renders of children,
// use react lazy loading
// use react virtualization for large lists

// NODE JS QUESTIONS

// how to do rate limiting in node js api?
// express-rate-limit,Custom implementation,redis base

// what is cluster mode in node js?
// Cluster mode in Node.js allows you to create multiple instances of a Node.js application
// that can run simultaneously on different CPU cores. This helps to improve the performance
// and scalability of applications by distributing the workload across multiple processes.

// how do you prevent different vulnerabilities in node js?
// Input Validation and Sanitization,Use Helmet.js,Implement Rate Limiting,
// Use HTTPS,Regularly Update Dependencies,Use Environment Variables,Implement Proper Error Handling 

// how to handle authentication and authorization in express js?
// Authentication: Use Passport.js, JWT, OAuth,Session-based authentication
// Authorization: Role-Based Access Control (RBAC),Permission-Based Access Control,Middleware for route protection

// How to handle route throttling in express js?
// Use express-rate-limit middleware to limit repeated requests to public APIs and/or endpoints.
// Configure the rate limit settings such as windowMs (time frame) and max (maximum number of requests).
// Apply the rate limiter to specific routes or globally across the application.

// what is indexing in mongodb?
// Indexing in MongoDB is a data structure technique used to improve the speed 
// of data retrieval operations on a collection.
// Indexes are created on fields in a collection to allow for faster search queries, 
// similar to the index in a book.
// They work by creating a sorted representation of the data, which allows MongoDB to
// quickly locate and access the desired documents without scanning the entire collection.
// Common types of indexes in MongoDB include single field indexes, compound indexes,
// multikey indexes, text indexes, and geospatial indexes.