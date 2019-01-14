const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const add = document.getElementById("+");
const subtract = document.getElementById("-");
const divide = document.getElementById("/");
const multiply = document.getElementById("*");
const equals = document.getElementById("=")
const clear = document.getElementById("clear");
let display = document.getElementById("display");
let operation = document.getElementById("operation")
let answer = document.getElementById("answer")

function addToDisplay(e){
    let selection = e.target;
    operation.textContent += selection.textContent;
}

function clearAll(e){
    answer.textContent = "0";
    operation.textContent = "";
}

function getAnswer(e){
    let math = operation.textContent;
    answer.textContent = eval(math);
}


one.onclick = addToDisplay;
two.onclick = addToDisplay;
three.onclick = addToDisplay;
four.onclick = addToDisplay;
five.onclick = addToDisplay;
six.onclick = addToDisplay;
seven.onclick = addToDisplay;
eight.onclick = addToDisplay;
nine.onclick = addToDisplay;
zero.onclick = addToDisplay;
add.onclick = addToDisplay;
subtract.onclick = addToDisplay;
multiply.onclick = addToDisplay;
divide.onclick = addToDisplay;
clear.onclick = clearAll;
equals.onclick = getAnswer;
