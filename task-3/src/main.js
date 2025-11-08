// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი, სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე ელემენტი - მესამე ელემენტიდან დაწყებული ყველა დანარჩენის ნამრავლი

function someFun(a, b, ...params) {
  let firstEl = a + b;
  let secondEl = 1;
  let newArr = [];

  for (let param of params) {
    secondEl *= param;
  }

  newArr = [firstEl, secondEl];

  return newArr;
}
const result = someFun(2, 3, 5, 7, 9);
console.log(result);

// დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city. დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს cityს. გამოიყენე destructuring-ი. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს
// undefined

// const user = {
//   banks: [
//     {
//       name: "Bank of America",
//       address: { city: "New York" },
//     },
//     {
//       name: "Bank of England",
//       address: { city: "London" },
//     },
//     {
//       name: "Bank of Japan",
//       address: { city: "Tokyo" },
//     },
//     {
//       name: "Bank of Georgia",
//       address: { city: "Tbilisi" },
//     },
//   ],
// };

// const returnObjValue = function (user) {
//   let {
//     banks,
//     banks: [name, { address: { city } = {} }],
//   } = user;

//   for (let bank of banks) {
//     console.log(`${bank.name} - ${bank.address.city}`);
//   }

//   let city = user.banks[3].address.city;
//   console.log(city);
// };

// returnObjValue(user);

// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს
// გაითვალისწინე, რომ თუ ობიექტში კიდევ სხვა ობიექტებია იმათი ასლებიც უნდა შეიქმნას
// გამოიყენეთ (...) ოპერატორი

const user = {
  id: 1,
  fullName: "John Doe",
  age: 77,
  address: {
    city: "Tbilisi",
    street: "Chubinashvili",
  },
  hobbies: ["Coding", "Reading"],
};

function deepCopy(obj) {
  // Primitives
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // Arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  // Objects
  const newObj = { ...obj };
  for (let key in newObj) {
    newObj[key] = deepCopy(newObj[key]);
  }

  return newObj;
}

const newUser = deepCopy(user);
newUser.hobbies.push("Football");

console.log(newUser, user);
console.log(newUser === user); // false (different object)
