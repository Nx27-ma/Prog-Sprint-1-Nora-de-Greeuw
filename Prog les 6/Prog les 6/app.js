'use strict';
var read = require('readline-sync'); 

/*OpdracchtA();*/
/*OpdrachtB();*/
/*OpdrachtC();*/
/*OpdrachtD();*/
function OpdracchtA() {
    //split the word in chars store die in array
    let Woord = read.question("Woord dat gemockt moet worden:").toLowerCase();
  //  let j = 0;
    for (let i = 0; i < Woord.length; i++) {
       // j = j + 2;

        if (i % 2 == 0) {
            Woord = Woord.replace(Woord[i], Woord[i].toUpperCase());
        }
        
    }
    console.log(Woord);
}




function OpdrachtB() {
    let array = [true, "woord", 23, 324, false];
    console.log(array.length);  //1
    array.pop();
    console.log(array);         //2
    array.push(":)");
    console.log(array);         //3
    array.shift();
    console.log(array);         //4
    array.unshift(" ");
    console.log(array);         //5
    console.log(array.join(" # ")); //6
    delete array[0];
    console.log(array);         //7
    let array2 = [324, 543, 765, true];
    let theArray = array.concat(array2);
    console.log(theArray);                  //8
    let FlatArr = [[1, 2], [3, 4], [5, 6]];
    let FlatterArr = FlatArr.flat();
    console.log(FlatterArr);                //9

    array.slice(false);
    console.log(array);                     //10
    array.splice(2, 0, false, true);
    console.log(array);                     //11
}
function OpdrachtC() {
    let stuff = ["c", 34523, 4642565, "hi", true, false, "gm", 453, 567, "f"],
        stringStuff = [],
        boolStuff = [],
        intStuff = [];
    while (stuff.length > 0) {
        if (typeof stuff[0] == "number") {
            intStuff.push(stuff[0]);
            console.log(intStuff);
            stuff.shift();
        } else if (typeof stuff[0] == "boolean") {
            boolStuff.push(stuff[0]);
            console.log(boolStuff);
            stuff.shift();
        } else if (typeof stuff[0] == "string") {
            stringStuff.push(stuff[0]);
            console.log(stringStuff);
            stuff.shift();
        } else {
            console.log("Yo this dont work")
        }
    }
    console.clear();
    console.log("\nINT:", intStuff,"\nBOOL:", boolStuff,"\nSTRING:" ,stringStuff);
}

function OpdrachtD() {
    let BoodSchappenLijst = true,
        array = [];
        console.log("Jouw lijstje is nog leeg! \nLaten we er een aanmaken:")
    while (BoodSchappenLijst == true) {
        let UserInput = read.question("Wat wil je doen? Iets uit de lijst halen(D) of toevoegen(A)?\nJe kunt ook altijd het lijstje afsluiten door op \"K\" te drukken \n");
        console.clear();
        UserInput.toLowerCase();
        if (UserInput == "a") {
            let Pushing = read.question("Oke wat wil je toevoegen?\n");
            array.push(Pushing);
            console.clear();
            console.log("Ik heb nu dan", array);
        } else if (UserInput == "d") {
            let Poppin = read.question("Oke wat moet er weg? \n")
            array.splice(Poppin);
            console.clear();
            console.log("Er is nu nog", array, "over");
        } else if (UserInput == "k") {
            BoodSchappenLijst = false;
        } else {
            console.log("Nee deze knop doet niets");
        }


    }
}