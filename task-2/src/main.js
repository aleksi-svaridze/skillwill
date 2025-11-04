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

// ------------------------------------------------------------------------------------------------------------

// დაწერეთ პროგრამა, სადაც ორი a და b მომხმარებლები აგორებენ კამათელს მანამ, სანამ არ გაგორდება 3-იანი.
// რომელიც უფრო ნაკლებ ცდაში გააგორებს 3-იანს, ის არის გამარჯვებული.

function getPlayerScore(player) {
  let getRandomNumber = () => Math.floor(Math.random() * 10);

  let attempts = 0;
  let number;

  do {
    number = getRandomNumber();
    attempts++;
    console.log(`${player} attempt ${attempts}: ${number}`);
  } while (number !== 3);

  return attempts;
}

let playerOneResult = getPlayerScore("Player ONE");
let playerTwoResult = getPlayerScore("Player TWO");

// Result
if (playerOneResult > playerTwoResult)
  console.log(
    `Player TWO has - ${playerTwoResult} attempts. Player ONE has - ${playerOneResult} attempts. Player Two is a WINNER!`
  );
else if (playerOneResult < playerTwoResult)
  console.log(
    `Player TWO has - ${playerTwoResult} attempts. Player ONE has - ${playerOneResult} attempts. Player One is a WINNER!`
  );
else
  console.log(
    `Player TWO has - ${playerTwoResult} attempts. Player ONE has - ${playerOneResult} attempts. It's a DRAW!`
  );

// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს იგივე მნიშვნელობის მქონე
//  ახალ (განსხვავებულ) ობიექტს.

const user = {
  id: 1,
  fullName: "John Doe",
  age: 77,
  hobbies: ["Coding", "Designing", "copy writing"],
};

function reCreate(oldObj) {
  const newObj = new Object(oldObj);
  return newObj;
}

console.log(reCreate(user));
