// display span 영역
const display = document.querySelector("#displayNumber");
// 키패드 번호들
const numbers = document.querySelectorAll(".number");

const addBtn = document.querySelector("#addBtn");
const resetBtn = document.querySelector("#resetBtn");

// ul 영역
const phoneBook = document.querySelector(".phone-book");
// li 전부 고르기
const lists = document.querySelector(".phone-book>li");
// li 안의 별 버튼
let favoriteBtns = document.querySelectorAll(
  ".phone-book > li> span:nth-child(2)"
);
// li 안의 x 버튼
let popBtns = document.querySelectorAll(".phone-book > li> span:last-child");

const like = "☆";
const liked = "★";
const pop = "×";

display.innerText = "";
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    display.innerText += number.innerText;
  });
});

addBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let spanPop = document.createElement("span");
  let spanLike = document.createElement("span");
  span.append(display.innerText);
  spanLike.append(like);
  spanPop.append(pop);
  li.append(span);
  li.append(spanLike);
  li.append(spanPop);

  phoneBook.appendChild(li);
  display.innerText = "";
  // 추가 버튼 누를 때 마다 요소 불러오기
  spanLike.addEventListener("click", (e) => {
    e.target.innerText = liked;
    e.target.parentNode.className = "favorite";
  });
  spanPop.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
});

// display 초기화
resetBtn.addEventListener("click", () => {
  display.innerText = "";
});

// 전화번호부 즐겨찾기 추가
favoriteBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    console.log("click favorite btn : ", i);
  });
});
