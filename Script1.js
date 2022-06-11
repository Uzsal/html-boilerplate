// JavaScript source code
function insert(num) {
    document.form.textview.value += num

}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp)
    }
}

function clear( ) {
    document.form.textview.value = "";
}





//const operator = prompt('Enter operator ( either +, -, * or / ): ');

//// take the operand input
//const number1 = parseFloat(prompt('Enter first number: '));
//const number2 = parseFloat(prompt('Enter second number: '));

//let result;

//// using if...else if... else
//if (operator == '+') {
//    result = number1 + number2;
//}
//else if (operator == '-') {
//    result = number1 - number2;
//}
//else if (operator == '*') {
//    result = number1 * number2;
//}
//else {
//    result = number1 / number2;
//}

//// display the result
//console.log(`${number1} ${operator} ${number2} = ${result}`);










//const buttons = document.querySelectorAll("button");

//// select the <input type=”text” class=”display” disabled> element

//const display = document.querySelector(".disp");

//buttons.forEach(function (button) {

//    button.addEventListener("click", calculate);

//});

//function calculate(event) {

//    const clickedButtonValue = event.target.value;

//    if (clickedButtonValue === "=") {

//        // check if the display is not empty then only do the calculation

//        if (display.value !== "") {
//            display.value = eval(display.value);
//        }

//    } else if (clickedButtonValue === "C") {

//        // clear everything on display

//        display.value = "";

//    } else {

//        // otherwise concatenate it to the display

//        display.value += clickedButtonValue;
//    }
//}