const createBtn = document.querySelector("#btn");
const container = document.querySelector("#container");

const sumBtn = document.querySelector("#sumBtn");
const result = document.querySelector("#result");

createBtn.addEventListener("click", () => {
  const inputNum = Number(document.querySelector("#inputNum").value);
  console.log(inputNum);
  for (let i = 0; i < inputNum; i++) {
    container.innerHTML += `<input type="number" class="input-number">`;
  }
});

sumBtn.addEventListener("click", () => {
  const numbers = document.querySelectorAll(".input-number");
  let sum = 0;

  for (number of numbers) {
    sum += Number(number.value);
  }

  result.textContent = sum;
});
