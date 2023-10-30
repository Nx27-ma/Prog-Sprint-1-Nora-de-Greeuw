'use strict';
var read = require('readline-sync');


kittyGame();    
function kittyGame() {
    var PlayerAlive = true;
    var explodeKittyMeter = 0;
    var randomWinMeter = 0;
    var explodeKittyCeiling = Math.floor(Math.random() * 10) + 5;
    var randomWin = Math.floor(Math.random() * 10) + 5;

    console.log("U find a kitty???\n");

    while (PlayerAlive == true) {

        var petkitty = read.keyInYN("Pet it?");

        if (petkitty == true) {
            console.log("U pet the kitty");
            explodeKittyMeter++;
            console.log("It purrs pretty loud");
        } else if (petkitty == false) {
            console.log("U leave the kitty be");
            randomWinMeter++;
        } else {
            console.log("Dunno hoe je hier ben maar je bent hier");
        }

        if (explodeKittyMeter == explodeKittyCeiling) {
            console.log("Maybe a little too loud cuz now you can't hear anymore. \nGame over");
            PlayerAlive = false;
        }

        if (randomWin == randomWinMeter) {
            console.log("Good you won but at what cost? The kitty is pretty sad and lonenly.");
            PlayerAlive = false;
        }
    }
}
