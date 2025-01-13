const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

/** 전달 받은 값이 양수/음수/0인지 판별해서 출력
 * @param num : 전달 받은 숫자
 *
 *
 */
function testFn1(num) {
  let str = "";
  if (num == 0) {
    str = "0";
  } else if (num > 0) {
    str = "양수";
  } else {
    str = "음수";
  }

  return `${num}은/는 ${str}입니다.`;
}

btn1.addEventListener("click", function (e) {
  let result = testFn1(input1.value);
  alert(result);
});

input1.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    let result = testFn1(input1.value);
    alert(result);
  }
});

/**  전달 받은 배열 내 요소의 합 출력하기
 * @param arr : number만 저장된 1차원 배열
 */
function sumArr(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return alert(`배열의 합 ${sum}`);
}

const btn2 = document.querySelector("#btn2");

document.querySelectorAll("[name=input2]").forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      btn2.click();
    }
  });
});

btn2.addEventListener("click", function () {
  const inputs = document.querySelectorAll("[name=input2]");
  let array = new Array();
  inputs.forEach((input) => {
    array.push(Number(input.value));
  });
  alert(`합 : ${sumArr(array)}`);
});

/** 배수 확인 함수
 * @param a = 비교(기준) 수
 * @param b = 확인하는 수
 */
function multipleFn(a, b) {
  let str = "";
  if (a % b == 0) {
    str = "맞습니다";
  } else {
    str = "아닙니다";
  }
  alert(`${a}는 ${b}의 배수가 ${str}`);
  return;
}

const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
  const inputs = document.querySelectorAll("[name=input3]");
  multipleFn(inputs[0].value, inputs[1].value);
});

/* return 확인 1 */

/** num의 x 제곱 값을 반환하는 함수
 * @param num : 곱해질 정수
 * @param x : 지수
 * @return : num의 x제곱
 */
function pow(num, x) {
  return num ** x;
}

/** 제곱의 결과를 문자열로 반환
 * @param num
 * @param x
 * @param result : num의 x제곱
 * @return "num의 x제곱은 result입니다";
 */
function createStr(num, x, result) {
  return `${num}의 ${x}제곱은 ${result}입니다.`;
}
// #btn4를 btn4 변수에 저장
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function () {
  let num = Number(prompt("정수를 입력하세요"));
  let x = Number(prompt("지수를 입력하세요(정수)"));
  // let result = pow(num, x);
  alert(createStr(num, x, pow(num, x)));
});

/** prompt에 입력된 값을 숫자 배열로 바꿔서 반환하는 함수
 * @param num : 입력 받을 수의 개수
 * @param return : 입력 받은 수가 저장된 배열
 */
function createArray(num) {
  const arr = new Array();
  for (let i = 0; i < num; i++) {
    const val = Number(prompt(`${i}번째 인덱스에 저장할 정수를 입력하세요`));
    arr.push(val);
  }
  return arr;
}

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function () {
  const count = Number(prompt("반복할 횟수를 입력하세요"));
  const arr = createArray(count);
  sumArr(arr);
});

/** 함수 반환 함수
 *
 */
function createCounter() {
  let count = 5;
  const fn = function () {
    return ++count;
  };
  return fn;
}

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", () => {
  const counter = createCounter();
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
});
/* 
closer ?
createCounter 반환하면 fn 반환 => (return ++count)
Closure
- 외부 함수에서 종료된 내부 함수에 선언도니 변수를 사용하는 기술
특징 1 : 데이터 은닉
-  외부에서 직접 점근할 수 없는 상태의 변수를 만들수 있음
매개변수 /return으로 익명 함수 전달하기

특징 2 : 상태 유지
- 외부에서 함수를 수행한 후에도
  내부 함수의 변수 값이 변한 상태로 유지됨
 */

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", function () {
  const resultFn = testFn7(function (a, b) {
    return a + b;
  });
  console.log(resultFn(4)); // 120
});

function testFn7(otherFn) {
  return function (num) {
    return otherFn(10, 20) * num;
  };
}

// private method  흉내내기
const makeCounter = () => {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

/* 화살표 함수 */
const arrows = document.querySelectorAll(".arrow");

// 기본형태
arrows[0].addEventListener("click", () => {
  // 전달받은 값 3개의 합을 반환하는 함수
  const sumFn = (a, b, c) => {
    return a + b + c;
  };
  alert(sumFn(50, 99, 1234));
});

// 매개변수가 1개인 경우
arrows[1].addEventListener("click", () => {
  // 2제곱 반환
  const square = (num) => {
    // 소괄호 생략 가능한데. prettier가 복구시킴
    return num ** 2;
  };
  alert(square(1024));
});

// {}내 코드가 한줄만 작성된 경우
arrows[2].addEventListener("click", () => {
  const print = (str) => console.log(str);
  print("안녕하세요");

  const doubleFn = (num) => num * 2;
  print(doubleFn(3));
});

// object type 을 return 하는 경우
arrows[3].addEventListener("click", () => {
  // 배열 반환(배열은 {}, return 생략 가능!!)
  const fn1 = () => [1, 2, 3];
  console.log(fn1());

  // * {k:v, k:v} === js 객체

  // 객체 반환 (return , {} 생략 시 구문 오류 발생!!)
  const fn2 = () => {
    return { name: "홍길동", age: "24세" };
  };
  console.log(fn2());
  fn3();
});

const fn3 = () => {
  console.log("fn3");
};

/* function() {} 의 this 확인 */
document.querySelector("#btn8").addEventListener("click", function () {
  console.log(this); // 이벤트가 발생한 요소
});
// #btn8 의 요소를 가져옮
// 결과값 : <button id="btn8">function(){} 의 this 확인</button>

/*  ()=>{}의 this 확인 */
document.querySelector("#btn9").addEventListener("click", () => {
  console.log(this); // === window 객체
  /* 
    window 객체란 ?
    - 창(브라우저) 자체를 나타내는 객체

    - 창(브라우저) 관련 기능을 제공
    (alert, prompt, setTimeout, setInterval, open 등...)

    
  */
});

/* 
=========================
| Browser Object Model  |
|+++++++++++++++++++++++|    => Window
| Document Object Model |
=====================
*/
const str = "A"; // 전역 변수
console.log(str);

// 변수 scope를 이용
(function () {
  const str = "B"; // {} 내 지역 변수
  console.log(str);
})();

console.log(str);
