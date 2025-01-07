/* 
  for([1]초기식 ; [2]조건식 ; [4]증감식){
    // [3] 조건식이 true일 경우 수행할 코드;
  }

  * 처음 for문이 수행 될 때만 [1] 초기식을 수행
    -> 두 번째 반복부터는 [2],[3],[4] 만 반복 
*/

/** 콘솔에 12345 출력하기 */
function check1() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);

  console.log("--------------------");

  /* for문 버전 */

  // num 값이 1부터 5까지 1씩 증가하는 동안 반복
  for (let num = 1; num <= 5; num++) {
    console.log(num);

    // [초기식] let num = 1
    //   -> 1이 저장된 변수 num을 선언

    // [조건식] num <= 5
    //   -> num 변수에 저장된 값이 5 이하면 true
    //      -> 반복 O == for문 {} 내부 코드를 수행해라

    //   -> num 변수에 저장된 값이 5 이하가 아니면 false
    //      -> 반복 X == for문 {} 내부 코드를 수행하지 말아라!

    // [증감식] num++
    //   -> num 변수에 저장된 반복 때 마다 값을 1 증가
  }
}

/** 콘솔에 1부터 10까지 1씩 증가하며 출력하기 */
function check2() {
  for (let num = 1; num <= 10; num++) {
    console.log(num);
  }
}

/** 콘솔에 5부터 13까지 1씩 증가하며 출력하기 */
function check3() {
  for (let num = 5; num < 14; num++) {
    //  num <= 13
    console.log(num);
  }
}

/** 1부터 7까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check4() {
  let result = ""; // 결과를 저장할 변수에 ""(빈칸) 대입

  for (let num = 1; num <= 7; num++) {
    result += num; // result = result + num;
  }

  console.log(result); // '1234567'
}

/** 4부터 11까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check5() {
  let result = "";
  // let result;
  // result에 ""(빈칸)을 대입하는 이유
  // -> 변수 선언 시 아무런 값도 대입하지 않으면 undefined
  //  -> undefined는 산술 연산의 대상이 될 수 없음!
  //   -> 산술 연산을 수행하면 NaN(Not a Number) 결과가 반환됨

  for (let num = 4; num <= 11; num++) {
    result += num;
  }
  console.log(result);
}

/** 1부터 10까지 1씩 증가한 숫자의 합 구하기 */
// check4, 5과 유사하지만 저장 타입에 따라서 결과가 달라짐
function check6() {
  let sum = 0; // 합계를 저장할 변수를 선언, 0을 대입
  // -> 더하거나 뺏을 때 영향이 없는 숫자 0 대입

  for (let num = 1; num <= 10; num++) {
    sum += num;
  }

  console.log(sum);
}

/** 입력 받은 값 사이 정수 값들의 합 구하기 */
function check7() {
  // 모든 값 입력 되어있고
  // 입력 1이 입력 2보다 작다고 가정

  const a = Number(document.getElementById("input7a").value);
  const b = Number(document.getElementById("input7b").value);

  let sum = 0;

  for (let num = a; num <= b; num++) {
    sum += num;
  }

  alert(`${a} 부터 ${b} 사이 정수 합 : ${sum}`);
}

/** 1부터 10까지 2씩 증가한 숫자 출력 + 합계 구하기 */
function check8() {
  let sum = 0; // 합계
  // num = num + 2
  for (let num = 1; num <= 10; num += 2) {
    console.log(num);
    sum += num;
  }

  console.log("합계 : ", sum);
}

/** 3부터 30까지 3의 배수만 출력하기 */
function check9() {
  // 1) 증감식 변경
  let result = "";

  for (let num = 3; num <= 30; num += 3) {
    result += num + " ";
  }
  console.log(result);

  // 2) for문 + if문
  let result2 = "";
  for (let num = 3; num <= 30; num++) {
    // num 1씩 증가

    if (num % 3 === 0) {
      // 3으로 나눴을 때 나머지 0 == 3의 배수
      result2 += num + " ";
    }
  }
  console.log(result2);
}

