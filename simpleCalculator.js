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

function addToDisplay(e){
    let selection = e.target;
    operation.textContent += selection.textContent;
}

function clearAll(e){
    answer.textContent = "0";
    operation.textContent = "";
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
    let parse = [];
    input = operation.textContent;
    let syntaxCheck = /\*(?=\d)|\/(?=\d)|\+(?=\d)|\-(?=\d)|\-{2}/;
    let lastCharCheck = /\*$|\+$|\/$|\-$/;
    let firstCharCheck = /^\*|^\+|^\/|^\-/;
    let numberCheck = /\d/;
    let total = 0;
    let operatorCheck = ["+", "-", "/", "*"];
    if(syntaxCheck.test(input) === 0 || input.match(lastCharCheck) !== null){
        answer.textContent = "Invalid syntax";
        return;
    }


    for(let i = 0; i < input.length; i++){
        if(input[i].match(numberCheck) !== null && (i === 0 || operatorCheck.includes(input[i-1]))){
          parse.push(input[i]);
        }
        else if((input[i].match(numberCheck) !== null || input[i] === ".") && parse.length === 1){
            parse[0] += input[i];
        }
        else if(input[i].match(numberCheck) !== null && parse.length === 3){
            parse[2] += input[i];
        }
        else if(input[i].match(numberCheck) !== null && parse.length === 4){
            parse[3] += input[i];
        }
        else{ 
            parse.push(input[i])
        }
    }

    if(parse.length === 4){
        parse[2] = parse[3];
        parse.pop;
        parse[1] = "+";
    }
    
    if(parse[1] === "+"){
        total = parseInt(parse[0]) + parseInt(parse[2]);
    }
    else if(parse[1] === "*"){
        total = parseInt(parse[0]) * parseInt(parse[2]);
    }
    else if(parse[1] === "/"){
        total = parseInt(parse[0]) / parseInt(parse[2])
    }
    else if(parse[1] === "-"){
        total = parseInt(parse[0]) - parseInt(parse[2])
    }
    console.log(total)
    answer.textContent = total;
    console.log(answer.textContent)
    if(answer.textContent === "0"){
        operation.textContent = "";
    }
    else{operation.textContent = total;
    }
}

equals.onclick = calculate;
clear.onclick = clearAll;
