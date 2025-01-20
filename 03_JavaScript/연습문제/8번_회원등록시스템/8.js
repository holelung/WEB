// 등록 버튼
const addUser = document.querySelector("#addUser");
// 선택 삭제 버튼
const dropUser = document.querySelector("#dropUser");
// 전체 선택
const checkAll = document.querySelector("#checkAll");

/**
 * 회원 객체 생성
 * @param {*} id : id
 * @param {*} name : 이름
 * @param {*} phone : 전화번호
 */
class User {
  static existId = [];
  static existPhone = [];

  constructor(id, name, phone) {
    // 중복검사
    if (User.existId.includes(id)) {
      throw new Error(`입력하신 id : ${id}은/는 이미 존재하는 id입니다`);
    }
    if (User.existPhone.includes(phone)) {
      throw new Error(
        `입력하신 전화번호 : ${phone}은/는 이미 존재하는 전화번호입니다.`
      );
    }
    this.id = id;
    User.existId.push(id);
    this.name = name;
    this.phone = phone;
    User.existPhone.push(phone);
  }

  // 체크박스까지 생성된 li받아서 리턴
  createTable(el) {
    const id = document.createElement("td");
    const name = document.createElement("td");
    const phone = document.createElement("td");
    id.textContent = this.id;
    name.textContent = this.name;
    phone.textContent = this.phone;
    el.append(id, name, phone);
    return el;
  }

  // 중복삭제
  static removeUser(id, phone) {
    const idIndex = User.existId.indexOf(id);
    const phoneIndex = User.existPhone.indexOf(phone);
    if (idIndex > -1) {
      User.existId.splice(idIndex, 1);
    }
    if (phoneIndex > -1) {
      User.existPhone.splice(phoneIndex, 1);
    }
  }
}

// 회원정보를 제외한 테이블요소 생성
function createTr() {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.classList.add("check-item");
  td.append(check);
  tr.append(td);
  return tr;
}

// 등록 버튼 클릭
addUser.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".user-input");
  const tbody = document.querySelector(".tbody");
  if ([...inputs].some((el) => el.value.trim() === "")) {
    return alert("공백 없이 입력해주세요");
  }
  try {
    const user = new User(inputs[0].value, inputs[1].value, inputs[2].value);
    tbody.append(user.createTable(createTr()));
    inputs.forEach((input) => {
      input.value = "";
    });
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
});

// 회원 삭제 기능
dropUser.addEventListener("click", () => {
  const checkedBoxes = document.querySelectorAll(".check-item:checked");
  checkedBoxes.forEach((checkedBox) => {
    const p = checkedBox.parentElement.parentElement;
    const lists = p.querySelectorAll("td:not(:first-child)");
    User.removeUser(lists[0].textContent, lists[2].textContent);
    checkedBox.parentElement.parentElement.remove();
  });
});

checkAll.addEventListener("change", () => {
  const checkBoxes = document.querySelectorAll(".check-item");
  if (checkAll.checked) {
    checkBoxes.forEach((checkBox) => {
      checkBox.checked = true;
    });
    return;
  }
  checkBoxes.forEach((checkBox) => {
    checkBox.checked = false;
  });
});
