// Question 1: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Question 2: Function that returns the sum of an array
function sumArray(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Question 3: Function to find the largest number in an array
function findLargest(numbers) {
  return Math.max(...numbers);
}

// Question 4: Function that checks if a number is even or odd
function checkEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// Question 5: Function that reverses a given string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Question 6: Merge two arrays using the spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b]; // Result: [1, 2, 3, 4]

// Question 7: ES6 filter to return even numbers from an array
const getEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

// Question 8: Template literals
const name = "Alice";
const msg = `Hello ${name}, welcome!`;

// Question 9: Arrow function rewrite
const greet = (name) => `Hello, ${name}`;