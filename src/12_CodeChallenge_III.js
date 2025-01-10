/*** Mini-Challenge  */
// Satzbau + variable Punktuation

/*** Funktion getSentence */
function getSentence(words, type) {
    // Validierung der Eingabe
    if (!Array.isArray(words) || typeof type !== 'string') {
        throw new Error("Ungültige Parameter. Erwartet: Array und String.");
    }

    // Satz aus Array zusammensetzen
    let sentence = words.join(" ");

    // Satzart bestimmen
    switch (type) {
        case "S":
            return sentence + ".";
        case "Q":
            return sentence + "?";
        case "E":
            return sentence + "!";
        default:
            throw new Error("Ungültiger Satztyp. Verwenden Sie 'S', 'Q' oder 'E'.");
    }
}

/*** Funktion output */
function output(result) {
    console.log(result);
}

/*** Programmstart */
function startProgram() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Drücken Sie 'Q', um Fortzufahren. Jede andere Eingabe beendet das Programm.");

    readline.question("Eingabe: ", (input) => {
        if (input.toUpperCase() === "Q") {
            readline.question(getSentence(["Bist", "du", "Markus"], "Q") + " ", (answer1) => {
                if (answer1.toLowerCase().trim() === "ja") {
                    output(getSentence(["Ich", "bin", "Carl"], "S"));
                    readline.question(getSentence([
                        "Ich", "hätt", "gern", "die", "Platt", "von", "dene", 
                        "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"
                    ], "Q") + " ", (answer2) => {
                        if (answer2.toLowerCase().trim() === "ja") {
                            output(getSentence(["YEEEAAARRR"], "E"));
                        } else if (answer2.toLowerCase().trim() === "nein") {
                            output(getSentence(["Okay", "schade", "auf", "Wiedersehen"], "S"));
                        } else {
                            console.log("Ungültige Eingabe. Programm beendet.");
                        }
                        readline.close();
                    });
                } else if (answer1.toLowerCase().trim() === "nein") {
                    output(getSentence(["Okay", "dann", "auf", "Wiedersehen"], "S"));
                    readline.close();
                } else {
                    console.log("Ungültige Eingabe. Programm beendet.");
                    readline.close();
                }
            });
        } else {
            console.log("Programm beendet.");
            readline.close();
        }
    });

    // Fallback: Ressourcen schließen bei Fehlern oder unvorhergesehenem Verhalten
    process.on('exit', () => readline.close());
    process.on('SIGINT', () => readline.close());
    process.on('uncaughtException', () => readline.close());
}

// Programm starten
startProgram();
