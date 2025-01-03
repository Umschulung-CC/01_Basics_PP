// Zeilenkommtar 
// console.log("Bauer sucht Frau Frohes Neues!");

/**Blockkommentar
 * Heute ist ein guter Tag zum Sterben
 * morgen läuft der Osterhase ohne Ostergras
 * 
 */
/***** Variablen 01 *******/

// console.log("Hi du Assi!");
// console.log(Hi);

/* Deklaration + Wertzuweisung I */

// let firstName; // Deklaration (Definition)
// console.log(firstName); // Ausgabe
// firstName = "Köperklaus" // Wertzuweisung | assignment
// console.log(firstName); // Ausgabe#
// let familyname = "Körperkasper"; // Deklaration + Wertzuweisung
// console.log(" Hi, ich bin " + firstName + " " + familyname + "!");

/*  
    Wertzuweisung II + Datentypen 
    JS ist ein untypisierte Sprache!
*/

// let test; // Deklaration 
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("-------");
// test = "Hodenrodler" // string
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("-------");
// test = 2; // number
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("-------");
// test = true; //boolean
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("-------");

/* Variablen vs. Konstanten in JS */
//Variable
let test;  // Variable : Deklaration
test = "hi"; // Wertzuweisung (Initialisierung)
test = "hello"; // Überschreiben
console.log("Inhalt: " + test); // Ausgabe

// Konstante
const test2 = "Hi Hodenrodler!"
test2 = "Hello!"; // Laufzeitfehler !!
console.log("Inhalt: " + test2); // Ausgabe