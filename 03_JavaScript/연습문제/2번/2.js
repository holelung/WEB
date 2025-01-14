const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result");
const resetBtn = document.querySelector("#reset");

for (number of numbers) {
  number.addEventListener("click", (e) => {
    if (result.textContent.length >= 10) {
      alert("10회 까지만 입력 할 수 있습니다.");
      return;
    }

    result.textContent += e.target.textContent;
  });
}

resetBtn.addEventListener("click", () => {
  result.textContent = "";
});
