/* 속성관련 메서드 확인 */

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", () => {
  // console.log("btn1 click!");

  const input1 = document.querySelector("#input1");

  // 요소.getAttribute("속성명") : 속성 값 얻어오기
  console.log("input1 의 name 속성 값 : ", input1.getAttribute("name"));

  // 요소.setAttribute("속성명", "속성값") : 속성 추가
  // type=checkbox로 속성 추가
  input1.setAttribute("type", "checkbox");

  // class 속성을 값을 big으로 설정
  input1.setAttribute("class", "big");
  console.log("input1 에 class='big' 추가 : ", input1.getAttribute("class"));
  /* JS 속성 설정 방법 중 class 관련 + CSS의 class 기반 설계를 이용해서
    HTML 요소의 스타일을 변경할 수 있다.
  */
});

btn2.addEventListener("click", () => {
  // 요소.removeAttribute("속성명") : 속성 제거하기
  if (input1.hasAttribute("type")) {
    console.log("type 속성 있음");
    input1.removeAttribute("type");
    input1.removeAttribute("class");
    return;
  }
  console.log("type 속성 없음");
});

const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
  /* tip
    브라우저 콘솔에서 특정 요소가 가지고 있는
    DOM 속성을 직접 확인하고 싶을 경우
    -> 복수 형태로 요소를 얻어오는 
      querySelectorAll(), getElementsByClassName() 등을 이용
  */

  const inputs = document.querySelectorAll("#input2");
  const divs = document.querySelectorAll("#div2");

  console.log(inputs);
  console.log(divs);

  // id 얻어오기
  console.log(inputs[0].getAttribute("id"));
  console.log(inputs[0].id);
  // name 얻어오기
  console.log("#input2의 name :", inputs[0].getAttribute("name"));
  console.log("#input2의 name :", inputs[0].name);
  console.log("#div2의 name :", divs[0].name);

  // value 얻어오기
  console.log("#input2의 value :", inputs[0].getAttribute("value"));
  console.log("#input2의 value :", inputs[0].value);
  console.log("#div2의 value :", divs[0].value);
});

/* classList */
const addBtn = document.querySelector("#addBtn");
const closeBtn = document.querySelector("#closeBtn");
const modBtn = document.querySelector("#modBtn");
const removeBtn = document.querySelector("#removeBtn");
const btnContainer = document.querySelector(".btn-container");

const container3 = document.querySelector(".container-3");
let buttons = document.querySelectorAll(".btn");

modBtn.addEventListener("click", () => {
  if (btnContainer.classList.contains("hidden")) {
    btnContainer.classList.remove("hidden");
    modBtn.classList.add("hidden");
  }
});
modBtn.addEventListener("click", () => {
  container3.className = "container-3";
  container3.classList.add("test");
});

closeBtn.addEventListener("click", () => {
  if (!btnContainer.classList.contains("hidden")) {
    btnContainer.classList.add("hidden");
    modBtn.classList.remove("hidden");
    container3.className = "container-3";
  }
});
let bg = "";
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    /* 억지로 classList 쓰기(토글로 없앨 수 있음)
    if (bg.length > 3) {
      if (container3.classList.contains(bg)) {
        container3.classList.toggle(bg);
        bg = "";
        return;
      }
      container3.classList.replace(bg, (bg = `bg-${btn.innerText}`));
      return;
    }
    bg = `bg-${btn.innerText}`;
    container3.classList.toggle(bg); 
    */
    // 간단하게 짜기
    if (bg == "bg-" + btn.innerText) {
      container3.classList.toggle(bg);
      return;
    }
    container3.className = "container-3";
    bg = `bg-${btn.innerText}`;
    container3.classList.add(`bg-${btn.innerText}`);
  });
});

addBtn.addEventListener("click", () => {
  // bg-green <-> bg-red
  if (addBtn.classList.contains("bg-green")) {
    addBtn.classList.replace("bg-green", "bg-red");
    return;
  }
  addBtn.classList.replace("bg-red", "bg-green");
});
