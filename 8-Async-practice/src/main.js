// დაწერე ფუნქცია expo, რომელიც იქნება
// რეკურსიული ფუნქცია და მიიღებს
// არგუმენტად:
// ● ა) ციფრს ბ) ხარისხს და გ) callback - ს და
// დააბრუნებს მიღებული ციფრის ხარისხს
// მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5
// *5)

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
