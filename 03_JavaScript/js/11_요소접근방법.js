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
