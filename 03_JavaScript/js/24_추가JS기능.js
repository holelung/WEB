const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  const obj = {
    menu: "제육볶음",
    price: 8000,
    option: {
      spicy: ["기본", "안맵게", "아주맵게"],
      rice: ["기본", "적게", "많이"],
    },
  };

  //  for in 구문
  for (let key in obj) {
    // console.log(key); // 객체의 key 출력
    // 객체의 모든 값 출력하기
    console.log(`obj["${key}"] : ${obj[key]}`);

    if (key === "option") {
      for (let key2 in obj[key]) {
        console.log(key2, obj[key][key2]);
      }
    }
  }
  // JS객체의 key는 모두 string 이다.
  // console.log(obj["menu"]);
  // console.log(obj.menu);
});

/* 구조분해할당 확인 */
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  // 배열
  const fruits = ["apple", "banana", "orange"];

  // const first = fruits[0];
  // const second = fruits[1];
  // const third = fruits[2];

  // 위의 변수 선언/대입 구문을 구조 분해 할당으로 변경
  const [first, second, third] = fruits;

  console.log(fruits);
  console.log(first, second, third);

  // 객체
  const person = { name: "홍길동", age: 25, height: 180 };

  // const name = person.name;
  // const age = person.age;
  // const height = person.height;

  // 구조 분해 할당
  const { name, age, height } = person;
  console.log(person);
  console.log(name, age, height);
});

// 전개 연산자
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

btn3.addEventListener("click", () => {
  const arr = [10, 20, 30];
  const copy1 = arr;

  console.log("arr: ", arr);
  console.log("copy1: ", copy1);

  copy1[0] = 999;

  console.log("arr: ", arr);
  console.log("copy1: ", copy1);
  // 얕은 복사 (Shallow Copy)
  // : 변수에 저장된 주소를 복사하여 여러 변수가 하나의 객체를 참조하는 것.
  /* ----------------------------------- */
  // 깊은 복사 (Depp Copy)
  // : 객체의 모양과 저장된 값을 그대로 복사 == 복제

  const copy2 = [...arr]; // [999, 20, 30]
  // -> arr이 참조하는 값을 얻어와 새로운 배열 생성
  console.log("copy2 : ", copy2);
  copy2[1] = 1234;

  console.log("copy2[1] = 1234");

  console.log("arr : ", arr);
  console.log("copy2 : ", copy2);

  // 배열 결합 확인

  const std1 = ["홍길동", "둘리", "또치"];
  const std2 = ["짱구", "유리", "맹구"];
  const std3 = [std1, std2];
  const std4 = [...std1, ...std2];

  console.log("std3=[std1,std2] : ", std3);
  console.log("std4=[...std1,...std2] : ", std4);

  // 배열 요소 추가 확인
  const std5 = [...std4, "철수", "희동이"];
  console.log("std5 : ", std5);
});

btn4.addEventListener("click", () => {
  // 객체 복사
  const obj = {
    name: "홍길동",
    age: 24,
  };
  const objCopy = obj;

  console.log("obj : ", obj);
  console.log("objCopy : ", objCopy);

  objCopy.name = "김명섭";

  console.log("-------얕은 복사후 ObjCopy.name 변경-------------");
  console.log("obj : ", obj);
  console.log("objCopy : ", objCopy);

  const objCopy2 = { ...obj };
  objCopy2.name = "가나다라마바사";
  console.log("-----------깊은 복사 사용후 objCopy2.name 변경-----------");
  console.log("obj : ", obj);
  console.log("objCopy2 : ", objCopy2);

  // 객체 병합
  console.log("-------------객체 병합--------------");
  // 서로다른 객체
  const user1 = {
    id: "user1",
    pw: "ppp123",
  };
  const user2 = {
    name: "유저1",
    age: 32,
  };

  const userTable1 = { user1, user2 };
  const userTable2 = { ...user1, ...user2 };
  console.log("userTable1 = {user1,user2} : ", userTable1);
  console.log("userTable2 = {...user1,...user2}", userTable2);

  // 속성 덮어쓰기
  const obj5 = { ...userTable2, name: "김구라" };
  console.log(obj5);
});
