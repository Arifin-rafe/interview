// what is polymorphism?
// Polymorphism is a concept in object-oriented programming (OOP) that refers to the ability of objects
// of different classes to respond to the same message in different ways.
// In other words, polymorphism allows objects of different classes to have
// the same method name but different behavior.

//why this is used in our program?
// Because it allows us to write:
// reusable functions
// cleaner object-oriented code
// flexible event handlers
// class-based code with state
// access to dynamic context

// Method overriding v method overloading in oop?
// Method overriding happens when a child class (subclass) rewrites a method that already exists in the parent
// Method overloading means multiple methods with the same name but different parameters in the same

// what is css specificity?
// Specificity is calculated based on four categories, but you can imagine them like points:
// Inline styles → highest weight
// IDs
// Classes, attributes, pseudo-classes
// Elements, pseudo-elements
// The browser compares these levels from top to bottom.

// How do we create userefs?
// You can create a useRef using the useRef hook in React.
// This hook returns a mutable ref object, which you can use to access and manipulate the DOM element.

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

// What is super constructor?
// The super keyword is used to call the constructor of the parent class.

