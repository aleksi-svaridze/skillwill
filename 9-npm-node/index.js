// 1 . მოახდინე პროექტის ინიციალიზაცია
// npm init

//  2. დააინსტალირე პაკეტი validator
// npm i validator

//  3. მოიძიე validator-ის დოკუმენტაცია
// https://www.npmjs.com/package/validator

// 4 . დოკუმენტაციის მიხედვით გამოიყენე ბრძანება isEmail და დაბეჭდე არის თუ არა
//     შემდეგი სიტყვები მეილი: test@test.com, abcDE123

import validator from "validator";

console.log(validator.isEmail("abcDE123")); // False
console.log(validator.isEmail("test@test.com")); // True
