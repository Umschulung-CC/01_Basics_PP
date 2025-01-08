/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();

// Funktionsrumpf | callee
// Funktionsdeklaration
function test ()
{
    console.log("Hallo, Markus du Progammier Noob!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeName(); //call

function ausgabeName() {
    // interne Variable | What happen in Vegas ...
    let firstName = "Markus";
    console.log("Hallo, " + firstName + "!");
}
// console.log(firstName); // Fehler : scope!


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeName2("Markus") // Argument --> Daten für Parameter
// ausgabeName2("Manuel")
// ausgabeName2("Leon")
// ausgabeName2("Alexander")

function ausgabeName2(firstName) { //Parameter
    console.log("Hallo, " + firstName + "!");    
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNameParams("Markus","Clephas");

// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNameParams(prompt("Vorname? :"),prompt("Name? :")); // Piping


// function ausgabeNameParams(firstName, secondName) {
//     console.log("Hallo, " + firstName + " " + secondName + "!");
// }

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNameSRP("Markus","Clephas"); // Argument zur Text ausgabe

// function ausgabeNameSRP(firstName, secondName) {
    
    // 1. Funktionalität: string composing
    // const GAP = " ";
    // let outputStr ="Hallo,"+ GAP + firstName + GAP + secondName + "!"

    // 2. Funktionaltät: string output
    // console.log(outputStr);
// }

/***** Funktion 03b *****/

// 1. Funktionalität: string composing
output(getString("Markus","Clephas"));

function getString(firstName, secondName) {
    const GAP = " ";
    let outputStr = "Hallo,"+ GAP + firstName + GAP + secondName + "!";
    return outputStr // return schickt die Daten an den call ...
    console.log("BauerParty") // return beendet die Funktion
}

// 2. Funktionalität: string output
// output("hi");
// output("8");
// output("true")
function output(outputData) {
    console.log(outputData);
}