const applyBtn = document.querySelector("#applyBtn");
const box = document.querySelector(".box");

const width = document.querySelector("#width");
const height = document.querySelector("#height");
const fontSize = document.querySelector("#fontSize");
const color = document.querySelector("#color");
const bgColor = document.querySelector("#bgColor");
const text = document.querySelector("#string");

applyBtn.addEventListener("click", () => {
  const fontWeight = document.querySelector("[name=font-weight]:checked");
  const row = document.querySelector("[name=justify-content]:checked");
  const col = document.querySelector("[name=align-items]:checked");

  box.style.width = width.value + "px";
  box.style.height = height.value + "px";
  box.style.fontSize = fontSize.value + "px";
  box.style.fontWeight = fontWeight.value;
  box.style.color = color.value;
  box.style.backgroundColor = bgColor.value;
  box.style.justifyContent = row.value;
  box.style.alignItems = col.value;
  box.innerHTML = text.value;
});
