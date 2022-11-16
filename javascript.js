let previousCalc = document.querySelector("#previousCalc")
let currentCalc = document.querySelector("#currentCalc")

let clear = document.querySelector("#clear")
let allClear = document.querySelector("#allClear")
let numbers = document.querySelectorAll(".number")
let divide = document.querySelector("#divide")
let multiply = document.querySelector("#multiply")
let subtract = document.querySelector("#subtract")
let add = document.querySelector("#addition")
let equals = document.querySelector("#equals")
let decimal = document.querySelector("#dot")
let operators = document.querySelectorAll(".operator")

let operator = '';
let previousValue = '';
let currentValue = '';

numbers.forEach((number) => number.addEventListener("click", e => { // event listener for keypad click
  handleNumber(e.target.textContent) // calls handleNumber function & feeds it keypad number (e = click, target = button.number, textContent = num)
  currentCalc.textContent = currentValue; // sets screen equal to current value
}))

operators.forEach((op) => op.addEventListener("click", e => { // event listener for keypad click
  handleOperator(e.target.textContent) // calls handleOperator function & feeds it operator
  previousCalc.textContent = previousValue + ' ' + operator; // calls 
  currentCalc.textContent = currentValue;
}))

clear.addEventListener("click", () => clearCurrent())
allClear.addEventListener("click", () => clearAll())

function clearCurrent() {
  currentValue = '';
  currentCalc.textContent = currentValue;
}

function clearAll() {
  previousValue = '';
  currentValue = '';
  operator = '';
  previousCalc.textContent = currentValue;
  currentCalc.textContent = currentValue;
}

function handleNumber(num) {
  if(currentValue.length < 12) { 
    currentValue += num; // appends number to end currentValue
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

equals.addEventListener("click", function(){
  calculate()
})

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } 
  else if (operator === "-") {
    previousValue -= currentValue;
  } 
  else if (operator === "x") {
    previousValue *= currentValue;
  } 
  else if (operator === "÷") {
    previousValue /= currentValue;
  }
  previousValue = roundNumber(previousValue)
  console.log(previousValue);
}

function roundNumber(num){
  return Math.round(num * 1000) / 1000;
}