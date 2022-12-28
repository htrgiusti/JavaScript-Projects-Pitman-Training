// Write a function that use a while loop

function Call_Loop() { // Creates a function called Call_Loop().
    var Digit = ""; // Creates an object called Digit and gives the value "".
    var X = 1; // Creates an object called X and gives the value "1".
    while (X<11) { // Creates a While loop (While X(1) is less than 11).
        Digit += "<br>" + X; // Gives digit a break line and X.
        X++ // Adds 1 to X. 1+1=2, then X = 2 and repeats the loop until X = 10.
    }
    document.getElementById("Loop").innerHTML = Digit; // Writes "Digit" in html element P "Loop".
}

// Write a function that use a for loop

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // Creates an object called instruments and gives the value inside the arrays.
var Content = ""; // Creates an object called Content and gives the value "".
var Y; // Creates an object called "Y"  
function for_Loop() { // Creates a function called for_Loop()
    for (Y=0; Y < instruments.length; Y++) { // Creates a for loop. (Gives Y the value "0"; if instruments.lenght is more than Y(0); Gives Y(0) + 1)
        Content += instruments[Y] + "<br>"; // Gives "Content" the value Y and adds a break line.
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; // Writes "Content" in HTML element P "List_of_Instruments".
}

// Write a function that use an array

function array_Function() { // Creates a function called array_Function()
    var seasons = []; // Creates an object called "seasons" and gives an array
    seasons[0] = "winter"; // Creates an array [0] and gives the value "winter".
    seasons[1] = "spring"; // Creates an array [1] and gives the value "spring".
    seasons[2] = "summer"; // Creates an array [2] and gives the value "summer".
    seasons[3] = "autumn"; // Creates an array [3] and gives the value "autumn".
    document.getElementById("Array").innerHTML = "I love " + seasons[0] + " because I enjoy cold weather." // Writes "I love seasons[0](winter) because I enjoy cold weather."
}

// Create an object using the “let” keyword

var X = 100; // Creates an object called X and gives the value "100".
document.write(X); // Prints the variable X (100).
{
    let X = 50; // Creates another X object using "let" and gives the value "50".
    document.write("<br>"+X); // Prints X (50) because it's a let declaration and it's block scoped
}
document.write("<br>"+ X); // Prints again the variable X and it gives 100 because var X is globally scoped.

