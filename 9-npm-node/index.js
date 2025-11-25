import validator from "validator";

console.log(validator.isEmail("abcDE123")); // False
console.log(validator.isEmail("test@test.com")); // True
