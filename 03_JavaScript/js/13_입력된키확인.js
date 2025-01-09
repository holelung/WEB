const keys = document.querySelectorAll(".key");

const images = [
  "훈이1.jpg",
  "훈이2.jpg",
  "훈이3.jpg",
  "훈이4.jpg",
  "훈이5.jpg",
];

// key가 눌려있을때 배경 생성
document.addEventListener("keydown", function (e) {
  let index = 0;

  switch (e.key.toLowerCase()) {
    case "q":
      index = 0;
      break;
    case "w":
      index = 1;
      break;
    case "e":
      index = 2;
      break;
    case "r":
      index = 3;
      break;
    default:
      return;
  }

  keys[index].style.backgroundImage = `url("../images/${images[index]}")`;
});
// key를 뗏을 때 배경 제거
document.addEventListener("keyup", function (e) {
  let index = 0;

  switch (e.key.toLowerCase()) {
    case "q":
      index = 0;
      break;
    case "w":
      index = 1;
      break;
    case "e":
      index = 2;
      break;
    case "r":
      index = 3;
      break;
    default:
      return;
  }

  keys[index].style.backgroundImage = "none";
});

// 마우스 따라다니는 이미지
const cursorImage = document.querySelector("#cursorImage");

/* 문서 자체에 마우스가 움직였을 때(mousemove) */
document.addEventListener("mousemove", function (e) {
  // console.log(e.pageX, e.pageY);
  cursorImage.style.left = `${e.pageX + 0}px`;
  cursorImage.style.top = `${e.pageY + 0}px`;
});
