// difference between premitive and non-premitive data types in JavaScript

// Primitive Data Types:
// Primitive data types in JavaScript are immutable and stored by value. They include:
// 1. Number
// 2. String
// Non-Primitive Data Types:
// Non-primitive data types in JavaScript are mutable and stored by reference. They include:
// 1. Object
// 2. Array
// 3. Function

//  Difference between every and some method in JavaScript
// The every() method tests whether all elements in an array pass a specified test (provided as a function).
// It returns true if all elements pass the test, otherwise false.
// The some() method tests whether at least one element in an array passes a specified test (provided as a function).
// It returns true if at least one element passes the test, otherwise false.
//every() → form validation (all fields valid)
//some() → permission checks (any admin user)

// var a = 50;
// {
//   var a = 5000;
// }
// let b = a;
// {
//     let b = 50000;
// }
// console.log(b)

// var a = 50;
// function test(){
//   var a = 5000;
// }
// let b = a;
// function test2(){
//     let b = 50000;
// }
// console.log(b)

// const abc = [1,4,5]
// abc.splice(1,1,6) // replace 4 with 6
// console.log(abc)
//array.splice(start, deleteCount, item1, item2, ...)

// console.log("rafe" - "2") // NaN
// console.log("rafe" + "2") // rafe2

const abc = [2,2,1,5,6,8,10,1,7,8]
const duplicate = []
for (let i=0; i<abc.length; i++){
    for (let j=i+1; j<abc.length; j++){
        if (abc[i] === abc[j]){
            duplicate.push(abc[i])
        }
    }
}
console.log(duplicate)
