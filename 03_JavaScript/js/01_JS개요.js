// 외부에 작성된 .js 파일

// console.log() : 개발자 도구 콘솔에 () 내부 내용을 기록(출력)
console.log("01_JS개요.js 연결 완료");

// document : HTML 문서
// querySelector : CSS 선택자를 이용해 요소 선택
// const body : 선택된 요소를 저장해서 JS에서 body라고 부르기로 함
const body = document.querySelector("body");

// 라이트모드
function lightMode() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
}

// 다크모드
function darkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "white";

  /*  js를 이용해서 CSS를 변경하면 inline-style로 적용된다. */
}
