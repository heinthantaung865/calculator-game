let random;
function makeRandomNum() {
  random = Math.floor(Math.random() * 91) + 10;
  document.getElementsByClassName("randomNum")[0].innerHTML = random + "";
}

let nth = 0;
let sum = 0;
let isFinished = false;

window.addEventListener("keypress", function (e) {
  if (!isFinished) {
    changeBackBackgroundColor();
    let reg = /[1-9]/;
    if (reg.test(e.key)) {
      if (nth == 0) {
        document.querySelector(".solution span:nth-child(1)").innerHTML =
          e.key + "";
      } else {
        document.querySelector(".solution span:nth-child(1)").innerHTML +=
          "+" + e.key;
      }

      document.getElementsByClassName("num")[e.key - 1].style.background =
        "teal";
      document.getElementsByClassName("num")[e.key - 1].style.color = "white";

      sum += Number(e.key);
      document.querySelector(".solution span:nth-child(2)").innerHTML =
        sum + "";

      nth = 1;
      checkWinOrLose();
    }
  }
});

function handleClick(element) {
  if (!isFinished) {
    changeBackBackgroundColor();
    const clickedNum = Number(element.innerText);

    if (nth === 0) {
      document.querySelector(".solution span:nth-child(1)").innerHTML =
        clickedNum + "";
    } else {
      document.querySelector(".solution span:nth-child(1)").innerHTML +=
        "+" + clickedNum;
    }

    element.style.background = "teal";
    element.style.color = "white";

    sum += clickedNum;
    document.querySelector(".solution span:nth-child(2)").innerHTML = sum + "";

    nth = 1;
    checkWinOrLose();
  }
}

function checkWinOrLose() {
  if (sum == random) {
    document.getElementsByClassName("loseOrWin")[0].innerHTML = "You've won!";
    document.getElementsByClassName("playAgain")[0].style.display = "block";
    isFinished = true;
  } else if (sum > random) {
    document.getElementsByClassName("loseOrWin")[0].innerHTML = "Game Over";
    document.getElementsByClassName("playAgain")[0].style.display = "block";
    isFinished = true;
  }
}

function playAgain() {
  if (isFinished) {
    location.reload();
  }
}

function changeBackBackgroundColor() {
  let nums = document.getElementsByClassName("num");
  for (let index = 0; index < nums.length; index++) {
    nums[index].style.background = "white";
    nums[index].style.color = "black";
  }
}
