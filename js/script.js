let buttonSound = new Audio("./audio/button.mp3");
let buttonAdd = document.querySelector(".add");
let buttonSubtract = document.querySelector(".subtract");
let buttonDivine = document.querySelector(".divine");
let buttonMylty = document.querySelector(".multy");
let buttonClear = document.querySelector(".clear");

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let result = document.querySelector(".result");

buttonAdd.addEventListener("click", function () {
  result.value = parseInt(num1.value) + parseInt(num2.value);
  buttonSound.play();
});

buttonSubtract.addEventListener("click", function () {
  result.value = num1.value - num2.value;
  buttonSound.play();
});

buttonDivine.addEventListener("click", function () {
  result.value = num1.value / num2.value;
  buttonSound.play();
});

buttonMylty.addEventListener("click", function () {
  result.value = num1.value * num2.value;
  buttonSound.play();
});

buttonClear.addEventListener("click", function () {
  buttonSound.play();
  num1.value = 0;
  num2.value = 0;
  result.value = 0;
});
