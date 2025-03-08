const title = document.createElement("div")
title.classList.add("title")
title.textContent = "Calculator"
const container= document.querySelector(".container")
container.appendChild(title)

function add(a,b){
    return a+b
}

function substract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}


let a = 5
let b=2

console.log(add(a,b))
console.log(substract(a,b))
console.log(divide(a,b))
console.log(multiply(a,b))