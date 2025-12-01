// console.log(2+"2")
// console.log(2-"2")

// when we will get NaN ?
// console.log("hello"-"world")
// console.log("hello"*3)

// What is function curring?
// Currying means converting a function that takes multiple arguments into a sequence of functions, 
// each taking one argument at a time

// Features OF ES6
// 1. let and const
// 2. Arrow functions
// 3. Template literals
// 4. Destructuring assignment
// 5. Default parameters
// 6. Spread and rest operators

// useEffect(() => {}); // runs after every render
// useEffect(() => {}, []); // runs only once after the initial render
// useEffect(() => {}, [data]); // runs when 'data' changes

const arr = [1, 2, 2, 3, 4, 5, 4];
function findDuplicates(arr) {
  const seen = {};
  const duplicates = [];

  for (let num of arr) {
    if (seen[num]) {
      duplicates.push(num);
    } else {
      seen[num] = true;
    }
  }

  return duplicates;
}
console.log(seen)
console.log(findDuplicates(arr)); // [2, 4]

const name = "MyNameIsJohn";
 let newName = "";
for (let i = 0; i < name.length; i++) {
  if (name[i] === name[i].toUpperCase() && i !== 0) {
    newName += " ";
  }
  newName += name[i];
}
console.log(newName);