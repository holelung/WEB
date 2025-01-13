// input tag = key up
// radiobtn = change: input 요소의 값이 변화되었을 때

const containers = document.querySelectorAll(".container");

const inputsOpacity = document.querySelectorAll("[name=opacity-btn]");
let opacity = document.querySelector("[name=opacity-btn]:checked").value;

for (let i = 0; i < containers.length; i++) {
  containers[i]
    .querySelector(".color-input")
    .addEventListener("keyup", function () {
      containers[i].querySelector(".box").style.backgroundColor =
        containers[i].querySelector(".color-input").value;
      containers[i].querySelector(".box").style.opacity = opacity;
    });
}

for (let i = 0; i < inputsOpacity.length; i++) {
  inputsOpacity[i].addEventListener("change", function (e) {
    opacity = e.target.value;
    console.log(opacity);
    containers.forEach((container) => {
      container.querySelector(".box").style.opacity = opacity;
    });
  });
}
/* 
  향상된 for
  - 배열에 지정된 모든 요소를 순차 접근하는 용도의 for문
  - 순차 접근 상황이 빈번히 발생하여
    작성법을 간단하게 변화시킴

  [for of 구문]
  for( let 변수명 of 배열명){}

  - for문이 반복될 때 마다
    배열 내 요소를 0번 부터 하나씩 커내서
    of 앞에 변수에 대입하는 for문
*/
