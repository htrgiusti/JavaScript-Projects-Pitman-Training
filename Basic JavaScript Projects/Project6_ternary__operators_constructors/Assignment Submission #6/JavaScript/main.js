// Write a function using HTML and JavaScript that utilizes a ternary operation using input from the browser.

function age_Function() { // Creates a function
    var Age, can_Vote; // Creates the objects "Age" and "can_Vote"
    Age = document.getElementById("Age").value; // Gives "Age" the HTML element <p> ID "Age" and its value
    can_Vote = (Age<18)? "You are not old enough to vote.":"You can vote!"; // Gives "can_Vote" a Ternary Operator (A condition where if the "Age" value is less than 18 it will display "You are not old enough to vote.")
    document.getElementById("age_Result").innerHTML=can_Vote; // Display "can_Vote" variable within the <p> element "age_Result"
}

// Write a constructor function that uses the “new” and “this” keywords.
// Create a function to display the results of the constructor function within an HTML element

function Vehicle(Make, Model, Year, Color) { // Creates a "Vehicle" constructor 
    this.Vehicle_Make = Make; // The keyword "this" refers to the object created using the Vehicle constructor.
    this.Vehicle_Model = Model; 
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // The keyword "new" creates a new object from the constructor.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a "+ Erik.Vehicle_Color+ "-colored "+ Erik.Vehicle_Model+ " Manufactured in "+ Erik.Vehicle_Year;
}

// Write a nested function.

function count_Function() { // Creates "count_Function()" function
    document.getElementById("Nested_Function").innerHTML=Count(); 
        function Count() { // Creates a function inside "count_Function()" 
            var Starting_point = 1; // Gives the object "Starting_point" the value 1
            function Plus_one() {Starting_point += 1;} // Creates another function inside "Count()"
            Plus_one();
            return Starting_point;
        }
}


