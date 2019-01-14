
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
};

// get the 3 elements
const first = document.getElementById("first"); 
const second = document.getElementById("second");
const sum = document.getElementById("sum");

// generate the initial state of the elements
first.textContent = getRandomInt(-1000, 1000);
second.textContent = getRandomInt(-1000, 1000);
sum.textContent = "0";


// add event listeners on click for the first two elements
first.onclick = add;
second.onclick = add;


// when one is clicked:
//      parse the integers of the item clicked, and the sum (look into event.target)
//      add the value of the item clicked to the sum
//      set the text of the sum element equal the the new value
//      regenerate the state of the first two numbers


function add(e){
    let selection = e.target;
    let adder = parseInt(selection.textContent)
    let sumCount = parseInt(sum.textContent);
    sumCount += adder;
    sum.textContent = sumCount;
    selection.textContent = getRandomInt(-1000, 1000);
}
