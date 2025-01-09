 /*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  check! | ????
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "Teilen durch 0 nicht möglich!";
const ERROR_STR_CAL = "Ungültiger Operator. Berechnung nicht möglich.";

const prompt = require('prompt-sync')({sigint: true});

// Main Functions
function main() {
    const num1 = getValidatedNum("Num1: ");
    const num2 = getValidatedNum("Num2: ");
    const operator = getop();
    const result = calculator(num1, num2, operator);
    output(result);
}
main();
// Eingabe Überprüfung für Number
function getValidatedNum(promptText) {
    let attempts = 0;
    while (attempts < 2) {      // Zähler für Fehlversuche bis Abbruch des Programms
        const input = prompt(promptText);
        const num = parseFloat(input);
        if (!isNaN(num)) {
            return num;
        } else {
            console.log("Ungültige Eingabe. Bitte eine Zahl eingeben.");
            attempts++;
        }
    }
    console.log("Zu viele ungültige Eingaben. Das Programm wird beendet.");
    process.exit(1); // Abbruch des Programms
}
function getNum1() {
    return getValidatedNum("Num1: "); // Validierung Num1
}
function getNum2() {
    return getValidatedNum("Num2: "); // Validierung Num2
}
// Eingabe Überprüfung Operator
function getop() {
    const validOps = ["+", "-", "*", ":", "/"];
    let attempts = 0;
    while (attempts < 2) {  // Zähler für Fehlversuche bis Abbruch des Programms
        const op = prompt("Mit welchem Operator soll berechnet werden? (+, -, *, :, /): ");
        if (validOps.includes(op)) {
            return op;
        } else {
            console.log("Ungültiger Operator. Bitte einen der folgenden angeben: +, -, *, :, /.");
            attempts++;
        }
    }
    console.log("Zu viele ungültige Eingaben. Das Programm wird beendet.");
    process.exit(1);
}
// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));
function calculator(a,b,op) {
    switch (op) {
        case "+": // addieren
            return add(a,b); // weiterleitung
        case "-": // subtrahieren
            return subtract(a,b); // weiterleitung
        case "*": // multiplizieren
            return multiply(a,b); // weiterleitung     
        case ":": // dividieren
        case "/":
            return divide(a,b); // weiterleitung
        default: 
            return ERROR_STR_CAL
    }    
}
// module: addition a + b |  test:
// output(add(3,2));
// output(add(3,-2));
// output(add(3,0));
function add(a,b) {
    let c = a + b;
    return c;    
}
// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
    return a - b;
}
// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return  a * b;
}
// modul: division a / b | test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
// output(divide(0,0));
function divide(a,b) {

    if (b != 0) { // Ausnahme
         return a / b
    } else {
         return ERROR_STR_DIV;
    }
}
// module: output | test:
// output("hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}