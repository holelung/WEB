const inputNumbers = document.querySelectorAll(".input-number>input");

const checkBtn = document.querySelector("#check");
const newGameBtn = document.querySelector("#newGame");

const gameLog = document.querySelector("#gameLog");
const historyList = document.querySelector(".history-list");

const historyContainer = document.querySelector(".history-container");

let baseBall = [];
let tryCount = 0;
let strike = 0;
let ball = 0;

// 화면 로드시 랜덤 수 생성
window.onload = createRandom();

// input 값 입력시 다음 input칸으로 이동
inputNumbers.forEach((num, i, array) => {
  num.addEventListener("keyup", () => {
    if (i == 3) {
      return;
    }
    array[i + 1].focus();
  });
});

// 랜덤 숫자 4개 생성~ 중복없음~
function createRandom() {
  baseBall = [];
  for (let i = 0; i < 4; i++) {
    const r = Math.floor(Math.random() * 10);
    if (baseBall.includes(r)) {
      i--;
      continue;
    }
    baseBall.push(`${r}`);
  }
  console.log(baseBall);
}

checkBtn.addEventListener("click", () => {
  const numbers = document.querySelectorAll(".input-number>input");
  if ([...numbers].some((el) => el.value.trim() === "")) {
    gameLog.innerText = "모든 칸에 숫자를 입력해주세요!";
    return;
  }

  let outputText = "";

  if (historyContainer.classList.contains("d-none")) {
    historyContainer.classList.remove("d-none");
  }

  numbers.forEach((number, i) => {
    outputText += `${number.value}`;
    console.log(baseBall.includes(number.value));
    if (baseBall.includes(number.value)) {
      if (baseBall.indexOf(number.value) == i) {
        strike++;
        return;
      }
      ball++;
    }
    number.value = "";
  });

  tryCount++;
  if (strike == 4) {
    gameLog.innerText = `정답!! ${tryCount}번 만에 맞췄습니다!`;
    return;
  }

  gameLog.innerText = `${strike}스트라이크 ${ball}볼`;
  const li = document.createElement("li");
  li.textContent = `${outputText} : ${strike}스트라이크 ${ball}볼`;
  historyList.append(li);
});

newGameBtn.addEventListener("click", () => {
  createRandom();
  gameLog.innerText = "";
  historyList.innerHTML = "";
  historyContainer.classList.add("d-none");
});

// 게임 초기화
function reset() {}
