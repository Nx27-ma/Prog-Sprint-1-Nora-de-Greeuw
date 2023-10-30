'use strict';
var read = require('readline-sync');

//opdrachtA();
opdrachtB();
//opdrachtC1();
/*opdrachtC2();*/
//opdrachtD();
//opdrachtE();

var fibonacci1 = 0,
    fibonacci2 = 1;

function opdrachtA(fibonacci1, fibonacci2) {
    if (undefined === fibonacci1) {
        fibonacci1 = 0;
    }

    if (undefined === fibonacci2) {
        fibonacci2 = 1;
    }

    while (fibonacci1 < 10000000) {
        console.log(fibonacci1);
        fibonacci1 = fibonacci1 + fibonacci2;
        console.log(fibonacci2);
        fibonacci2 = fibonacci1 + fibonacci2;

    }
}

function opdrachtB() {
    var guessed = false                              //GOTTA SET THIS TO FALSE TO WORK
    var GuessableNumber = Math.floor(Math.random() * 100);

    while (guessed == false) {

        console.log(GuessableNumber);
        var GuessedNumber = read.questionInt("Guess: ");

        if (GuessableNumber > GuessedNumber) {
            console.log("Groter ");
        } else {
            console.log("Kleiner ");
        }

    }
}

function opdrachtC1() {
    for (let i = 1; i <= 50; i++) {
        for (let j = 1; j <= 50; j++) {
            var NeedToPrint = i * j;
            console.log(i, "*", j, "=", NeedToPrint)
        }
    }
}

function opdrachtC2() {                   //honestly cooler way to solve:
    for (let k = 1, i = 1; k < 51; k++) {
        var NeedsToBePrinted = k * i
        console.log(k, "*", i, "=", NeedsToBePrinted);

        if (k == 50 && i++ < 50) {
            k = 0
        }
    }
}

//note to self: ga gwn tf naar bed what the hell

//var ArrayLenght = read.questionInt("Wat moet factorial?: "); 
//console.log(ArrayLenght);
//var Factorial = Array(ArrayLenght);
//console.log(Factorial);
//var j = 1;

//for (let j = 1; j < ArrayLenght; j++) {
//    Factorial[j] = 0;
//    console.log(Factorial);
//}

//for (let i = 1; i < ArrayLenght; i++) {
    
//    j++;
//    Factorial.push(NumbersForFactorial);
//    var NumbersForFactorial = j + 1;
//    console.log(Factorial);

//}
function opdrachtD() {
    var FactorialNumber = read.questionInt("Wat moet factorial?: ");
    var j = FactorialNumber;
    for (let i = 1; i < FactorialNumber; i++) {
        var j = i * j;
        console.log(j);
    }
}

function opdrachtE() {
    var Score = 0;
    var Game = true;
    while (Game == true) {
        var Klikken = read.keyInYN("Wil je klikken?");

        if (Klikken == true) {
            Score++;
            console.log("K je score is:", Score);
        } else {
            Game = false;
        }

    }
}