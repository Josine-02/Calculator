var question = []
var display = document.querySelector(".display")

function displayText(input) {
    question.push(input)
    display.textContent = question.join("")
    return display.textContent
}

function clearDisplay(){
    question =[]
    display.textContent = ""
    return display.textContent
}

function operate(operator, a, b){
    switch (operator) {
        case "+":
            {return add(a, b)}
        case "-":
            {return subtract(a, b)}
        case "x":
            {return multiply(a, b)}
        case "/":
            {return divide(a, b)}   }   }

function add(a,b){return a+b}

function subtract(a,b){return a-b}

function multiply(a,b){return a*b}

function divide(a,b){return a/b}

function compute(){
    var number1 = Number(question[0])
    var operator = question[1]
    var number2 = Number(question[2])

    let result = operate(operator, number1, number2)

    question = []
    display.textContent = result
    return display.textContent
}

const equalsBtn = document.querySelector(".equals")
equalsBtn.textContent = "="
equalsBtn.onclick = () => compute()

const clearBtn = document.querySelector(".clear")
clearBtn.textContent="CLR"
clearBtn.onclick = () => clearDisplay()

const addBtn = document.querySelector(".add")
addBtn.textContent = "+"
addBtn.onclick = () => displayText("+")

const subtractBtn = document.querySelector(".subtract")
subtractBtn.textContent="-"
subtractBtn.onclick = () => displayText("-")

const multiplyBtn = document.querySelector(".multiply")
multiplyBtn.textContent="x"
multiplyBtn.onclick = () => displayText("x")

const divideBtn = document.querySelector(".divide")
divideBtn.textContent="/"
divideBtn.onclick = () => displayText("/")


const oneBtn = document.querySelector(".one")
oneBtn.textContent = "1"
oneBtn.onclick= () => displayText("1")

const twoBtn = document.querySelector(".two")
twoBtn.textContent="2"
twoBtn.onclick= () => displayText("2")

const threeBtn = document.querySelector(".three")
threeBtn.textContent="3"
threeBtn.onclick= () => displayText("3")

const fourBtn= document.querySelector(".four")
fourBtn.textContent="4"
fourBtn.onclick= () => displayText("4")

const fiveBtn= document.querySelector(".five")
fiveBtn.textContent="5"
fiveBtn.onclick= () => displayText("5")

const sixBtn= document.querySelector(".six")
sixBtn.textContent="6"
sixBtn.onclick= () => displayText("6")

const sevenBtn=document.querySelector(".seven")
sevenBtn.textContent="7"
sevenBtn.onclick= () => displayText("7")

const eightBtn=document.querySelector(".eight")
eightBtn.textContent="8"
eightBtn.onclick= () => displayText("8")

const nineBtn=document.querySelector(".nine")
nineBtn.textContent="9"
nineBtn.onclick= () => displayText("9")

const zeroBtn=document.querySelector(".zero")
zeroBtn.textContent="0"
zeroBtn.onclick= () => displayText("0")    