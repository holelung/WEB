// 버튼 초기화
const create = document.querySelector("#create");
const reset = document.querySelector("#reset");
const choice = document.querySelector("#choice");
// 영역지정
const container = document.querySelector(".container");

let count = 0;
// create 버튼 클릭 => 판 생성
create.addEventListener("click", () => {
  container.innerHTML = "";
  for (let i = 1; i < 46; i++) {
    const number = document.createElement("div");
    number.classList.add("number");
    number.textContent = i;
    container.append(number);

    number.addEventListener("click", (e) => {
      const count = document.querySelectorAll(".active").length;
      // 6개 까지 선택 가능
      if (count < 6) {
        e.target.classList.toggle("active");
        return;
      }
      if (e.target.classList.contains("active")) {
        e.target.classList.toggle("active");
        return;
      }
      alert("6개 이상 선택 불가합니다");
    });
  }
  create.classList.add("display-n");
  reset.classList.remove("display-n");
  choice.classList.remove("display-n");
});

// choice 버튼 클릭 => 배경색 우다다닫 돌아감
choice.addEventListener("click", () => {
  choice.disabled = true;

  lottoInterval = setInterval(() => {
    resetFn();
    randomNum();
  }, 50);
  // 60ms 뒤에 없애기

  const ran = Math.floor(Math.random() * 6 + 5);
  setTimeout(() => {
    clearInterval(lottoInterval);
    choice.disabled = false;
  }, ran * 200);
});

// 난수 생성해서 number class 요소에 active 클래스 추가
function randomNum() {
  const set = new Set();
  while (set.size < 6) {
    const ran = Math.floor(Math.random() * 45 + 1);
    set.add(ran);
  }
  const numbers = document.querySelectorAll(".number");
  set.forEach((num) => {
    numbers[num - 1].classList.add("active");
  });
}

// 선택 초기화 함수
function resetFn() {
  const actives = document.querySelectorAll(".active");
  actives.forEach((active) => {
    active.classList.remove("active");
  });
}

// reset 버튼 클릭 => 배경색 초기화
reset.addEventListener("click", resetFn());
