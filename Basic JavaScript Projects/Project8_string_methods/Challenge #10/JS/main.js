// toUpperCase() method
function toUpperCase_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.toUpperCase();
    document.getElementById("paragraph").innerHTML=Section;
}

// search() method
function search_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.search("work");
    document.getElementById("paragraph2").innerHTML=Section;
}
