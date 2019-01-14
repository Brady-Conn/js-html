let first = document.getElementById("first");
console.log(first);
first.textContent = "Bounjure";
let third = document.getElementById("third");
for(let i = 0; i < 10; i++){
    const punctuation = document.createElement("span");
    punctuation.textContent = "!";
    third.parentNode.insertBefore(punctuation, third.nextSibling);
}