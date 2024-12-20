// Modern Javascript Syntax Lab

// ======================================== NOTES 1 ======================================== //
// array.prototype.map()
//      - returns new array with results of calling a function on every element in existing array
// example:
const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // array2 = ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// ======================================== PROBLEM 1 ======================================== //
// Use `.map()` to iterate over the following array and create a new array where each value is multiplied by 2 
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const newNums = nums.map((num) => {
  let sum = num*2;
  return sum;
});

console.log(newNums);












// ======================================== NOTES 2 ======================================== //
// array destructuring = extract elements from array and store them in variable
// elements are matched positionally with the defined varaibles, order declared matters!
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'


// ======================================== PROBLEM 2 ======================================== //
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTop, secondTop] = pizzaToppings;

console.log(firstTop); // 'Pineapple' = console.log(pizzaToppings[0])
console.log(secondTop); // 'Olives' = console.log(pizzaToppings[1])












// ======================================== NOTES 3 ======================================== //
// object destructuring: extract properties from an object using dot notation or bracket notation
const person = {
  name: 'Alex',
  role: 'Software Engineer',
};

// Object destructuring:
const { name, role } = person;

console.log(name); // 'Alex'
console.log(role); // 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name); // 'Alex'
console.log(person.role); // 'Software Engineer'


// ======================================== PROBLEM 3 ======================================== //
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

// destructure:
const {make, model} = car;

console.log(make); // 'Audi' = console.log(car.make)
console.log(model); // 'q5' = console.log(car.model)












// ======================================== NOTES 4 ======================================== //
// spread operator = allows you to duplicate or combine arrays by directly copying the elements
const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray]; // new array made by copying contents of OG array
console.log(duplicateArray); // [1, 2, 3]

const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];
const fruitsAndVegetables = [...fruits, ...vegetables];
console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']


// ======================================== PROBLEM 4 ======================================== //
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings); // ['Pineapple', 'Olives', 'Anchovies']












// ======================================== NOTES 5 ======================================== //
// applying spread operator to objects
const originalObject = {
  foo: 'Hello',
  bar: 100,
};

const clonedObject = { ...originalObject };
console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }



// ======================================== PROBLEM 5 ======================================== //
