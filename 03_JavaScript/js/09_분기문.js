function check1() {
  const stopNumber = Number(prompt("1~20 사이 멈추고 싶은 숫자를 입력해라"));

  for (let num = 1; num <= 20; num++) {
    console.log(num);
    if (num == stopNumber) {
      break;
    }
  }
}

function check2() {
  let num = 1;
  while (true) {
    console.log(num++);
    if (num == 100) {
      break;
    }
  }
}

function check3() {
  let sum = 0;

  while (true) {
    const value = prompt("숫자 입력(취소 시 종료");

    if (value === null) {
      break;
    }

    sum += Number(value);
  }

  alert(sum);
}

function check4() {
  for (let a = 1; a <= 3; a++) {
    let count = 0;
    if (count == 2) {
      console.log(count);
      break;
    }
    for (let b = 1; b <= 5; b++) {
      console.log();
      break;
    }
  }
}

// 1-20 까지 1씩 증가하는 방복뭄 유이용해 출력
function check5() {
  for (num = 1; num <= 20; num++) {
    if (num % 3 == 0 && num % 5 == 0) continue;
  }
  console.log(num);
}

function check6() {
  /* 123456 5줄
  
  */
  for (let a = 1; a <= 5; a++) {
    let count = "";
    for (let b = 1; b <= 5; b++) {
      if (b == a) {
        continue;
      }
      count += b;
    }
    console.log(count);
  }

  console.log("for 하나로");
  let list = "12345";
  for (let num = 1; num <= 5; num++) {
    console.log(list.replace(num, ""));
  }
}

function startGame() {
  const answer = Math.floor(Math.random() * 200 + 1);
  let input = "";
  let count = 7;

  while (true) {
    input = prompt(`1-200 사이의 난수를 맞춰보세요. 남은 기회(${count}번)`);
    // 취소 버튼 누른경우
    if (input == null) {
      alert(`${8 - count}번째에서 포기, 정답은: ${answer}`);
      break;
    }
    // 아무것도 입력하지 않은 경우
    if (input.length === 0) {
      alert("다시 입력해 주세요");
      continue;
    }
    // 1 - 200 범위에서 벗어난 입력값
    if (Number(input) < 1 || Number(input) > 200) {
      alert("1~200사이 숫자만 입력");
      continue;
    }

    input = Number(input);

    if (input > answer || input < answer) {
      count--;
      if (count == 0) {
        alert(`실패! 정답은:${answer}`);
        break;
      }
      if (input < answer) {
        alert(`UP! 현재 남은 횟수:${count}`);
        continue;
      } else {
        alert(`DOWN! 현재 남은 횟수:${count}`);
        continue;
      }
    }
    if (input == answer) {
      alert(`정답! 정답은:${answer}, 시도횟수(${7 - --count}회)`);
      break;
    }
  }
}
