/*Name : Mustafa Ahmed 
Program : Fibnacci Series in JavaScript

Note : This program run in Chrome Browser Console and donot run in IDE due to node js environment does not support prompt. Therefore you run this program in Browser Console*/

// ==================================================================================
while (true) {
  let a = prompt("Write 'y' to continue and 'n' to stop.");

  if (a === "n") {
    break;
  }

  if (a === "y") {
    console.log("Program is automated. Just enter some number");
    let n = Number.parseInt(prompt("Enter Number: "));
    let x = 0;
    let y = 1;

    if (n <= 0) {
      console.log("You have entered an invalid number");
    } else {
      while (x <= n) {
        console.log(x);
        let z = x + y;
        x = y;
        y = z;
      }
    }
  }
}
