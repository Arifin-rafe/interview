// var a=[10,11,12,15,14]
// function print(b,...a){
//     console.log(a)
// }
// print(8,9,10,11,12) //output [9,10,11,12] because the first value is assigned to b 
// and the rest to a and always return an argument first


// const arr = [100,'e','rafe',3,'c','shupty']

// const num =[]
// const str =[]
// const ch =[]
// for(x of arr){
//     if (typeof x === 'number'){
//         num.push(x)
//     }else if (typeof x === 'string' && x.length > 1){
//         ch.push(x)
//     }else{
//         str.push(x)
//     }
// }
// console.log(num)
// console.log(str)
// console.log(ch)

// The slice() method returns a shallow copy of a portion of an array without modifying the original array,
// while the splice() method is used to add, remove, or replace elements in an array and directly modifies
// the original array.

// const obj1 = {a:10,b:20}
// const obj2 = {c:30,d:40}
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

// const obj1 ={}
// const obj2 ={
//     name:'rafe'
// }
// const obj3 ={
//     name:'shupty',
// }
// obj1[obj2] = {
//     name:"sabbir"
// }
// obj1[obj3] = {
//     name:"mama"
// }
// console.log(obj1[obj2]) // alway replace the value with the last one

// console.log([]==[])// because they are different reference
// console.log([]===[])// because they are different reference

// The class attribute in HTML is used to assign one or more class names to an element, 
// allowing you to apply CSS styles or JavaScript actions to that element. 
// Multiple elements can share the same class, making it easy to style or manipulate them together.

// display: none; /* removes the element from layout in css*/
// visibility: hidden; /* hides the element but keeps its space in css*/