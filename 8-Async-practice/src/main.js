// დაწერე ფუნქცია expo, რომელიც იქნება
// რეკურსიული ფუნქცია და მიიღებს
// არგუმენტად:
// ● ა) ციფრს ბ) ხარისხს და გ) callback - ს და
// დააბრუნებს მიღებული ციფრის ხარისხს
// მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5
// *5)

function expo(number, power, callback) {
  if (power === 0) {
    return callback(1);
  }

  return expo(number, power - 1, (result) => callback(number * result));
}
console.log(expo(5, 3, (result) => result));

// fetch ფუნქციის გამოყენებით წამოიღე
// მონაცემები მოცემული მისამართიდან(https://jsonplaceholder.typicode.com/posts) და
// გამოიტანე DOM-ში პოსტის სახით

import "./style.css";
const displayPosts = (post) => {
  document.querySelector("#posts").innerHTML += `
        <div class='post-card'>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `;
};
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw Error("Bad Request");
    }
    const posts = await response.json();

    posts.slice(0, 5).forEach((post) => {
      displayPosts(post);
    });
  } catch (err) {
    console.log(err.message);
  }
};
fetchData();

// დაწერე ასინქრონული ფუნქცია, რომელიც
// არგუმენტად იღებს ობიექტს და აკეთებს
// deep copy-ს
// ● ფუნქციამ უნდა გამოიძახოს reject თუ
// არგუმენტი არ არის ობიექტი. თუ
// ყველაფერი კარგად არის, გამოიძახოს
// resolve კოპირებული ობიექტით

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

function copyObj(obj) {
  const newObj = deepCopy(obj);

  return new Promise((resolve, reject) => {
    if (typeof obj !== "object" || newObj === obj) reject("Fix this function!");
    return resolve(newObj);
  });
}

copyObj(user)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
