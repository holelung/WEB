// 양수 인지 검사
function check1() {
  const in1 = document.getElementById("input1").value;
  const val = Number(in1);
  let result;
  if (val > 0) {
    result = "양수";
  } else if (val == 0) {
    result = "0";
  } else {
    result = "음수";
  }
  alert(`${val}은 ${result}입니다.`);
}

function check2() {
  const rand = Math.floor(Math.random() * 100) + 1;
  if (rand % 2 == 0) {
    return alert(rand + " 는 짝수 입니다.");
  }
  return alert(rand + " 는 홀수 입니다.");
}

function check3() {
  const in2 = document.getElementById("input2").value;
  const val = Number(in2);
  let result;

  if (val > 0) {
    result = "양수";
  } else if (val < 0) {
    result = "음수";
  } else {
    result = "0";
  }
  alert(`${val} 은/는 ${result}입니다.`);
}

function ageCheck() {
  const in1 = document.getElementById("inputAge").value;
  const age = Number(in1);
  let result;
  if (0 < age && age <= 13) {
    result = "어린이";
  } else if (13 < age && age <= 19) {
    result = "청소년";
  } else if (19 < age && age <= 120) {
    result = "성인";
  } else {
    return alert("잘못 입력하셨습니다.");
  }
  return alert(`${age}세 : ${result}입니다.`);
}

// 엔터키를 눌렀을 때도 ageCheck 호출
document.getElementById("inputAge").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    // Enter 키를 확인
    ageCheck();
  }
});

function ageCheck2() {
  const inputAge = document.getElementById("inputAge");
  const age = Number(inputAge.value);
  let result;
  if (age < 0 && age > 120) {
    return alert("잘못 입력하셨습니다.");
  } else if (age >= 20) {
    result = "성인";
  } else if (age >= 14) {
    result = "청소년";
  } else {
    result = "어린이";
  }
  alert(`${age} : ${result}입니다.`);
}
