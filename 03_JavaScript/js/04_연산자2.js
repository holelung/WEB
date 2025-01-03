/* 
  [템플릿 문자열]
  - `(백틱)을 이용한 문자열 + 변수/값 혼합 작성법
    쉽게 할 수 있게 해주는 방법
  - 문자열 전체를 ``(백틱)으로 감싸고 변수 값이 들어가야되는 부분에는 ${변수명/값} 형태로 작성

  ex)
  const num = 10;
  console.log(`num에 저장된 값은 ${num} 입니다.`);
*/

/* 비교 연산자 확인 */
function check1() {
  const num1 = 100; //number type
  const num2 = 100;
  const num3 = 999;

  const str1 = "100";
  const str2 = "100";
  const str3 = "999";

  // 동등비교
  console.log("동등 비교");
  console.log("num1 == num2", num1 == num2); // true
  console.log("num1 == num3", num1 == num3); // false
  console.log("num1 != num3", num1 != num3); // true
  console.log("num1 == str1", num1 == str1); // true
  console.log("str2 == str1", str2 == str1); // true
  console.log("str2 == str3", str2 == str3); // false

  // 동일비교
  console.log("동일 비교");
  console.log("num1 === num2", num1 === num2); // true
  console.log("num1 === num3", num1 === num3); // false
  console.log("num1 !== num3", num1 !== num3); // true
  console.log("num1 === str1", num1 === str1); // false
  // -> 자료형이 다름
  console.log("str2 === str1", str2 === str1); // true
  console.log("str2 === str3", str2 === str3); // false
}

// 홀짝 판별기
function oddEvenCheck() {
  const input1 = document.getElementById("input1").value;
  let result = "";
  if (Number(input1) % 2 == 1) {
    result = "홀수";
  } else {
    result = "짝수";
  }
  return (document.getElementById("oddEvenResult").innerText = result);
}

// 배수 판별기
function multipleCheck() {
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  const result2 = document.getElementById("result2");
  if (Number(input2) % Number(input3) == 0) {
    return (result2.innerText = "True");
  } else {
    return (result2.innerText = "False");
  }
}

function divisionCheck() {
  const input4 = document.getElementById("input4").value;
  const input5 = document.getElementById("input5").value;
  const result3 = document.getElementById("result3");
  if (Number(input5) < Number(input4)) {
    return alert("N의 약수는 N보다 커야합니다");
  }
  if (Number(input5) % Number(input4) == 0) {
    return (result3.innerText = "True");
  } else {
    return (result3.innerText = "False");
  }
}

// 복합 대입 연산자
function compoundCheck() {
  let num = 100;

  console.log(`num 초기값 : ${num}`); // 100

  num += 20; // num = num + 20;
  console.log(`num += 20 : ${num}`); // 120
  num -= 60;
  console.log(`num -= 60 : ${num}`);
  num *= 4;
  console.log(`num *= 4 : ${num}`);
  num /= 2;
  console.log(`num /= 2 : ${num}`);
  num %= 7;
  console.log(`num %= 7 : ${num}`);
}

function endCheck() {
  // 104 는 100이상의 숫자이면서 짝수인가?
  const bool1 = 104 > 100 && 104 % 2 === 0;
  console.log(`104는 100이상의 숫자이면서 짝수인가? ${bool1}`);

  // 50은 70이하의 숫자이고, 4의 배수가 맞는가?
  const bool2 = 50 <= 70 && 50 % 4 === 0;
  console.log(`50은 70이하의 숫자이고, 4의 배수가 맞는가? ${bool2}`);

  // 13은 1부터 10 사이의 숫자가 맞는가?
  const bool3 = 1 <= 13 && 13 <= 10;
  console.log(`13은 1부터 10 사이의 숫자가 맞는가? ${bool3}`);
}

function orCheck() {
  const bool4 = 4 > 10 || 4 % 2 === 0;
  console.log(`4는 10을 초과하거나 짝수인가? ${bool4}`);
  // 나이가 18세 미만이거나 이름이 홍길동인가
  const age = 20;
  const name = "홍길동";
  const bool5 = age < 18 || name === "홍길동";
  console.log(`나이가 18세 미만이거나 이름이 홍길동인가? ${bool5}`);

  //국어 또는 영어점수가 40점 미만이거나 평균이 60점 미만인가?
  const kor = 50;
  const eng = 75;
  const bool3 = kor < 40 || eng < 40 || (kor + eng) / 2 < 60;
  console.log(
    `국어 또는 영어점수가 40점 미만이거나 평균이 60점 미만인가? ${bool3}`
  );
}

// NOT 연산자
function notCheck() {}
