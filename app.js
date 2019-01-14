let first = document.getElementById("first");
console.log(first);
first.textContent = "Bounjure";
let third = document.getElementById("third");
function count(){
    const punctuation = document.createElement("span");
    punctuation.textContent = "!";
    third.parentNode.insertBefore(punctuation, third.nextSibling);    
}
first.onclick = count;