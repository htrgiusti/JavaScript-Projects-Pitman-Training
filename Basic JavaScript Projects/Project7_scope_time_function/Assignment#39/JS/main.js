// Write a global variable.

X = 20;
function add_Numbers_1() {
    document.write(30+X+"<br>");
}
function add_Numbers2() {
    document.write(100+X+"<br>");
}
add_Numbers_1()
add_Numbers2()

// Write a local variable.

function add_Numbers3(){
    Y = 50;
    document.write(Y+5+"<br>");
}
add_Numbers3()

// Intentionally write a function with an error in it and use console.log()
// method to debug it within the console in Chrome Dev Tools.

function add_Numbers4() {
    Z = 100;
    console.log(Z+100+"<br>");
}
function add_Numbers5() {
    console.log(Z+500);
}
add_Numbers4()
add_Numbers5()
