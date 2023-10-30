'use strict';
var read = require('readline-sync');

function shake(woordDatGeschudtMoetWorden) {
    const characters = woordDatGeschudtMoetWorden.split('');
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    const geschudWoord = characters.join('');
    return geschudWoord;

}

console.log(shake("Nora"), shake("de"), shake("Greeuw")); //shakes worden niet opgeslagen

read.question();

var KubusInhoud = berekenInhoud(2, 5, 7);

var x = read.questionInt("X= ");
var y = read.questionInt("Y= ");
var z = read.questionInt("Z= ");

console.log(berekenInhoud(x, y, z));

function berekenInhoud(x, y, z) {
    var kubus = x * y * z;
    return kubus;
}

var r = read.questionInt("R= ");
var y = read.questionInt("Y= ");
var r = r * r;
read.question(cylinderInhoud(r, y));
function cylinderInhoud(r, y) {
    var cylinderInhoud = r * y * Math.PI;
    return cylinderInhoud;
}

var x = read.questionInt("X= ");
var y = read.questionInt("Y= ");
var x = x * x;
var y = y * y;

read.question(x, y);
function pythagoras(x, y) {
    pythagoras = Math.sqrt(y * x);
    return pythagoras;
}

var num1 = read.questionInt("var num1 = ");
var num2 = read.questionInt("var num2 = ");
var num3 = read.questionInt("var num3 = ");
var num4 = read.questionInt("var num4 = ");
var num5 = read.questionInt("var num5 = ");
var num6 = read.questionInt("var num6 = ");
    

read.question(gemiddeldeVan7(num1, num2, num3, num4, num5, num6));
function gemiddeldeVan7(num1, num2, num3, num4, num5, num6) {

    var nummers6 = num1 + num2 + num3 + num4 + num5 + num6 + 7;
    var gemiddelde = nummers6 / 7;
    return gemiddelde;
}

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();

console.log(month);

function Totaal(year, month) {
    var Year_old = now.getFullYear() - year;
    var Monthold = now.getMonth() - (month + 1);
    var YearsOld = Year_old + " jaar, " + Monthold + " maanden oud";
    return YearsOld;
}

year = read.questionInt("jaar: ");
month = read.questionInt("maand: ");
console.log(Totaal(year, month));

