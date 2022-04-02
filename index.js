const equation = document.querySelector("#calc_display_equation");
const result = document.querySelector("#calc_display_result");
const btnNumbers = document.querySelectorAll(".btn_number");
const cleanBotton = document.querySelector(".calc_keyboard_btn");
const btnOperations = document.querySelectorAll(".btn_button");
const btnEqual = document.querySelector(".btn_Equal");

btnNumbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    equation.textContent += btn.textContent;
  });
});

cleanBotton.onclick = () => (
  (equation.textContent = 0), (result.textContent = 0)
);

btnOperations.forEach((btn) => {
  btn.addEventListener("click", () => {
    equation.textContent += btn.textContent;
  });
});

btnEqual.onclick = () => (result.textContent = eval(equation.textContent));