/** 입력 받은 범위 내 지정된 수의 배수를 출력(한 줄), 합계 구하기
 * 시작 : 5
 * 종료 : 20
 * 배수 : 3
 *
 * (콘솔)
 * 6 9 12 15 18
 * 합계 : 60
 */
function check10() {
  const start = Number(document.getElementById("start10").value);
  const end = Number(document.getElementById("end10").value);
  const multiple = Number(document.getElementById("multiple10").value);

  let result = ""; // 배수를 한 줄로 출력할 변수
  let sum = 0; // 합계를 저장할 변수

  for (let num = start; num <= end; num++) {
    // start 부터 end 까지 1씩 증가하는 num이
    // multiple로 나눴을 때 나머지가 0인 경우
    //  == num이 multiple의 배수인 경우
    if (num % multiple === 0) {
      result += num + " "; // 출력 문자열 누적
      sum += num; // 합계 누적
    }
  }

  console.log(result);
  console.log("합계 : ", sum);
}

/** 구구단 2단 출력하기 */
function check11() {
  // - 2단에 곱해지는 수가 1~9까지 1씩 증가
  // - 곱셈 결과가 1~9까지 1씩 증가한 수에 2를 곱한 값
  for (let num = 1; num <= 9; num++) {
    console.log(`2 x ${num} = ${num * 2}`);
  }
}

/** 입력 받은 단의 구구단 출력하기 */
function check12() {
  const dan = document.getElementById("dan12");

  // 단이 입력되지 않으면
  // -> alert("단을 입력 해주세요");  출력 후 함수 종료
  if (dan.value.length === 0) {
    alert("단을 입력 해주세요");
    return;
  }

  // 입력된 단이 2 ~ 9단이 아니면
  // -> alert("2 ~ 9단 사이만 입력 해주세요");  출력 후 함수 종료
  const val = Number(dan.value);
  if (val < 2 || val > 9) {
    alert("2 ~ 9단 사이만 입력 해주세요");
    return;
  }

  // 구구단 출력
  for (let num = 1; num <= 9; num++) {
    console.log(`${val} x ${num} = ${val * num}`);
  }
}

/** 10부터 1까지 1씩 감소하며 출력하기 */
function check13() {
  // 감소 형태 반복문은 조건식을 조금 더 생각해야 된다!
  for (let num = 10; num >= 1; num--) {
    console.log(num);
  }
}

/** 20부터 3까지 3씩 감소하며 출력하기 */
function check14() {
  for (let num = 20; num >= 3; num -= 3) {
    console.log(num);
  }
}

/** 구구단 3단 거꾸로 출력하기 */
function check15() {
  for (let num = 9; num >= 1; num--) {
    console.log(`3 x ${num} = ${num * 3}`);
  }
}

/** 5의 배수마다 @, 10의 배수마다 줄바꿈하면서 출력하기(1~30) */
function check16() {
  let result = "";

  for (let num = 1; num <= 30; num++) {
    if (num % 5 === 0) {
      // 5의 배수인 경우
      result += "@ ";
    } else {
      // 5의 배수가 아닌 경우
      result += num + " ";
    }

    // 10의 배수마다 줄바꿈 (따로 생각해야되는 조건)
    if (num % 10 === 0) {
      result += "<br>"; // 줄바꿈 태그 추가
    }
  }

  // #result16에 출력(HTML 해석)
  document.getElementById("result16").innerHTML = result;
}

function check17() {
  for (let row = 0; row < 3; row++) {
    let result = "";
    for (let col = 1; col < 5; col++) {
      result += col;
    }
    console.log(result);
    console.log("----");
  }
}

function check18() {
  for (let row = 0; row < 4; row++) {
    let result = "";
    for (let col = 1; col < 6; col++) {
      result += col;
    }
    console.log(result);
    console.log("----");
  }
}

function check19() {
  for (let row = 0; row < 3; row++) {
    let result = "";
    for (let col = 6; col > 0; col--) {
      result += col;
    }
    console.log(result);
    console.log("----");
  }
}

