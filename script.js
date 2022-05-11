//Create variables
const buttonNum = document.getElementsByName("data-number");
const buttonOper = document.getElementsByName("data-oper");
const buttonEqual = document.getElementsByName("data-equal")[0];
const buttonClear = document.getElementsByName("data-clear")[0];
let result = document.getElementById("result");
let currentOper;
let previusOper;
let oper = undefined;

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
  updateScreen();
});

buttonClear.addEventListener("click", function () {
  clear();
  updateScreen();
});

//Method

function addNum(num) {
  currentOper = currentOper.t;
  updateScreen();
}

function clear() {
  currentOper = "";
  previusOper = "";
  oper = undefined;
}

function updateScreen() {
  result.value = currentOper;
}
