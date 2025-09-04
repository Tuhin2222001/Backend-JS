
📘 Day 2 – Functions & Arrow Functions (with Answers)

Normal Functions

//1 Write a function named `myWel` that prints `"Welcome to day 02 Tuhin"`. How do you call this function?

Answer:
function myWel() {
console.log("Welcome to day 02 Tuhin");
}
myWel(); // Output: Welcome to day 02 Tuhin

//2 Create a function `myFun` that declares two numbers, adds them, multiplies them, and prints both the sum and product. What output will you get if `a = 10` and `b = 20`?

Answer:
function myFun() {
let a = 10;
let b = 20;
console.log("The Sum is:", a+b);      // The Sum is: 30
console.log("The Product is:", a\*b);  // The Product is: 200
}
myFun();

Arrow Functions

//3 Define an arrow function `myAr` that prints `"Arrow function"`. How do you invoke it?

Answer:
const myAr = () => {
console.log("Arrow function");
}
myAr(); // Output: Arrow function

//4 Write an arrow function `myAr` that takes two numbers as input and returns their sum. Call it with `5` and `6`. What will be the output?

Answer:
const myAr = (a, b) => {
return a + b;
}
console.log(myAr(5, 6)); // Output: 11

//5 Write an arrow function `myFun` that takes two parameters and returns their product. Test it with values `18` and `9.8`.

Answer:
const myFun = (a, b) => {
return a \* b;
}
console.log(myFun(18, 9.8)); // Output: 176.4

//6 Create an arrow function `myAr` that takes a number `n` and returns its square. Call it with `5`.

Answer:
const myAr = (n) => {
return n \* n;
}
console.log(myAr(5)); // Output: 25

//7 Use `setTimeout` with an arrow function to print `"Hello Tuhin"` after 2 seconds.

Answer:
setTimeout(() => {
console.log("Hello Tuhin");
}, 2000);
// Output (after 2 sec delay): Hello Tuhin

Default Parameters

//8 Write a function `fetchData(url, method = "GET")` that logs a message with the provided URL and method. What happens if you call it with only the URL?

Answer:
function fetchData(url, method = "GET") {
console.log(`Fetching from ${url} with ${method}`);
}
fetchData("[https://api.example.com](https://api.example.com)");
// Output: Fetching from [https://api.example.com](https://api.example.com) with GET

If only `url` is passed, `method` will use its default value = "GET".

Array Methods (Higher-Order Functions)

//9 Given an array of numbers from 1 to 10, use the `.map()` method with an arrow function to double each number. What will the new array look like?

Answer:
let numbers = \[1,2,3,4,5,6,7,8,9,10];
let double = numbers.map((num) => num \* 2);
console.log(double);
// Output: \[2,4,6,8,10,12,14,16,18,20]

Closures

//10 Create a function `counter` that uses a closure to keep track of how many times it has been called. Call it three times and explain the output.

Answer:
function counter() {
let count = 0; // hidden variable
return function() {
count++;
return count;
};
}

const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

Explanation:
Each time you call `myCounter()`, the inner function remembers the value of `count` using closure.
The value keeps increasing instead of resetting, so outputs are 1, 2, 3.

---