/* 
1
12
123
1234
12345
*/
function check20() {
  for (let row = 1; row <= 5; row++) {
    let result = "";
    for (let col = 1; col <= row; col++) {
      result += col;
    }
    console.log(result);
  }
}

function check21() {
  for (let row = 3; row <= 7; row++) {
    let result = "";
    for (let col = 3; col <= row; col++) {
      result += col;
    }
    console.log(result);
  }
}

function check22() {
  for (let row = 0; row < 4; row++) {
    let result = "";
    for (let col = 0; col <= row; col++) {
      result += "*";
    }
    console.log(result);
  }
}

function check23() {
  let in23 = document.getElementById("input23").value;

  if (in23 == "") {
    alert("숫자를 입력해주세요");
    return;
  }
  val = Number(in23);
  if (val <= 0) {
    alert("0보다 큰 수를 입력하세요");
    return;
  }

  for (let row = 0; row < val; row++) {
    let result = "";
    for (let col = 0; col <= row; col++) {
      result += "*";
    }
    console.log(result);
  }
}

function check24() {
  for (let row = 4; row > 0; row--) {
    let result = "";
    for (let col = 0; col < row; col++) {
      result += "*";
    }
    console.log(result);
  }
}

function check25() {
  let count = 0;
  for (let i = 1; i <= 30; i++) {
    if (i % 4 == 0) {
      count++;
    }
  }
  console.log(count);
}

function check26() {
  let input = document.getElementById("input26");
  let count = 0;
  let val = Number(input.value);

  if (val <= 0 || val > 100) {
    alert("1이상 100이하의 정수를 입력해주세요");
    return;
  }

  for (let i = 1; i <= 100; i++) {
    if (i % val == 0) {
      count++;
    }
  }
  console.log(`${val} 의 배수는 ${count}개 입니다.`);
}

function check27() {
  result = "";
  count = 0;
  for (let col = 1; col <= 12; col++) {
    result += String(++count);
    result += " ";
    if (count % 4 == 0) {
      console.log(result);
      result = "";
    }
  }
}

function check28() {
  let sum = 0; // 합계 누적
  let val; // prompt 입력된 값 저장

  while ((val = prompt("숫자 입력(취소 클릭 시 종료)")) !== null) {
    // prompt 취소 버튼 클릭시 null 반환
    sum += Number(val);
  }
  alert(`합계 : ${sum}`);
}

function check29() {
  // 메뉴 가격 고정
  const gimbap = 4000;
  const ramen = 3500;
  const donkkaseu = 9000;

  // 주문 목록 object
  let order = { gimbap: 0, ramen: 0, donkkaseu: 0 };
  // 합계
  let sum = 0;
  let val = "";

  while (val !== null) {
    val = prompt("메뉴선택(숫자입력)1.김밥 2.라면 3.돈까스");
    switch (val) {
      case "1":
        order.gimbap += 1;
        sum += gimbap;
        break;
      case "2":
        order.ramen += 1;
        sum += ramen;
        break;
      case "3":
        order.donkkaseu += 1;
        sum += donkkaseu;
        break;
      case null:
        if (sum == 0) {
          alert("주문 품목이 없습니다.");
          break;
        }
        alert("주문완료!");
        break;
      default:
        alert("1-3 중에 입력해주세요.");
    }
  }
  let result = "";

  if (order.gimbap > 0) {
    result += `<li>김밥(${order.gimbap}개) : ${order.gimbap * gimbap}원 </li>`;
  }
  if (order.ramen > 0) {
    result += `<li>라면(${order.ramen}개) : ${order.ramen * ramen}원 </li>`;
  }
  if (order.donkkaseu > 0) {
    result += `<li>돈까스(${order.donkkaseu}개) : ${
      order.donkkaseu * donkkaseu
    }원 </li>`;
  }

  result += `<li>합계 : ${sum}원</li>`;
  document.getElementById("result29").innerHTML = result;
}
