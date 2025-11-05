// console.log([]*[])
// console.log(0.1+0.2 === 0.3)

// const obj ={
//     name:'rafe',
//     age:22
// }
// const obj1 ={
//     name:'new',
//     age:21
// }
// const result = {...obj, ...obj1} //second object will override first
// console.log(result)
// console.log(typeof(JSON.stringify(obj))) // object to string
// console.log(typeof(JSON.parse(JSON.stringify(obj)))) // string to object

// const arr = [1,2,3]
// let b = arr.reduce((acc,curr) => acc+curr) //
// console.log(b)

//what is accumulator?
//The accumulator is a variable that holds the accumulated value during the reduction process. 
// It is used to store the intermediate result of the reduction operation.

// const arr = [1,2,3]
// let newArr = arr.map((item) => item>2) //
// console.log(newArr)

// useMemo vs useCallback?
// useMemo memoizes the result of a function (a value) to avoid expensive recalculations. example: computed values
// useCallback memoizes the function itself to prevent unnecessary re-creations on re-renders. example: event handlers

//what is memoization?
//Memoization is a technique used to optimize the performance of a function by caching its results.
// It is often used in React to avoid unnecessary re-renders when the same input produces the same output.

//Package.json vs Package-lock.json?
//package.json contains the dependencies and their versions, 
//while package-lock.json contains the exact versions of the dependencies used in the project

//CSS
//inline element vs block element?
//inline element is a self-closing tag, while block element is a closing tag

//div tag vs span tag?
//div tag is a block element, while span tag is an inline element

//meter tag vs progress tag?
//meter tag is a linear gauge, while progress tag is a circular gauge

//css border vs css outline?
//border is part of the box model and affects layout; it can be styled per side and supports border-radius.
//outline is drawn outside the element, doesn’t affect layout, and cannot be styled per side or rounded.
//Use border for visual design, and outline mainly for accessibility or focus indication.

//css positioning?
//static, relative, absolute, fixed

//how to overlap in css?
//Use z-index to overlap elements.