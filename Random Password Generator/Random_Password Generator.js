/*Name : Mustafa Ahmed 
Program : Random Password Generator in JavaScript

Note : This program run in Chrome Browser Console and donot run in IDE due to node js environment does not support prompt. Therefore you run this program in Browser Console*/

// ==================================================================================

console.log("----------------------------------------");
console.log("|Welcome to 'Random Password Generator'| ");
console.log("----------------------------------------");

while (true) {
    let complexity = prompt("Enter the complexity level (low/medium/high): ");
    let characters;

    if (complexity === 'low') {
        characters = "abcdefghijklmnopqrstuvwxyz0123456789&*()_";
    } else if (complexity === 'medium') {
        characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^";
    } else {
        characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:<>,.?/~";
    }

    let length = parseInt(prompt("Enter the length of required password: "));
    let count = parseInt(prompt("Enter the number of required passwords: "));

    for (let i = 0; i < count; i++) {
        let password = "";
        for (let j = 0; j < length; j++) {
            let character = characters[Math.floor(Math.random() * characters.length)];
            password = password + character;
        }
        console.log("The random generated password is:", password);
    }

    let again = prompt("Do you want to generate more passwords.....? (y/n) ");
    if (again.toLowerCase() !== "y") {
        break;
    }
}

console.log("----------------------------------");
console.log("|Thanks for generating passwords!|");
console.log("----------------------------------");
