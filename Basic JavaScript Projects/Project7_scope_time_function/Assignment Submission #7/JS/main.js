// --------------- Assign a local variable and a global variable. ---------------

A = 10; // Assigns a Global variable (outside the function)
function add_Numbers1() { // Creates a function called add_Numbers1()
    document.write(10+A+"<br>");// Creates an addition with variable "A" and gives the result in a paragraph.
}
function add_Numbers2() { // Creates a function called add_Numbers2()
    document.write(50+A+"<br>"); // Creates another addition with variable "A" and gives the result in a paragraph.
}
add_Numbers1() // Executes the function
add_Numbers2() // Executes the function


function add_Numbers3() { // Creates a function called add_Numbers3()
    B = 50; // Creates a local varibale (inside the function)
    document.write(B-10+"<br>"); // Creates a subtraction with variable "B" and gives the result in a paragraph.
}
add_Numbers3() // Executes the function

// --------------- Write a function that includes an if statement. ---------------

function if_Statement() { // Creates a function called if_Statement()
    ex = 1000; // Gives "ex" the value "1000"
    if (ex<5000) // Creates an if statement, if ex is less than 5000
    {
        document.write("5000 is greater than 1000.") // Prints this text if ex<5000
    }
}
if_Statement() // Executes the function

// --------------- Intentionally write a function with an error in it and use the console.log()
//                 method to debug it within the console in the Chrome Dev Tools. ---------------

function add_Numbers4() { // Creates a function called add_Numbers4()
    Z = 100; // Creates a local variable (inside the add_Numbers4() function)
    console.log(Z+100+"<br>"); // Creates a math operation using the variable and gives the result in the console within the browser.
}
function add_Numbers5() { // Creates a function called add_Numbers5()
    console.log(Z+500); // Creates a math operation with the variable Z but it won't work because "Z" is not a Global Variable.
}
add_Numbers4() // Executes the function
add_Numbers5() // Executes the function

// --------------- Write the Time_function() outlined in previous slides. ---------------

function Time_Function() { // Creates a function called Time_Function()
    var Time = new Date().getHours(); // Creates a variable "Time" and gives a new Date.().GetHours() value (it gets your local time)
    var Reply; // Creates a variable called "Reply"
    if (Time<12==Time>0) { // Uses If statement to see if your local time is less than 12:00pm and more than 00:00am.
        Reply = "It is morning time!"; // Gives "Reply" this value if the statement above is True
    }
    else if (Time>12==Time<18) { // Uses else if statement to see if your local time is more than 12:00pm and less than 06:00pm.
        Reply = "It is the afternoon."; // Gives "Reply" this value if the statement above is True
    }
    else {
        Reply = "It is evening time."; // Uses else statement to give "Reply" this value if both statements above are False.
    }
    document.getElementById("Time_of_day").innerHTML=Reply; // Gives the HTML paragraph the variable "Reply".
}


