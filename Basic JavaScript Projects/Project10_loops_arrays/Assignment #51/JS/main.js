var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;
function for_Loop() {
    for (Y=0; Y = instruments.length; Y++) {
        content += instruments[Y];
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}