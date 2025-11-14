const body = document.body;
body.style.padding = "30px";
// შექმენი <button> და <div> ელემენტები და მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი
// ● ღილაკზე დაჭერის შემთხვევაში დამალე <div> ელემენტი

const btn = document.createElement("button");
const div = document.createElement("div");
const buttonText = document.createTextNode("Click me!");
const divText = document.createTextNode(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
);

div.style.width = "400px";
div.style.borderRadius = "10px";
div.style.padding = "10px 20px";
div.style.border = "2px solid orange";
div.setAttribute("id", "div");
div.appendChild(divText);

btn.appendChild(buttonText);
btn.setAttribute("id", "button");
btn.style.marginBottom = "20px";

btn.addEventListener("click", () => {
  div.style.display = "none";
});

body.prepend(btn, div);
// შექმენი შემდეგი სტრუქტურა JS -ის გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>

// Create elements
const div2 = document.createElement("div");
const heading = document.createElement("h2");
const headingText = document.createTextNode("Gandalf");
const link = document.createElement("a");
const linkText = document.createTextNode("Go to profile");

div2.setAttribute("id", "card");
div2.style.width = "100px";
div2.style.borderRadius = "5px";
div2.style.padding = "20px 10px";
div2.style.border = "1px solid orange";
div2.style.marginBottom = "50px";
div2.style.textAlign = "center";

heading.appendChild(headingText);
link.appendChild(linkText);
link.setAttribute("href", "#");

div2.append(heading, link);
body.prepend(div2);

// body.innerHTML = `
//  <div id=”card”>
//   <h2>Gandalf</h2>
//   <a href=”#”>Go to profile</a>
//  </div>
// `;

// შექმენი quiz თამაში. დაწერე რამდენიმე მოკლე შეკითხვა თავისი სავარაუდო პასუხებით
// ● სწორ პასუხზე დაჭერის შემთხვევაში გაამწვანე პასუხი
// ● არასწორი პასუხის შემთხვევაში გააწითლე

//  ბონუს დავალება:
// გამოიტანე ეკრანზე ქულების რაოდენობა
// ➔ სწორი პასუხის შემთხვევაში დაამატე 1
// ქულა
// ➔ არასწორის შემთხვევაში უცვლელი რჩება
