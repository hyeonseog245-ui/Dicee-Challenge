// alert("xxx");
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

const random1 = Math.floor(Math.random() * 6) + 1;
console.log("첫번째 랜덤 숫자 : " + random1);
const random2 = Math.floor(Math.random() * 6) + 1;
console.log("두번째 랜덤 숫자 : " + random2);

image1.setAttribute("src", `images/dice${random1}.png`);
image2.setAttribute("src", `images/dice${random2}.png`);

if (random1 > random2) {
  h1.textContent = "player 1 win!🤷";
} else if (random2 > random1) {
  h1.textContent = "player 2 win!😁";
} else {
  h1.textContent = "draw!";
}
// 주석달기
