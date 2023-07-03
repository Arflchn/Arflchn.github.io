//set the basic and useful variables

let result = document.querySelector(".result")
let keys = ""
let keyLenght = 0
// symbolCount will limit the number of symbols used
let symbolCount = 0

// Function that gets the number when pressed the key
function getNum(num){
    if (keyLenght <= 16){
        keys += num
        result.innerHTML = keys
        keyLenght++
        symbolCount = 0
    }
}
// Function that gets the symbol when pressed the key
function getSymbol(sym){
    if(keys != "" && symbolCount < 1){
        keys += sym
        result.innerHTML += sym
        symbolCount++
    }
}
// Function who does the calculate job
function calc(){
    result.innerHTML = eval(keys)
    keyLenght = 0
    symbolCount = 0
}
// Function used to clean the calculator
function clean(){
    keys = String()
    result.innerHTML = String()
    keyLenght = 0
    symbolCount = 0
}