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
//check for proper syntax
//check for previous answer input
//parse input
//compute
function getAnswer(e){
    let input = operation.textContent;
    let syntaxCheck = /\*{2,}|\+{2,}|\/{2,}|\-{3,}/;
    let lastCharCheck = /\*$|\+$|\/$|\-$/;
    let firstCharCheck = /^\*|^\+|^\/|^\-/;
    let numberCheck = /\d/;
    let opcheck = /\*|\//;
    if(input.match(syntaxCheck) !== null || input.match(lastCharCheck) !== null){
        answer.textContent = "Invalid syntax";
    }
    let parse = [];
    let length = input.length;
    for(let i = 0; i < length; i++ ){
        if(i === 0){
            parse.push(input[0]);
        }
        else if(input[i-1].match(numberCheck) !== null && input[i].match(numberCheck) !== null){
            parse[i-1] += input[i];
        }
        else if(input[i+1] === "-" && input[i] === "-"){
            parse.push("+");
            i++;
        }
        else if(input[i+1] === "+" && input[i] === "-"){
            parse.push("-");
        }
        else{parse.push(input[i])};
    }

    let total = parseInt(answer.textContent)
    let parseLength = parse.length;
    console.log(parse, total)

    if(input.match(opcheck) !== null){

        for(let j = 0; j < parse.length; j++){
            if(parse[j].match(numberCheck) !== null && j === 0 && parse[j+1] !== ("/") && total === 0){
                total = 1;
                console.log("here3")
            }
            else if(parse[j].match(numberCheck) !== null && parse[j+1] === "*"){
                total = parseInt(parse[j]) * parseInt(parse[j+2]);
                j+= 2;
                }
            else if(parse[j].match(numberCheck) !== null && parse[j+1] === "/"){
                console.log(parse[j].match(numberCheck), parse[j])
                total = parseInt(parse[j]) / parseInt(parse[j+2]);
                j+=2;
                console.log("divide here", total)
            }
            console.log(total, parse, j);
        }
    }
    console.log(total)

    for(let k = 0; k < parse.length; k++){
        if(parse[k].match(numberCheck) !== null && k === 0 && total === 0){
            total = parseInt(parse[k]);
        }
        else if(parse[k].match(numberCheck) !== null && (parse[k-1] === "+" || parse[k+1] === "+")){
            total += parseInt(parse[k]);
            k+=2;
            }
        else if(parse[k].match(numberCheck) !== null && (parse[k-1] === "-" || parse[k+1])){
            total -= parseInt(parse[k]);
            k+=2
        }
        console.log(total, k, parse.length)
    }

    answer.textContent = total;

    if(answer.textContent !== "Invalid syntax"){
    operation.textContent = total;
    }
    else if(answer.textcontent === "0"){
        operation.textContent = "";
    }
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
