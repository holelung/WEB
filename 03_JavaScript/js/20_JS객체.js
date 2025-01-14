/* JS 객체 생성 + 다루기 */

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  // 1. 객체 생성
  //  1) {} - JS 객체 리터럴을 이용한 생성

  // * Key는 무조건 string 타입!(고정)
  const product = {
    productName: "새우깡", // const productName = "새우깡";
    brand: "농심",
    price: 1700,
  };

  console.log("product :", product);

  // 2) new Object() - 새 객체 생성
  const person = new Object();

  /* 객체 내부에 값을 추가하는 방법 */
  // 1) 객체명.key = value;
  person.name = "홍길동";
  person.age = 25;

  // 2) 객체명["key"] = value;
  person["weight"] = 72;
  person["height"] = 178.9;

  console.log("person : ", person);

  // 생성된 객체 내부 값 얻어 오는 방법
  // 1. 객체명.key : 일반적인 방법
  console.log(product.productName);
  console.log(product.brand);
  console.log(product.price);

  // 2. 객체명["key"] : key에 특수문자, 공백 포함 시 사용
  //  + for문과 같이 사용하는 경우
  console.log(product["productName"]);
  console.log(product["brand"]);
  console.log(product["price"]);

  //----------------------------------------------
  // 2. 객체에 저장된 값 수정, 삭제

  // 1) 수정 - key가 중복되면 새로운 value로 덮어쓰기
  // 객체.기존key = 새 value;
  // 객체["기존key"] = 새 value;
  product.price = 1500;
  person["age"] = 26;

  console.log("수정된 product :", product);
  console.log("수정된 person :", person);
  // 2) 삭제 - 객체 내에서 key가 일치하는 요소 삭제
  // delete 객체명.key
  // delete 객채명["key"]

  delete person.weight;

  console.log("삭제 확인 : ", person);
});

/* JS 객체에 메서드 추가 */
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  const student = {}; // empty object
  // . 연산자 : 객체(object) 내부 접근
  student.name = "홍길동";
  student.age = 20;

  // 객체에 존재하는 함수 === 메서드(method)
  // + 메서드 작성 시 화살표 함수 X(this 관련 문제 발생)
  student.introduce = function () {
    const gender = "남자"; // {} block scope

    alert(`저는 ${this.age}세 ${gender} ${this.name}입니다`);
  };

  //메서드(객체 함수)
  // student의 introduce() 메서드

  console.log(student.introduce());

  // 메서드 추가
  student.study = function (subject) {
    const str = `${this.name}은 ${subject} 공부를 합니다.`;

    console.log(str);
  };
  // study 메서드 호출
  student.study("코딩");
  student["study"]("영어");

  /* this 참조 변수 위치에 따른 의미
  1) 객체 메서드(함수)에서 this === 현재 객체
  
  2) 이벤트가 발생된 요소 (화살표 함수 x)

  <button onclick="testFn(this)">테스트</button>
  btn.onclick = function(){console.log(this); }
  btn.addEventListener("click", function(){
    console.log(this)
  })
  
  3) 일반 함수, 화살표 함수, 전역 변수에서 this
    === window 객체
  
*/
});

/* 학생부 만들기 */

/**
 *
 * @param {} grade    : 전달 받은 학년
 * @param {*} ban     : 전달 받은 반
 * @param {*} number  : 전달 받은 번호
 * @param {*} name    : 전달 받은 이름
 */
function Student(grade, ban, number, name) {
  this.grade = grade;
  this.ban = ban;
  this.number = number;
  this.name = name;

  // 메서드(객체의 함수)
  this.inform = function () {
    let str = `${this.grade}학년 ${this.ban}반 ${this.number}번 ${this.name}`;
    return str;
  };
}
// 학생 리스트
let studentList = [
  new Student(1, 1, 1, "장준호"),
  new Student(1, 1, 2, "김대욱"),
  new Student(1, 1, 3, "김구남"),
];

// 학생 추가 버튼 클릭
const addStudent = document.querySelector("#addStudent");
addStudent.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  studentList.push(
    new Student(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value),
      inputs[3].value
    )
  );
  alert("추가 완료");

  for (let input of inputs) {
    input.value = "";
  }
  inputs[0].focus();
});

// 조회 버튼
const selectStudent = document.querySelector("#selectStudent");
const tbody = document.querySelector("#tbody");
selectStudent.addEventListener("click", () => {
  document.querySelector("#total").textContent = `${studentList.length}명`;
  tbody.innerHTML = "";
  // 요소 생성 + innerText 추가 함수
  const createEl = (tag, text) => {
    const el = document.createElement(tag);
    el.innerText = text;
    return el;
  };

  studentList.forEach((student, index) => {
    const tr = document.createElement("tr");

    const th1 = createEl("th", index + 1);
    const td1 = createEl("td", student.name);
    const td2 = createEl("td", student.grade);
    const td3 = createEl("td", student.ban);
    const td4 = createEl("td", student.number);
    // tr 조립
    tr.append(th1, td1, td2, td3, td4);
    // tbody에 tr 추가
    tbody.append(tr);

    // 이름이 작성되있는 요소 (td1)가 클릭되었을 때
    td1.addEventListener("click", () => {
      alert(student.inform()); // inform 메서드 반환결과 alert로 출력
    });
  });
});

/* check json */
const checkJson = document.querySelector("#checkJson");
checkJson.addEventListener("click", () => {
  const user = {
    id: "user01",
    pw: "pass01",
    email: "user01@naver.com",
    phone: "010-1234-1234",
  };

  console.log("obj: ", user, typeof user);

  // JSON.stringify(JS객체)
  console.log("json: ", JSON.stringify(user), typeof JSON.stringify(user));

  const menu = '{"name": "김밥", "price": 4000}';

  console.log("menu : ", menu, typeof menu);

  //JSON.parse(문자열) : JSON문자열 -> JS 객체
  console.log(JSON.parse(menu), typeof JSON.parse(menu));

  // 예시
});
