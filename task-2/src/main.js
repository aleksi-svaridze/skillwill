// მოცემულია მასივი, [
//   { name: "Alex", age: 43 },
//   { name: "Maya", age: 14 },
//   { name: "Raven", age: 300 },
// ]
// დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს user მასივს,
//  და დააბრუნებს ყველაზე პატარა ასაკის მქონე ადამიანის სახელს;

const users = [
  { name: "Alex", age: 43 },
  { name: "Maya", age: 14 },
  { name: "Raven", age: 300 },
];

function littleUser(userArr) {
  let lowerAge = userArr[0];

  for (let user of userArr) {
    if (user.age < lowerAge.age) {
      lowerAge = user;
    }
  }

  return lowerAge.name;
}
let result = littleUser(users);
// console.log(result);

// დაწერეთ პროგრამა, სადაც ორი a და b მომხმარებლები აგორებენ კამათელს მანამ, სანამ არ გაგორდება 3-იანი.
// რომელიც უფრო ნაკლებ ცდაში გააგორებს 3-იანს, ის არის გამარჯვებული.

let playerOne = () => {
  return parseInt(Math.random() * 10);
};
let playerTwo = () => {
  return parseInt(Math.random() * 10);
};

// console.log("user one: ", userOne());
// console.log("user two: ", playerTwo());

// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს იგივე მნიშვნელობის მქონე
//  ახალ (განსხვავებულ) ობიექტს.
