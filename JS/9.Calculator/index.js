



let firstNumber = +prompt("Enter your first number !")

let operator = prompt(`Select your Option !
1)Add
2)Subtract
3)Multiply
    `)

let secondNumber = +prompt("Enter your Second number !")




if (operator == "1") {
    console.log(firstNumber + secondNumber);
} else if (operator == "2") {
    console.log(firstNumber - secondNumber);
} else if (operator == "3") {
    console.log(firstNumber * secondNumber);
} else {
    console.log("Invalid Operator");
}
















