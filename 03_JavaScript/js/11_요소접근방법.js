function classTest() {
  // 유사 배열이란?
  //  배열처럼 index, length를 제공하지만
  //  배열 전용 함수(메서드)를 제공하지 않음
  // class 속성값이 "class-test"인 요소를 모두 얻어와
  // (유사)배열 형태로 반환
  const divs = document.getElementsByClassName("class-test");
  console.log(divs);

  // div에 저장된 요소를 하나씩 순차 접근
  for (let i = 0; i < divs.length; i++) {
    // 각 요소에 작성된 내용 얻어와 커
    console.log(divs[i].innerText);

    divs[i].style.backgroundColor = divs[i].innerText;
  }
}

function classInit() {
  const divs = document.getElementsByClassName("class-test");
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "white";
  }
}

function classTest2() {
  const inputs = document.getElementsByClassName("cls-input");

  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    sum += Number(inputs[i].value);
  }

  document.getElementById("sumResult").innerText = sum;
}

function tagNameTest() {
  const list = document.getElementsByTagName("li");
  for (let i = 0; i < list.length; i++) {
    const num = Number(list[i].innerText);
    list[i].style.backgroundColor = `rgb(240,100,${num * 12})`;
  }
}

function nameTest() {
  const checkList = document.getElementsByName("hobby");
  let result = `선택한 취미 : `;
  let count = 0;

  for (let i = 0; i < checkList.length; i++) {
    if (checkList[i].checked) {
      console.log(checkList[i].value);
      result += `${checkList[i].value}, `;
      count++;
    }
  }
  result += `<br><br> 선택된 취미 개수 : ${count}`;
  const div = document.getElementsByClassName("name-result");
  div[0].innerHTML = result;
}

function cssTest() {
  // target-div 속성 값이 css-div인 요소 하나 선택
  const container = document.querySelector("[target-div=css-div]");

  container.style.width = "200px";
  container.style.height = "200px";
  container.style.border = "10px solid orange";

  // document.querySelector("css 선택자")
  // 여러 요소가 선택된 경우 "첫 번째" 요소만 얻어옴

  const first = document.querySelector("[target-div=css-div]>div");
  console.log(first);
  first.style.color = "red";
  first.style.fontSize = "30px";

  // document.querySelectorAll("css 선택자");
  const divs = document.querySelectorAll("[target-div=css-div] > div");

  console.log(divs);
  const colors = ["yellow", "pink"]; // 배열 선언 및 초기화
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.height = "50";
    divs[i].style.display = "flex";
    divs[i].style.justifyContent = "center";
    divs[i].style.alignContent = "30";
  }
}

//  카카오톡

function readValue() {
  // 채팅이 출력 되는 화면 요소 선택
  const bg = document.querySelector("#chattingBg");
  // input
  const input = document.querySelector("#userInput");

  // 입력된 값이 없을 경우
  // 아무 값도 입력 x
  //  - 작성된 내용이 공백문자(띄어쓰기, 탭, 엔터)만 있을 경우

  // * "string".trim() : 문자열 좌우 공백 제거

  if (input.value.trim().length === 0) {
    alert("채팅 내용을 입력 해주세요");
    input.value = "";
    input.focus(); //input 요소 활성화
    return;
  }

  // 입력된 값을 읽어와 채팅 화면에 누적
  bg.innerHTML += `<p><span>${input.value}</span></p>`;
  input.value = "";
  input.focus();

  // 채팅화면에 스크롤을 제일 아래로 이동
  // 요소.scrollHeight
  // 요소.scrollTop
  // 요소.scrollTop = "값px";
  bg.scrollTop = bg.scrollHeight;
}

document.querySelector("#userInput").addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    readValue();
  }
});
