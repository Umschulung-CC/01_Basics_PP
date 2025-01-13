/*********   Theorie **********/

// push() / pop()
// push --> Daten rein ... (+)
let arr = [];

output(arr);
arr.push("Ich");
output(arr);
arr.push("bin");
output(arr);
arr.push("Max");
output(arr);

// // pop() --> Daten raus ... (-)
output(arr.pop());
output(arr);
output(arr.pop());
output(arr);
output(arr.pop());
output(arr);

// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}
