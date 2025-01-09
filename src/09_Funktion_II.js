/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : checken !
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

const ERROR_STR_DIV = "Teilen durch 0 nicht möglich!";
const ERROR_STR_CAL = "Falscher OP du Bauer!";

// module: calculator | tests:
// agreement : "+","-","*",":","/"
output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"#?!"));
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