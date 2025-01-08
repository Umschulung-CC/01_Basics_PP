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

ausgabeName(); //call

function ausgabeName() {
    // interne Variable | What happen in Vegas ...
    let firstName = "Markus";
    console.log("Hallo, " + firstName + "!");
}

// console.log(firstName); // Fehler : scope!