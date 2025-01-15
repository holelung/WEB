const display = document.querySelector("#display");
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

// 분, 초, 1/100초 출력하는 span 태그
const timeList = document.querySelectorAll("#display > span");

let currentInterval;
let count = 0; // 1/100초 마다 1씩 증가
// count == 100 -> 1초
// count == 6000 -> 60초(1분)
/* 
  START <-> PAUSE 버튼으로 변경
  START 클릭된 경우 10ms 마다 count가 1씩 증가
  count 증가 후 화면에 시간을 계산해서 출력(별도 함수)
*/

startBtn.addEventListener("click", () => {
  if (startBtn.innerText === "PAUSE") {
    startBtn.innerText = "START";
    clearInterval(currentInterval); // interval 종료
    return;
  }
  startBtn.innerText = "PAUSE";
  recordBtn.disabled = false;
  // timer 시작

  // currentInterval에 interval id가 담김
  currentInterval = setInterval(() => {
    count++;
    displayTime(timeTable());
  }, 10);
});

// 시간 단위 변환 함수
function timeTable() {
  let time = [];

  time[0] = Math.floor(count / 6000); // 분
  time[1] = Math.floor((count % 6000) / 100); // 초
  time[2] = count % 100; // 1/100 초

  time.forEach((t, i, time) => {
    time[i] = attachZero(t);
  });

  return time;
}

function attachZero(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num + "";
}

// #display에 시간 표시
function displayTime(times) {
  times.forEach((time, i) => {
    if (timeList[i].innerText !== time) {
      timeList[i].innerText = time;
    }
  });
}

// record 버튼
recordBtn.addEventListener("click", () => {
  let times = timeTable();
  recordContainer.innerHTML += `<li>${times[0]} : ${times[1]} . ${times[2]}</li>`;
});

// reset 버튼
resetBtn.addEventListener("click", () => {
  clearInterval(currentInterval); // Interval 종료
  recordBtn.disabled = true; // RECORD 버튼 비활성화
  recordContainer.innerHTML = ""; // recordContainer 내용 삭제
  startBtn.innerText = "START"; // Start 버튼 형태로 변경
  count = 0; // count 0으로 초기화
  displayTime(timeTable());
});

/* clearInterval() 사용 방법
  1. setInterval() 수행후 반환되는 값을 변수에 대입
    ex) const currentInterval = setInterval();

  2. clearInterval(변수명) 수행
    ex) clearInterval(currentInterval);
        -> setInterval()동작 멈춤
*/
