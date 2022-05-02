let buttonAdd = document.querySelector(".add");
let buttonSubtract = document.querySelector(".subtract");
let buttonClear = document.querySelector(".clear");

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");

buttonAdd.addEventListener("click", function () {
  num1 = document.querySelector(".num1").value;
  num2 = document.querySelector(".num2").value;
  alert(parseInt(num1) + parseInt(num2));
});
buttonSubtract.addEventListener("click", function () {
  num1 = document.querySelector(".num1").value;
  num2 = document.querySelector(".num2").value;
  alert(num1 - num2);
});

buttonClear.addEventListener("click", function () {
  document.querySelector(".num1").value = 0;
  document.querySelector(".num2").value = 0;
});
