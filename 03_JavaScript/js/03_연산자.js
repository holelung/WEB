/* !!HTML 문서에서 얻어온 값의 자료형은 무조건 string(문자열)!! */

// 계산기 동작 코드

// 전역 변수 선언
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
/* . (점 연산자) : 내부(하위) 접근 연산자 */
const calcResult = document.getElementById("calcResult");

function plusBtn() {
  console.log(Number(input1.value) + Number(input2.value));
  return (calcResult.innerText = Number(input1.value) + Number(input2.value));
}

function subBtn() {
  console.log(Number(input1.value) - Number(input2.value));
  return (calcResult.innerText = Number(input1.value) - Number(input2.value));
}

function divBtn() {
  console.log(Number(input1.value) / Number(input2.value));
  return (calcResult.innerText = Number(input1.value) / Number(input2.value));
}

function multiBtn() {
  console.log(Number(input1.value) * Number(input2.value));
  return (calcResult.innerText = Number(input1.value) * Number(input2.value));
}
function modBtn() {
  console.log(Number(input1.value) % Number(input2.value));
  return (calcResult.innerText = Number(input1.value) % Number(input2.value));
}

// 계산기 2
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const calcResult2 = document.getElementById("calcResult2");

function doubleBtn() {
  var cal = Number(input3.value) * 2;
  return (calcResult2.innerText = cal);
}
function squareBtn() {
  var cal = Number(input4.value) * Number(input4.value);
  return (calcResult2.innerText = cal);
}
function allOperationBtn() {
  var num1 = Number(input3.value);
  var num2 = Number(input4.value);

  var add = num1 + num2;
  var sub = num1 - num2;
  var multi = num1 * num2;
  var div = num1 / num2;
  var mod = num1 % num2;
  // 요소.innerText ="문자열"; <span>content</span> "content"부분에 "문자열"입력
  var result =
    "\n덧셈 : " +
    add +
    "\n뺄셈 : " +
    sub +
    "\n곱셈 : " +
    multi +
    "\n나눗셈 : " +
    div.toFixed(3) +
    "\n나머지 : " +
    mod;

  calcResult2.innerHTML =
    "<ul>" +
    "<li> + 결과 : " +
    add +
    "</li>" +
    "<li> - 결과 : " +
    sub +
    "</li>" +
    "<li> * 결과 : " +
    multi +
    "</li>" +
    "<li> / 결과 : " +
    div.toFixed(3) +
    "</li>" +
    "<li> % 결과 : " +
    mod +
    "</li>" +
    "</ul>";
}

// 증감연산자를 이용해 1씩 증감함수만들기
const countResult = document.getElementById("countResult");

function addFnc() {
  now = Number(countResult.innerText);
  countResult.innerText = ++now;
}
function subFnc() {
  now = Number(countResult.innerText);
  countResult.innerText = --now;
}

// 전위 후위 연산 확인
function checkFn() {
  let num = 100;

  // 전위 연산 : 다른 연산 보다도 최우선으로 실행

  // num 값이 1증가한 후 console에 출력
  console.log("++num : ", ++num);
  console.log("++num : ", ++num);
  console.log("++num : ", ++num);

  console.log("-----------------");
  num = 100;
  // 후위 연산 : 다른 연산 보다도 나중에 실행
  console.log("num++ : ", num++);
  console.log("num++ : ", num++);
  console.log("num++ : ", num++);
  console.log("num 확인 : ", num);

  // 문제
  let a = 10;
  let b = 5;
  let c = ++a * b--;
  // a, b, c의 값
  // a: 11
  // b: 4
  // c: 55
  console.log(a, b, c);
  return 0;
}
