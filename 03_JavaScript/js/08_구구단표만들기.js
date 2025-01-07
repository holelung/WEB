function createTable() {
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;

  let thead = document.getElementById("thead");
  let tbody = document.getElementById("tbody");

  let theadResult = "";
  let tbodyResult = "";

  // 기존 표 삭제
  thead.innerHTML = "";
  tbody.innerHTML = "";

  // 시작 또는 종료 입력 x
  if (start == "" || end == "") {
    console.log(start, end);
    alert("시작/종료 단을 입력 해주세요");
    return;
  }

  // 공백 값 확인 이후 Number로 변환
  // value 받을 때 Number로 변환하면 공백을 0으로 변환해서 공백 입력 체크 못함
  start = Number(start);
  end = Number(end);
  // 시작 또는 종료 음수입력
  if (start <= 0 || end <= 0) {
    alert("1이상의 수 를 입력 해주세요");
    return;
  }
  // 시작 단이 종료 단보다 큰경우
  if (start > end) {
    alert("시작 단이 종료단 보다 클 수 없습니다.");
    return;
  }

  // thead 생성
  theadResult = `<tr>`;
  for (let i = start; i <= end; i++) {
    theadResult += `<th>${i}단</th>`;
  }
  theadResult += `</tr>`;
  // tbody 생성
  for (let i = 1; i <= 9; i++) {
    tbodyResult += `<tr>`;
    for (let j = start; j <= end; j++) {
      tbodyResult += `<td>${j} x ${i} = ${j * i}</td>`;
    }
    tbodyResult += `</tr>`;
  }

  thead.innerHTML = theadResult;
  tbody.innerHTML = tbodyResult;
}
