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
  let lowerage = userArr[0];

  for (let user of userArr) {
    if (user.age < lowerage.age) {
      lowerage = user;
    }
  }

  return lowerage.name;
}
let result = littleUser(users);

console.log(result);
