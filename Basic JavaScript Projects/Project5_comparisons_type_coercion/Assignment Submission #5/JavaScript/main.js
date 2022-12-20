// Using the document.write() method and typeof operator to display the data type of a variable.

document.write(typeof "String"); // Output String
document.write(typeof 3); // Output Number

// Using an expression combining a string and a number.

document.write("10"+0); // Output "100"

// Using (==) operator 

document.write(9==9); // Output True
document.write(1==2); // Output False

// Using (===) operator

A = 10;
B = 10; 
document.write(A===B); // Output True

C = 30;
D = "30";
document.write(C===D); // Output False because the data types are not the same.

// Using (> and <) operators

document.write(2>1); // Output True because 2 is greater than 1.
document.write(1>2); // Output False because 1 is not greater than 2.

// Using AND (&&) operator

document.write(10>9 && 9>8); // Output True because both are true.
document.write(10>9 && 9<8); // Output False because 8 is not greater than 9.

// Using OR (||) operator

document.write(1>2 || 5>4); // Output True because one of them is true.
document.write(1>2 || 5>6); // Output False because both are false.

//Using NOT (!) operator

function not_Function() {
    document.getElementById("Not").innerHTML=!(10>20); // Output is True because 10>20 is false.
}




