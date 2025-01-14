const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
  result.innerText = "";
  const checked = document.querySelectorAll(".fruit:checked");
  let sum = 0;
  for (let check of checked) {
    const parent = check.parentElement;
    const fruitName = parent.children[1].innerText;
    const price = parent.children[2].innerText;
    const cnt = parent.children[3].value;
    sum += Number(price) * Number(cnt);
    result.innerText += ` ${fruitName} ${cnt}개 `;
  }
  result.innerText += ` 총합 ${sum}원`;
});
