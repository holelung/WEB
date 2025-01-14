const check1 = document.querySelector("#check1");
check1.addEventListener("click", () => {
  console.log("바로 출력되는 문자열");

  window.setTimeout(() => {
    console.log("3초 후에 출력되는 문자열");
  }, 3000);

  setTimeout(() => {
    console.log("2초 후에 출력되는 문자열");
  }, 2000);
});

/* setInterval(함수,지연시간(ms) 
  : 지연시간이 흐른 후 함수 수행(반복)
*/
// 즉시 실행 함수 ()();
// 변수 중복문제 해결, 속도 향상
(() => {
  const clock = document.querySelector("#clock");
  clock.innerText = new Date();
  setInterval(() => {
    clock.innerText = new Date();
  }, 1000);
})();

function updateClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  let timeString = `${hours}:${minutes}:${seconds}`;
  clock.textContent = timeString;
}
