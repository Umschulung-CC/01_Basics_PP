
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;
const birthYearPeter = 1978;
const birthYearMathias = 1945;
const birhtYearMichael = 1987;

//Berechnung Alter
let date = new Date();
let year = date.getFullYear();
ageJohn = year - birthYearJohn
ageMark = year - birthYearMark
agePeter = year - birthYearPeter
ageMathias = year - birthYearMathias
ageMichael = year - birhtYearMichael

//Ausgabe
console.log("ageJohn:" + ageJohn);
console.log("ageMark" + ageMark);
console.log("agePeter " + agePeter);
console.log("ageMathias " + ageMathias);
console.log("ageMichael " + ageMichael);
console.log("Datum. " + date);