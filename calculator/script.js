const activeNumberUI = document.querySelector('.calculator__result');

const clearBtn = document.querySelector('#clear-btn');
const backBtn = document.querySelector('#back-btn');
const dotBtn = document.querySelector('#dot-btn');

const operandsUI = document.querySelectorAll('.operand');
const operatorsUI = document.querySelectorAll('.operator');

let activeNum;
let activeOp;

operandsUI.forEach((operand) => operand.addEventListener('click', populate));

operatorsUI.forEach((operator) => operator.addEventListener('click', operate));

clearBtn.addEventListener('click', clear);
backBtn.addEventListener('click', goBack);
dotBtn.addEventListener('click', addDot);

function populate() {
  if (activeNumberUI.textContent === '0')
    activeNumberUI.textContent = this.textContent;
  else activeNumberUI.textContent += this.textContent;
}

function operate() {
  // Check for active operands 
  if (activeOp === "+") {
    activeNumberUI.textContent = Number(activeNum + Number(activeNumberUI.textContent)).toFixed(2);
  } else if (activeOp === "-") {
    activeNumberUI.textContent = Number(activeNum - Number(activeNumberUI.textContent)).toFixed(2);
  } else if (activeOp === "X") {
    activeNumberUI.textContent = Number(activeNum * Number(activeNumberUI.textContent)).toFixed(2);
  } else if (activeOp === "/") {

    // Check whether a number is divisible by 0
    if (activeNum === 0 || Number(activeNumberUI.textContent) === 0) {
      alert("Division by 0 is not allowed");
      clear();
    } else activeNumberUI.textContent = Number(activeNum / Number(activeNumberUI.textContent)).toFixed(2);
  }

  // Check if user pressed on "=" button
  if (this.textContent === "=") {
    activeOp = "";
    activeNum = 0;
  } else {
    // if user pressed on "+" or "-" or "*" or "/"
    activeOp = this.textContent;
    activeNum = Number(activeNumberUI.textContent);
    activeNumberUI.textContent = "0";
  }

  // if number is rounded make it as integer (without decimals)
  if (Number(activeNumberUI.textContent) % 1 === 0) {
    activeNumberUI.textContent = Number(activeNumberUI.textContent).toFixed(0);
  }
}

function clear() {
  activeNum = 0;
  activeOp = "";
  activeNumberUI.textContent = "0";
}

function goBack() {
  if (activeNumberUI.textContent.length === 1) {
    activeNumberUI.textContent = "0"
  } else activeNumberUI.textContent = activeNumberUI.textContent.substring(0, activeNumberUI.textContent.length - 1);
}

function addDot() {
  if (!activeNumberUI.textContent.includes(".")) {
    activeNumberUI.textContent  += ".";
  }
}
