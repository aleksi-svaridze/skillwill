// 1. დაწერე ფუნქცია, რომელიც მიიღებს a და b პარამეტრებს და დააბრუნებს ტექსტს
// “ტოლია” თუ a უდრის b-ს, ხოლო წინააღმდეგ შემთხვევაში, დააბრუნებს “არარის ტოლი”

// !!!გაითვალისწინე, რომ a და b ყოველთვის ერთი და იგივე ტიპის არ არის

function isEqual(a, b) {
  if (a === b) return "ტოლია";
  else return "არ არის ტოლი";
}

console.log(isEqual(5, 5));

// 2. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ტემპერატურას ფარენჰეიტებში და
// დააბრუნებს ტემპერატურას ცელსიუსში.

// !!!თუ პარამეტრი არ არის რიცხვითი მონაცემი დააბრუნე - false

const convertFahrenheitToCelsius = function (fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  if (typeof fahrenheit !== "number") {
    return false;
  } else {
    return celsius.toFixed(2);
  }
};

console.log(convertFahrenheitToCelsius(180));

//  3. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს a (პირველი რიცხვი), b (მეორე რიცხვი) და operation (+, -, *, /)
//  და დააბრუნებს ახალ მნიშვნელობას, რომელიც მიიღება ამ ორ რიცხვზე operation ცვლადში განსაზღვრული ოპერაციით

// !!!თუ a და b არ არიან რიცხვები, ან თუ operation ცვლადში არის უცნობი, ოპერაცია დააბრუნე - false
const compute = (a, b, operation) => {
  const addition = a + b;
  const multiplication = a * b;
  const subtraction = a - b;
  const division = a / b;
  const shortenedCondition = typeof a === "number" && typeof b === "number";

  if (shortenedCondition && operation === "/") {
    return division;
  } else if (shortenedCondition && operation === "*") {
    return multiplication;
  } else if (shortenedCondition && operation === "+") {
    return addition;
  } else if (shortenedCondition && operation === "-") {
    return subtraction;
  } else {
    return false;
  }
};

console.log(compute(12, 9, "-"));
console.log(compute(12, 9, "+"));
console.log(compute(12, 9, "/"));
console.log(compute(12, 9, "*"));
