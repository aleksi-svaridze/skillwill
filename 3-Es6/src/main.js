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
// მიიღებს user ობიექტს და დააბრუნებს city-ს. გამოიყენე destructuring-ი. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს
// undefined

function getCity(user) {
  const { banks } = user || {};
  const { address } = banks?.[2] || {};
  const { city } = address || {};
  return city;
}

// Example:
const userObj = {
  name: "John",
  banks: [
    { address: { city: "London" } },
    { address: { city: "Paris" } },
    { address: { city: "New York" } }, // If comment this line, program will return 'undefined'
  ],
};

console.log(getCity(userObj)); // "New York"

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
