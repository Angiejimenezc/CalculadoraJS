//Create variables

const buttonNum = document.getElementsByName("data-number");
const buttonOper = document.getElementsByName("data-oper");
const buttonEqual = document.getElementsByName("data-equal")[0];
const buttonClear = document.getElementsByName("data-clear")[0];
var result = document.getElementById("result");

var currentOper = "";
var previewOper = "";
var oper = undefined;

//Create Events

buttonNum.forEach(function (button) {
  button.addEventListener("click", function () {
    addNum(button.innerText);
  });
});

buttonOper.forEach(function (button) {
  button.addEventListener("click", function () {
    selectOper(button.innerText);
  });
});

buttonEqual.addEventListener("click", function () {
  calculate();
  updateDisplay();
});

buttonClear.addEventListener("click", function () {
  clear();
  updateDisplay();
});

//Funtions

function addNum(num) {
  currentOper = currentOper.toString() + num.toString();
  updateDisplay();
}

function selectOper(op) {
  if (currentOper === "") return;
  if (previewOper !== "") {
    calculate();
  }
  operation = op.toString();
  previewOper = currentOper;
  currentOper = "";
}

function calculate() {
  var calculation;
  //convierto a float
  const preview = parseFloat(previewOper);
  const current = parseFloat(currentOper);

  if (isNaN(preview) || isNaN(current)) return;

  switch (operation) {
    case "+":
      calculation = preview + current;
      break;
    case "-":
      calculation = preview - current;
      break;
    case "x":
      calculation = preview * current;
      break;
    case "/":
      calculation = preview / current;
      break;
    default:
      return;
  }
  currentOper = calculation;
  operation = undefined;
  previewOper = "";
}

function clear() {
  currentOper = "";
  previusOper = "";
  oper = "";
}
function updateDisplay() {
  result.value = currentOper;
}
clear();
