// 1. 1️⃣ Predict Output (Hoisting with var)
// Look at the following code and write what will be logged and why.
// console.log(a);
// var a = 10; // undefined

// ✔ Explanation:
// - var declarations are hoisted (moved to the top of the scope)
// - but not initialized until the assignment
// During hoisting, JavaScript internally does this:
var a; // Hoisted
console.log(a); // Undefined
a = 10; // assigned later

// 2.2️⃣ Predict Output (Hoisting with let)
// Explain what happens when this code runs:
// console.log(b);
let b = 20; // ReferenceError: Cannot access 'b' before initialization

// 3. 3️⃣ Hoisting Function vs Variable
// - Explain what is printed and why:
// test();
// function test() {
//   console.log("Function works!");
// }

// test2();
// var test2 = function () {
//   console.log("Will this work?");
// };

// 4. 4️⃣ Rewrite var -> let/const
// Rewrite this code using let or const so that the logic still works:

// var counter = 0;
// for (var i = 0; i < 3; i++) {
//   counter += i;
// }
// console.log(counter);

// let counter = 0;

// for (let i = 0; i < 3; i++) {
//   counter += i;
// }

// console.log(counter);

// 5. 5️⃣ Block Scope Test
// Explain the result and fix the code so it prints 10 and then 20.

// let x = 10;
// if (true) {
//   let x = 20;
// }
// console.log(x);

// let x = 10;
// console.log(x);
// if (true) {
//   let x = 20;
//   console.log(x);
// }

// 6. 6️⃣ Temporal Dead Zone Practice
// Explain why this code throws an error:

// let y;
// console.log(y);
// y = 5;
// console.log(y);

// 7. 7️⃣ const Object Mutation
// Explain why this works even though the variable is const:

// const user = { name: "Alex" };
// user.name = "John";
// console.log(user.name);

// 8. var Redeclaration Exercise
// Explain what happens and why:

// var a = 1;
// var a = 2;
// console.log(a);

// 9. 9️⃣ Fix Bug: var Scope Leak
// This code prints 5 instead of the expected 0–4. Fix it using let:
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 100);
// }

for (var i = 0; i < 3; i++) {
  (function (iCopy) {
    setTimeout(() => {
      console.log(iCopy);
    }, 0);
  })(i);
}

// 10. 🔟 Create an Example of Hoisting Yourself
// Write your own small example where hoisting causes unexpected behavior.
// Then rewrite the same code using let or const to remove the unexpected behavior.
