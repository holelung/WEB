// 버튼 불러오기
const modifyBtn = document.querySelector("#modifyBtn");
const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");
const endBtn = document.querySelector("#endBtn");
// 메뉴판 리스트

const menuContainer = document.querySelector(".menu-container");
// 식당명
const resTitle = document.querySelector("#resTitle");
const resTitleInput = document.querySelector("#resTitleInput");

// 메뉴 제목 변경
resTitle.addEventListener("click", () => {
  resTitleInput.classList.remove("title-none");
  resTitle.classList.add("title-none");
  resTitleInput.focus();

  // input태그가 blur(==focus out)일 시 종료
  resTitleInput.addEventListener("blur", () => {
    if (resTitleInput.value !== "") {
      resTitle.innerText = resTitleInput.value;
      resTitleInput.classList.add("title-none");
      resTitle.classList.remove("title-none");
    }
    resTitleInput.classList.add("title-none");
    resTitle.classList.remove("title-none");
  });
  // 엔터키 입력시 종료
  resTitleInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      if (resTitleInput.value !== "") {
        resTitle.innerText = resTitleInput.value;
        resTitleInput.classList.add("title-none");
        resTitle.classList.remove("title-none");
      }
      resTitleInput.classList.add("title-none");
      resTitle.classList.remove("title-none");
    }
  });
});

// 수정 버튼 클릭 => input태그로 교체, 추가/삭제/종료버튼 on
modifyBtn.addEventListener("click", () => {
  modifyBtn.classList.add("button-none");
  endBtn.classList.remove("button-none");
  addBtn.classList.remove("button-none");
  removeBtn.classList.remove("button-none");

  const menuList = document.querySelectorAll(".menu");
  menuList.forEach((menu) => {
    menu.querySelector(":first-child").classList.add("menu-none");
    menu.querySelector(":nth-child(2)").classList.add("menu-none");
    menu.querySelector(":nth-child(3)").classList.remove("menu-none");
    menu.querySelector(":nth-child(4)").classList.remove("menu-none");
    menu.querySelector(":last-child").classList.remove("menu-none");

    // 기존 메뉴값 input에 대입
    menu.querySelector(":nth-child(4)").value =
      menu.querySelector(":first-child").innerText;
    menu.querySelector(":last-child").value = menu
      .querySelector(":nth-child(2)")
      .innerText.replace("원", "");
  });
});

// 종료 버튼 클릭
endBtn.addEventListener("click", () => {
  modifyBtn.classList.remove("button-none");
  endBtn.classList.add("button-none");
  addBtn.classList.add("button-none");
  removeBtn.classList.add("button-none");

  const menuList = document.querySelectorAll(".menu");
  menuList.forEach((menu) => {
    menu.querySelector(":first-child").classList.remove("menu-none");
    menu.querySelector(":nth-child(2)").classList.remove("menu-none");
    menu.querySelector(":nth-child(3)").classList.add("menu-none");
    menu.querySelector(":nth-child(4)").classList.add("menu-none");
    menu.querySelector(":last-child").classList.add("menu-none");

    if (
      menu.querySelector(":nth-child(4)").value == "" ||
      menu.querySelector(":last-child").value == ""
    ) {
      menu.querySelector(":first-child").innerText = "미입력";
      menu.querySelector(":nth-child(2)").innerText = "0원";
      return;
    }
    // input value를 innerText로 대입
    menu.querySelector(":first-child").innerText =
      menu.querySelector(":nth-child(4)").value;

    menu.querySelector(":nth-child(2)").innerText =
      menu.querySelector(":last-child").value + "원";
  });
});

// 추가 버튼
addBtn.addEventListener("click", () => {
  list = document.createElement("li");
  list.className = "menu";

  list.innerHTML += `
        <span class="menu-name menu-none"></span>
        <span class="menu-price menu-none"></span>
        <input type="checkbox" class="menu-check">
        <input type="text" class="menu-input-name">
        <input type="text" class="menu-input-price">`;
  menuContainer.append(list);
});

removeBtn.addEventListener("click", () => {
  console.log("제거 버튼 클릭");
  const checkedList = document.querySelectorAll("input:checked");
  checkedList.forEach((item) => {
    item.parentElement.remove();
  });
});
