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
let input = "";
let parse = [];
let operators = ['+', '-', '*', '/'];

function addToDisplay(e){
    let selection = e.target.textContent;
    if(operation.textContent === '' && operators.includes(selection)){
        operation.textContent = answer.textContent + selection;
        parse.push(answer.textContent);
        parse.push(selection);
        console.log("1")
    }
    else if(operators.includes(parse[parse.length-1]) === true && operators.includes(parse[parse.length-2]) === false && selection === '-'){
        operation.textContent += selection;
        parse.push(selection);
        console.log("2")
    }
    else if(operators.includes(parse[parse.length -1]) && operators.includes(selection)){
        return;
    }
    else if((operators.includes(parse[parse.length-1]) && parse[parse.length-1] !== '-') || operation.textContent === ''){
        operation.textContent += selection;
        parse.push(selection);
        console.log('3')
    }
    else if(operators.includes(selection) === false || parse[parse-1] === '-'){
        operation.textContent += selection;
        parse[parse.length-1] += selection;
        console.log('4')
    }
    else{
        operation.textContent += selection;
        parse.push(selection);
        console.log('5')
    }
    console.log(parse)
}

function clearAll(e){
    answer.textContent = "0";
    operation.textContent = "";
    parse = [];
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

function calculate(e){

}


clear.onclick = clearAll;
