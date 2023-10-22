/*Name : Mustafa Ahmed 
Program : Simple Calculator in JavaScript

Note : This program run in Chrome Browser Console and donot run in IDE due to node js environment does not support prompt. Therefore you run this program in Browser Console*/

// ==================================================================================

const number1 = Number.parseFloat(prompt("Enter the first Number: "));
const number2 = Number.parseFloat(prompt("Enter the second number: "))
const number3 = Number.parseInt(prompt(`
1. "Addition"
2. "Subtraction"
3. "Multiplication"
4. "Divide"

Enter the operation (1-4): `))

if (number3 === 1){
  console.log(number1+number2);
}
else if (number3 === 2){
  console.log(number1-number2);
}
else if (number3 === 3){
  console.log(number1*number2);
}
else if (number3 === 4){
  console.log(number1/number2);
}
else{
  console.log("Invalid Operator......");
}