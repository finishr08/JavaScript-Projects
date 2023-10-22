/*Name : Mustafa Ahmed 
Program : Queue in JavaScript

Note : This program run in Chrome Browser Console and donot run in IDE due to node js environment does not support prompt. Therefore you run this program in Browser Console*/

// ==================================================================================

let queue = [];

while (true) {
    console.log("==========Queue Program==========");
    let choice = parseInt(prompt(`
1. Push Element
2. Pop First Element
3. First Element
4. Last Element
5. Display Elements
6. Exit
`));

    if (choice === 1) {
        let element = prompt("Enter the Push Element: ");
        queue.push(element);
        console.log("==================");
        console.log(queue);
    } else if (choice === 2) {
        if (queue.length === 0) {
            console.log("==================");
            console.log("Empty Queue");
        } else {
            console.log("==================");
            console.log("Given queue: ", queue);
            queue.shift();
            console.log("New queue: ", queue);
        }
    } else if (choice === 3) {
        if (queue.length === 0) {
            console.log("==================");
            console.log("Empty Queue");
        } else {
            console.log("==================");
            console.log("First Queue Value: ", queue[0]);
        }
    } else if (choice === 4) {
        console.log("==================");
        console.log("Last Queue Value: ", queue[queue.length - 1]);
    } else if (choice === 5) {
        console.log("==================");
        console.log("Display Queue: ", queue);
    } else if (choice === 6) {
        console.log("==================");
        console.log("Exiting Queue Program");
        break;
    } else {
        console.log("Invalid choice. Please enter a valid option.");
    }
}
