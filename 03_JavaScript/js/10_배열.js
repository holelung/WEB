/* 배열 선언 및 기초 사용법 */

function check1() {
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ["사과", "딸기", "바나나"]; // 3칸 배열 + 초기화

  console.log("배열 길이 췍");
  console.log(arr1.length, arr2.length, arr3.length, arr4.length);

  // 여러가지 자료형 저장
  arr2[0] = 123;
  arr2[1] = "27일은 공휴일";
  arr2[2] = true;

  // 존재 하지않는 index에 값 대입 가능
  arr2[3] = "가능?";
  arr2[5] = "건너뛰기도 가능?"; // 가능

  console.log(arr2);
}

// 배열 x for
function check2() {
  const arr = ["apple", "orange", "grape", "mango", "watermelon"];
  const weeks = ["월", "화", "수", "목", "금", "토", "일"];
  for (let i = 0; i < 7; i++) {
    console.log(weeks[i]);
  }

  console.log("-------");
  // 일토금목수화월 ->거꾸로
  for (let i = 6; i >= 0; i--) {
    console.log(weeks[i]);
  }
}

function check3() {
  /* prompt로 입력 받은 값을 배열 요소에 순차적으로 초기화 */
  const arr = new Array();
  let count = 0;
  while (true) {
    let input = prompt(`넣고싶은 값을 입력하쇼. index=${count}`);
    if (input != null) {
      arr[count] = input;
      count++;
      continue;
    }
    break;
  }
  console.log(arr);
}

/* 
  prompt를 이용해 숫자 다섯개를 입력받아 배열에 저장한 후 
  1.  저장된 값 출력
  2.  합계 출력
  3.  평균 출력
  4.  짝수번쨰 인덱스 요소합계 출력(0,2,4)
  5.  홀수번째
*/
function check4() {
  let arr = new Array(5);
  let sum = 0; // 합
  let avg = 0; // 평균
  let oddSum = 0; // 홀수 번째
  let evenSum = 0; // 짝수 번째

  for (let i = 0; i < 5; i++) {
    val = prompt(`${i}번째 인덱스 입력: 정수만`);
    if (val != null) {
      arr[i] = Number(val);
      if (i % 2 == 0) {
        evenSum += arr[i];
        continue;
      }
      oddSum += arr[i];
      continue;
    }
    alert("취소눌림");
    break;
  }
  sum = oddSum + evenSum;
  avg = sum / 5;
  console.log(`arr 확인: ${arr}`);
  console.log(`합: ${sum}`);
  console.log(`평균: ${avg}`);
  console.log(`짝수 번째 인덱스 요소의 합: ${evenSum}`);
  console.log(`홀수 번째 인덱스 요소의 합: ${oddSum}`);
}
/* 
  배열 길이를 입력받아 배열을 생성하고
  생성된 배열 각 요소에 0에서 배열 길이 미만의 난수를 저장
*/
function check5() {
  let val = Number(prompt("배열 길이를 입력하세요"));
  let arr = new Array(val);
  for (let i = 0; i < val; i++) {
    arr[i] = Math.floor(Math.random() * val);
  }
  console.log("결과 : ", arr);
}

function selectMenu() {
  const menus = [
    "알탕",
    "순대국",
    "알밥",
    "칼국수",
    "쌀국수",
    "닭갈비",
    "찜닭",
    "햄버거",
    "제육덮밥",
    "김치찌개",
    "설렁탕",
    "돈까스",
    "라면",
    "김밥",
    "짬뽕",
    "우육면",
  ];
  const num = Math.floor(Math.random() * menus.length);

  document.getElementById("menuResult").innerText = menus[num];
}

function createLottoNumber() {
  const lottoContainer = document.getElementById("lottoContainer");
  // 컨테이너 초기화
  lottoContainer.innerHTML = "";
  let result = "";

  let lotto = new Array(6);
  for (let i = 0; i < 6; i++) {
    let rand = Math.floor(Math.random() * 45 + 1);
    let checkedResult = duplicateCheck(lotto, rand, 45, 1);
    lotto[i] = checkedResult;
  }
  lotto.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < 6; i++) {
    result += `<div>${lotto[i]}</div>`;
  }
  console.log(lotto);
  lottoContainer.innerHTML = result;
}

function check6() {
  const num1 = 10;
  const num2 = 20;
  const num3 = 30;

  const arr1 = [num1, num2, num3];
  const arr2 = [40, 50, 60];
  const arr3 = [70, 80, 90];

  const dArr1 = [arr1, arr2, arr3];
  const dArr2 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
    [2, 3, 3],
  ];

  console.log(num1, num2, num3);
  console.log(arr1, arr2, arr3);
  console.log("dArr1[0] : ", dArr1[0]);
  console.log("dArr2[0].length : ", dArr2[0].length);
  console.log("dArr2.length : ", dArr2.length); // 4

  // dArr2의 0행 2열에 저장된 값 얻어오기
  console.log("dArr[0][2]", dArr2[0][2]);
  // dArr2의 1행 1열에 저장된 값 얻어오기
  console.log("dArr[1][1]", dArr2[1][1]);
}
/* 4행 4열 2차원 배열 0~16사이 난수 배치 중복 x 
  console 출력
  prompt 를 이용해서 1~16 사이숫자를 입력받아 2차원 배열 어디에 위치하는지 검색해서 
  출력
*/
function check7() {
  // 2차원 배열을 선언후 0으로 초기화
  let arr = Array.from(new Array(4), () => new Array(4).fill(0));
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let rand = Math.floor(Math.random() * 16 + 1);
      checkedRand = duplicateCheck(arr, rand, 16, 1);
      arr[i][j] = checkedRand;
    }
  }
  console.log(arr);

  const input = Number(prompt("1-16 사이 숫자 입력"));
  let index = arr.flat().findIndex((value) => value === input);
  let row = Math.floor(index / 4);
  let col = index % 4;
  alert(`${input}은 [${row}][${col}]에 있습니다.`);
}

// 중복검사 함수
function duplicateCheck(arr, rand, max, min) {
  if (!arr.flat().includes(rand)) {
    return rand;
  } else {
    let newRand = Math.floor(Math.random() * (max - min + 1) + min);
    return duplicateCheck(arr, newRand, max, min);
  }
}
