//Write functions that use each of the following methods: concat(), slice(), toString(), toPrecision()

// concat() method
function full_sentence() { // Creates a function called full_sentence()
    var part_1 = "I have "; // Creates 4 variables. Each variable assigns a part of the sentence.
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); // Creates a variable called whole_sentence and uses concat() method to concatenate all parts.
    document.getElementById("concatenate").innerHTML= whole_sentence; // Display whole_sentence variable
}

// slice() method
function slice_Method() { // Creates a function called slice_Method()
    var Sentence = "All work and no play makes Johnny a dull boy."; // Creates a "Sentence" variable and gives a text as a value
    var Section = Sentence.slice(27,33); // Creates a variable called "Section" and uses slice() method to get specific parts of the text above 
    document.getElementById("slice").innerHTML=Section; // Display "Section" variable 
}

// toString() method
function string_Method() { // Creates a function called string_Method()
    var X = 182; // Creates a variable "X" and gives "182" as the value
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); // Converts the variable X (182) to string
}

// toPrecision() method
function precision_Method() { // Creates a function called precision_Method()
    var X = 12312.31251231232189; // Creates a variable "X" and gives a value
    document.getElementById("precision").innerHTML=X.toPrecision(10); // Format the variable X to a specific lenght (10)
}