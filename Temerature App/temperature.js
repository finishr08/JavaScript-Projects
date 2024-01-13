function temperature(){
    celsius_temperature = Number.parseFloat(prompt("Enter the Temperature in Celsius: "))
    console.log(`Enter the Temperature in Celsius: ${celsius_temperature}°C`);

    // Convert Celsius to Farenhit 

    farenhit_temperature = ((9/5 * celsius_temperature) + 32)
    console.log(`The equivalent temperature in Fahrenheit is: ${farenhit_temperature}°F`);

    // Use Control Statements

    if (farenhit_temperature <= 32) {
        console.log("The temperature is Freezing");
    }
    else if (farenhit_temperature >= 32 && farenhit_temperature <= 50) {
        console.log("The temperature is Cold");
    }
    else if (farenhit_temperature >= 51 && farenhit_temperature <= 70) {
        console.log("The temperature is Moderate");
    }
    else if (farenhit_temperature >= 71 && farenhit_temperature <= 90) {
        console.log("The temperature is Warm");
    }
    else if (farenhit_temperature >90) {
        console.log("The temperature is Hot");
    }
    else {
        console.log("Error");
    }
}

temperature()