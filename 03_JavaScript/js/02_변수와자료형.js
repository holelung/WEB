// 변수선언
var number1 = 10;
var number2 = 20;
// var
// 변수, 변수명 중복 O
function varCheck() {
  var menu = "제육볶음";
  console.log("menu : ", menu);

  menu = "생선까스";
  console.log("menu : ", menu);

  // 변수명 중복생성, 기존 동일 이름 변수 제거
  var menu = "치킨";
  console.log("menu : ", menu);

  // var 문제점
  // 잘 사용하고 있던 변수를 실수로 없애는 경우가 자꾸 발생
}

/* let */
// 변수, 변수명 중복 X (var 문제점 해결)
function letCheck() {
  let name = "홍길동";
  console.log("이름 :", name);

  name = "장준호";
  console.log("이름 :", name);
}
// let name = 100; 얜됨 블록 밖이라서

/* const (Constant: 상수) */
// 상수(값 변경 X), 변수명 중복 X
function constCheck() {
  const nationalCode = 82;
  console.log("nationalCode :", nationalCode);

  // 에러 발생
  // nationalCode = 1;
  console.log("nationalCode :", nationalCode);

  // 변수명 중복 x
  // const nationalCode = 1;
}

/* var, let, const의 범위확인 */
// 함수 레벨 범위 : 함수 안에서 살아있다.
function scopeTest1() {
  var num1 = 100;

  if (num1 === 100) {
    var num2 = 200;
  }
  console.log("num2 :", num2);
}

// let
function scopeTest2() {
  let num1 = 400;

  if (num1 === 400) {
    let num2 = 200;
    console.log("첫번째if 문 안의 num1:", num1);
    console.log("첫번째if 문 안의 num2:", num2);
  }
  if (num1 === 400) {
    let num2 = 23300;
    console.log("두번째if 문 안의 num1:", num1);
    console.log("두번째if 문 안의 num2:", num2);
  }
  // 에러 발생 : num2는 블록 단위라 num2를 찾지 못함
  console.log("num2 :", num2);
}
// 변수 선언 위치에 따른 범위
/* 
  전역(global) 변수

  지역(local) 변수
*/
//전역변수 선언
const global1 = "전역변수1";

function checkGlobal() {
  const fn1 = "함수 지역 변수1";
  let fn2 = "함수 지역 변수2";

  const temp = 123;
  console.log("if 실행전 :", fn2);

  if (temp === 123) {
    // 바깥 -> 안쪽 변수 사용확인
    console.log("if 내부에서 fn2 :", fn2);
    console.log("전역 변수 global1 :", global1);

    fn2 = "변경된 fn2";
    console.log("fn2 변경확인 :", fn2);
  } //if 끝

  console.log("if 끝난 이후 fn2 :", fn2);

  const name = "홍길동"; //상수 함수{}레벨
  console.log("if 전 name :", name);
  if (temp === 123) {
    const name = "김미영"; // {}블럭 바깥쪽, 안쪽 변수명이 같으면, {} 안쪽이 우선순위가 높음
    console.log("if 안에서 홍길동찾기 :", name);
    console.log("if 안에서 name :", name);
  }
  console.log("if 나와서 name :", name);
}

// 자료형 확인
function typeCheck() {
  // typeof 연산자 : 변수/값의 자료형을 확인하는 연산자
  // undefined : 정의되지 않음 == 변수에 값 대입 X
  let undef;
  console.log("undef: ", undef, typeof undef);

  // string type
  let stringType = "홍길동";
  console.log("stringType: ", stringType, typeof stringType);

  // number(숫자) 정수, 실수 형태의 리터럴
  const age = 25;
  const height = 178.4;
  const sight = -4.2;
  console.log("age :", age, typeof age);
  console.log("height :", height, typeof height);
  console.log("sight :", sight, typeof sight);
  let numberType = 12345678;
  console.log("numberType :", numberType, typeof numberType);

  // boolean type
  let booleanType = true;
  console.log("booleanType :", booleanType, typeof booleanType);

  // object type
  let arrayType = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  console.log("arrayType :", arrayType, typeof arrayType);
  console.log("arrayType :", arrayType[0][1], typeof arrayType[0][1]);

  // key == 값을 구분하는 이름
  // value == 값 자체
  let objectType = {
    name: "홍길동",
    age: 23,
    height: 178,
    weight: 74.4,
  };
  console.log("objectType :", objectType, typeof objectType);
  console.log(
    "objectType['name'] :",
    objectType["name"],
    typeof objectType["name"]
  );
  console.log(
    "objectType['age'] :",
    objectType["age"],
    typeof objectType["age"]
  );
  console.log(
    "objectType['weight'] :",
    objectType["weight"],
    typeof objectType["weight"]
  );

  // function type
  // 함수도 변수에 대입 가능
  const sumFn = function (a, b) {
    return a + b;
  };

  console.log("sum 함수 :", sumFn, typeof sumFn);

  // sumFn 호출
  console.log(sumFn(11, 9));
}
