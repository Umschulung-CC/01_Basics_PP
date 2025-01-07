/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

*/

/* Getränke-Challenge */

// 

const prompt = require('prompt-sync')({sigint: true});

// Funktion zur Eingabevalidierung für das Alter
function getValidAgeInput() {
    let age;
    while (true) {
        const input = prompt("Bitte geben Sie ein Alter ein (nur Zahlen, 0 oder größer): ");
        age = parseInt(input, 10);
        if (!isNaN(age) && age >= 0) {
            break;
        } else {
            console.log("Ungültige Eingabe. Bitte geben Sie eine gültige Zahl ein.");
        }
    }
    return age;
}

// Funktion zur Eingabevalidierung für den Namen
function getValidNameInput() {
    let name;
    while (true) {
        name = prompt("Bitte geben Sie einen Namen ein: ").trim();
        if (/^[a-zA-ZäöüÄÖÜß\s]+$/.test(name) && name.length > 0) {
            break;
        } else {
            console.log("Ungültige Eingabe. Der Name darf nur Buchstaben enthalten und darf nicht leer sein.");
        }
    }
    return name;
}

// Name und Alter vom Benutzer abfragen
const name = getValidNameInput();
const age = getValidAgeInput();

// Logik für die Getränkeauswahl
let drink;
if (age >= 0 && age <= 5) {
    drink = "Milch";
} else if (age >= 6 && age <= 12) {
    drink = "Saft";
} else if (age >= 13 && age <= 17) {
    drink = "Cola";
} else if (age >= 18) {
    drink = "Wein";
}

// Ergebnis ausgeben
console.log(`${name} trinkt ${drink}.`);
