/***** Erinnerung: Arrays *******/

let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
// arr =   [
//             ["Ich","bin","Max"],
//             ["Ich","bin","Moritz"]
//         ];
      
// output(arr);
// output(arr[0]);
// output(arr[0][0]+ " " + arr[1][2]);
// output(arr[1][0]);
// output("------------");

// // nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);       
//     }
// }



/**** Objekte 1 Daten/Funktionen *****/

let person = {
                firstName: "Markus",
                familyName: "Clephas",
                birthdate: "20.8.1987",
                salary: [120000, 160000],
                sayhello: function() {
                    return "Hallo";
                },
                sayHello2: function() {
                    return "Hallo, ich bin " + this.firstName;
                    
                }
                    


};


output(person);
output(person.firstName);
output(person.familyName);
output(person.birthdate);
// output(person.salary[1]);
// output(person.sayhello());
// output(person.sayHello2());


const txt = person.sayhello() + ",  ich bin " +  person.firstName +  " bin geboren am " + person.birthdate +
            " und verdiene " + person.salary[1] + " p.a."



            output(txt);

//output("hi");
function output(outputData) {
    console.log(outputData);
}