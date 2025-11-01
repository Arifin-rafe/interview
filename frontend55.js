// let x = 10
// if(function abc(){}){
//     x= x- typeof (abc)
// }
// console.log(x) // NaN because abc is not defined outside if block

// let x = [1, 2, 3]
// let y = [1, 2, 3]

// let z = y
// console.log(x == y) // false
// console.log(z==y) // true
// console.log(z==x) // false

// console.log(typeof(undefined)) // undefined
// console.log(typeof(null)) // object
// console.log(typeof(NaN)) // number

// const obj = {
//     pqr:100,
//     abc:200,
//     xyz:{
//         pqr:300,
//         abc:400
//     }
// }
// const {pqr,abc,xyz:{pqr:p}}=obj
// console.log(pqr,abc,p)

// let arr = [1, 2, 3, 4, 5];
// const newArr = arr.filter((num) => num > 3);
// const newArr2 = arr.map((num) => num > 3);
// const newArr3 = arr.find((num) => num > 3); 
// console.log(newArr); // [4,5]
// console.log(newArr2); // [ false, false, false, true, true ]
// console.log(newArr3); // 4

// JSON.parse() is used to convert a JSON string into a JavaScript object.

// const str = "i am rafe";
// const words = str.split(" "); // Split into ["i", "am", "rafe"]
// let minWord = words[0];
// for (let word of words) {
//   if (word.length < minWord.length) {
//     minWord = word;
//   }
// }
// console.log(minWord); // "am"


// const arr = [1, 2, 3, 3, 4, 5, 5];
// const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
// console.log([...new Set(duplicates)]); // [3, 5] // find the duplicate values

// const a1=[1,2,3,4,5]
// const a2=[3,4,5,6,7,8]
// let len = a1.length>a2.length?a1.length:a2.length 
// const newArr=[]
// for(let i=0;i<len;i++){
//     if(a1.includes(a2[i])){
//         newArr.push(a2[i])
//     }
// }
// console.log(newArr)

//why use optional chaining?
// Optional chaining (?.) helps you safely access deeply nested properties without 
// having to manually check if each level exists.

//why use polyfill?
// Polyfills let developers use modern JS features safely, 
// even in browsers that don’t support them yet — they “fill in” missing functionality.

//Difference between name export vs default export in react?
// Named exports let you export multiple things by name,
// while default export lets you export one main thing per file.