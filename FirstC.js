//01.Declare a variable using let and assign your name to it. Print it in the console.
let myName = "Tuhin Sengupta";
console.log(myName);

//02.Create a variable age with a number and check its type using typeof.
let age = 24;
console.log(typeof age);

//03.Declare a const variable and try reassigning it. Observe what happens.
const myConstName = "Tuhin Sengupta";
// myConstName = "Tuhin"; // ❌ Uncommenting this will throw an error
// const myConstName = "Tuhin Dasgupta"; // ❌ Cannot redeclare const

//04.Store null in a variable and check its type.
let a = null;
console.log(typeof a);

//05.Add a string "5" and a number 10. Print the result and explain why.
let st = "5";
let num = 10;
let result = st + num;
console.log(result); // "510" → string concatenation

//06.Multiply a string "10" with a number 2. Print the result.
let str = "10";
let num2 = 2;
let result2 = str * num2;
console.log(result2); // 20 → implicit conversion to number

//07.Create an object with properties name, age, and city. Print the object.
let person = {
    name: "Tuhin",
    age: 24,
    city: "Kolkata"
}
console.log(person);

//08.Create an array with 3 numbers and print the second element.
let arr = [10, 20, 30];
console.log(arr[1]); // 20

//09.Write a function that declares a variable inside it using var. Try accessing it outside the function and explain the result.
function myFun() {
    var a2 = 10;
    console.log(a2);
}
myFun();
// console.log(a2); // ❌ ReferenceError: a2 is not defined (var is function-scoped)

//10.Convert a number to a string and print its type.
let x = 10;
let result3 = x.toString();
console.log(result3);
console.log(typeof result3); // string
