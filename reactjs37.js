// var mix = [2, "g", 5, "u"];
// var num = [];
// var str = [];

// let c = mix.map((item) => {
//   if (typeof item === "number") {
//     num.push(item);
//   } else {
//     str.push(item);
//   }
// });
// console.log(num);
// console.log(str);

// let abc = {
//   name: "John",
//   age: 30,
//   city: "New York", 
// }
// console.log(abc)//abc object before shallow copy

// let xyz ={...abc}//shallow copy
// // let xyz = abc // deep copy
// xyz.name = "Doe"
// console.log(abc)//abc after deep copy
// console.log(xyz)


// console.log((100,400))//function hoisting happen here
// function sum(a,b){
//     return a+b
// }

//shallow copy vs deep copy?
// | Feature                 | Shallow Copy          | Deep Copy                        |
// | ----------------------- | --------------------- | -------------------------------- |
// | Top-level values        | Copied                | Copied                           |
// | Nested objects          | **Referenced**        | **Fully copied**                 |
// | Memory usage            | Low                   | High                             |
// | Safety for modification | Risky                 | Safe                             |
// | Methods                 | Spread, Object.assign | structuredClone, JSON, cloneDeep |
