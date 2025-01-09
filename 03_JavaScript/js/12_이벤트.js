/* inline event model check + this */

// 전달인자(Argument) : 함수 호출 시 () 안에 작성하는 값
//                      함수 매개변수로 전달됨
// 매개변수(Parameter) : 함수 정의 시 () 에 작성하는 변수
//                        호출 시 전달된 값을 저장
function check1(div) {
  // 매개변수 div : Argument 에서 전달된 값
  // -> 클릭된 div 요소
  // console.log(div);

  //  클릭이 되면 클릭된 숫자를 버튼에 출력
  // 1) 버튼에 작성된 내용 얻어오기
  let num = Number(div.innerText);

  // 2) 얻어온 내용이 숫자가 아닌경우
  // isNaN(value) : 값이 NaN인 경우 true, 숫자면 false
  if (isNaN(num)) {
    // num 이 Number가 아니면 true
    div.innerText = 1;
    return;
  }
  // 3) 얻어온 내용이 숫자인 경우
  div.innerText = ++num;
}

// 고전 이벤트 모델 확인
// id가 testA인 요소를 얻어와 변수에 저장
const testA = document.getElementById("testA");

testA.onclick = function () {
  // testA 요소가 가지고 있는 onclick 변수에 --> (이벤트 리스너)
  // function(){} 대입 -> (이벤트 핸들러)
  /* 고전 이벤트 모델에서 this == 이벤트가 발생한 요소 */
  console.log(this);
  alert("고전 이벤트 모델 확인!");
};

// 고전 이벤트 모델 제거
// #testB 버튼 클릭 시 #testA의 클릭 이벤트 핸들러 제거
const testB = document.querySelector("#testB");

testB.onclick = function () {
  testA.onclick = null;
  alert("확인 버튼 클릭 이벤트 핸들러 제거");
};

// 고전 이벤트 모델 단점 확인
const testC = document.querySelector("#testC");

testC.onclick = function () {
  testC.style.backgroundColor = "pink";
};

testC.onclick = function () {
  testC.style.fontSize = "24px";
};

// 표준 이벤트 모델
// 클릭할수록 투명도 증가
const test1 = document.querySelector("#test1");
// 클릭할수록 투명해지게
test1.addEventListener("click", function (e) {
  let current = test1.style.opacity;
  console.log("현재 투명도 : ", current);
  if (current === "") current = 1;

  test1.style.opacity = current - 0.05;
  if (test1.style.opacity < 0) {
    this.style.opacity = 1;
  }
});

test1.addEventListener("click", function (e) {
  let num = Number(test1.innerText);

  test1.innerText = ++num;
});

const btns = document.querySelectorAll(".btn-container > button");
const result2 = document.querySelector("#result2");

for (let i = 0; i < btns.length; i++) {
  btns[i].style.backgroundColor = btns[i].innerText;
  btns[i].style.opacity = 0.8;

  btns[i].addEventListener("click", function () {
    result2.style.backgroundColor = this.innerText;
  });
}

// 실습문제
const boxes = document.querySelectorAll(".box");
const pBtn = document.querySelector("#changeBtn");
pBtn.addEventListener("click", function () {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].querySelector(".display").style.backgroundColor =
      boxes[i].querySelector(".inputColor").value;
  }
});
