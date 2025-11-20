// setTimeout ფუნქცია იყენებს callback-ს, დაწერეთ მისი promise-ზე დაფუძნებული
// ალტერნატივა  (მაგ: mySetTimeout(delay).then(...)
function mySetTimeOut(delay) {
  return new Promise((resolve, reject) => {
    if (!delay) {
      reject("Something is WRONG! Delay does not exists");
    } else {
      setTimeout(() => {
        resolve("Everything is OK");
      }, delay);
    }
  });
}

mySetTimeOut(2000)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// ● გამოიყენე პირველ დავალებაში შექმნილი ფუნქცია, რათა განავრცო ჩვენს მიერ
// დაწერილი “Toy Shop” შემდეგი პირობის იმპლემენტაციით:
// ➔ სათამაშოს დამზადებას სჭირდება დაახლოებით 3 წამი. (დროის მითითება
// შესაძლებელი უნდა იყოს დინამიურად)
// ➔ დავამატოთ კიდევ ერთი ნაბიჯი, რომელსაც დავარქმევთ პირობითად, “deliverToys”,
// რომლის დაყოვნებაც 2 წამია (გადაეცემა დინამიურად)
// ➔ სათამაშოს გაყიდვას სჭირდება 1 წამი (დინამიურად)
// ● ყოველი მომდევნო ნაბიჯი უნდა ელოდებოდეს წინა ნაბიჯის რეზულტატს და
// შესაბამისად წყვეტდეს მოხდება თუ არა მისი შესრულება
// ● გამოიყენე .then().catch() და async/await
// ● სინტაქსები. (2 ვარიანტი)
