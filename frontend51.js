// a = 400
// console.log(a) //400

// console.log(b)
// let b= 100 // reference error

//TDR- The Temporal Dead Zone (TDZ) is the time between variable hoisting and initialization
// where accessing the variable throws an error. WORKS ONLY FOR LET AND CONST.
// During this period, accessing the variable will throw a ReferenceError.

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
 

// let a = [3,4,5,6,7]
// const mew = a.filter((x)=>x%2==0)
// console.log(mew)
//output: [4,6]

// const arr1 =[100,200,300]
// const arr2 = [300,400,500,600]

// function common(arr1,arr2){
//     return arr1.filter((x)=>arr2.includes(x))
// }
// console.log(common(arr1,arr2))
// output: [300]

// console.log("2"-"2")
// console.log(2 -"2")
// console.log("2"-2)

// const str = "RafeIsABoy";
// function sep(str) {
//   let arr = "";
//   for (let x of str) {
//     if (x === x.toUpperCase() && x !== x.toLowerCase()) {
//       arr += " " + x;
//     } else {
//       arr += x;
//     }
//   }
//   return arr.trim(); // removes leading space
// }
// console.log(sep(str)); // Output: "Rafe Is A Boy"

//Figure vs img tag in HTML?
// Figure tag is used to display an image with a caption, 
// while the img tag is used to display an image without a caption.

//Flex vs Grid?
//Flexbox is one dimensional row or column, 
//while Grid is two-dimensional both row and column.

//Positioning properties in CSS?
// Static, Relative, Absolute, Fixed

