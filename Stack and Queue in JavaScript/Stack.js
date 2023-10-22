/*Name : Mustafa Ahmed 
Program : Stack in JavaScript

Note : This program run in Chrome Browser Console and donot run in IDE due to node js environment does not support prompt. Therefore you run this program in Browser Console*/

// ==================================================================================

let stack = [];

while (true) {
    console.log("==========Stack Program==========");
    let choice = parseInt(prompt(`
1. Push Element
2. Pop Element
3. Last Element
4. Display Elements
5. Exit
`));

    if (choice === 1) {
        let element = prompt("Enter the Element to Push: ");
        stack.push(element);
        console.log("==================");
        console.log(stack);
    } 
    else if (choice === 2) {
        if (stack.length === 0) {
            console.log("==================");
            console.log("Empty Stack");
        } 
        else {
            console.log("==================");
            console.log("Popped Element: ", stack.pop());
            console.log("New Stack: ", stack);
        }
    } 
    else if (choice === 3) {
        if (stack.length === 0) {
            console.log("==================");
            console.log("Empty Stack");
        } 
        else {
            console.log("==================");
            console.log("Last Stack Value: ", stack[stack.length - 1]);
        }
    } 
    else if (choice === 4) {
        console.log("==================");
        console.log("Display Stack: ", stack);
    } 
    else if (choice === 5) {
        console.log("==================");
        console.log("Exiting Stack Program");
        break;
    } 
    else {
        console.log("Invalid choice. Please enter a valid option.");
    }
}
