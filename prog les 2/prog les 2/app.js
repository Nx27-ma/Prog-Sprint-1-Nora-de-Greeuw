'use strict';
var read = require('readline-sync');


let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());

if (huidigeTijd.getHours() >= 9 && huidigeTijd.getHours() <= 4) {
    console.log("Ik moet op school zijn");
} else {
    console.log("Geen school");
}

var AskAge = read.question("\nGoedenavond hoe oud bent u?\n");

if (AskAge < 18) {
    read.question("Dan kan je niet naar binnen");
} else {
    var ID_user = read.keyInYN("Alright kan ik je ID zien?");
    if (ID_user == true) {
        read.question("Alr je kunt naar binnen");
    } else {
        read.question("Ik moet hem zien anders mag het niet");
    }
}


var schooldag = read.question("Schooldag?\n");
schooldag.toLowerCase();
if (schooldag == "maandag") {
    read.question("Ik moet naar school");
} else if (schooldag =="dinsdag") {
    read.question("Ik moet naar school");
} else if (schooldag == "woensdag"){
    read.question("Ik moet naar school");
} else if (schooldag == "donderdag") {
    read.question("Ik moet naar school");
} else if (schooldag == "vrijdag"){
    read.question("Ik moet naar school");
} else {
    read.question("nice uitslapen");
}


