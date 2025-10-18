// a = 400
// console.log(a) //500

// console.log(b)
// let b= 100 // reference error

//TDR- The Temporal Dead Zone (TDZ) is the time between variable hoisting and initialization
// where accessing the variable throws an error. WORKS ONLY FOR LET AND CONST

// var a= 1000
// {
//     var a =5000
// }
// let b = a
// {
//     let b = 10000
// }
// console.log(b)//5000

//What is function curring?
// Currying means converting a function that takes multiple arguments into a sequence of functions, 
// each taking one argument at a time
// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add(1)(2)(3)); // example of function curring

//What is Closure?
// A closure in JavaScript is a function that remembers its scope,
// even when the function is executed outside of that scope. This means an inner function 
// can access variables from its outer (enclosing) function, even after the outer function has completed its execution. 

// let a = [3,4,5,6,7]
// const mew = a.filter((x)=>x%2==0)
// console.log(mew)