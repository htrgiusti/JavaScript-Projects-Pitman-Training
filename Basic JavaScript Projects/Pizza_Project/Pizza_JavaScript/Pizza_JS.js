function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>Your Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectSize = sizeArray[i].value;
            text1 = text1+selectSize+"<br>";
        }
    }
    if (selectSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    // these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectTopping.push(toppingArray[j].value);
            console.log("select topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); 
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"
    // these variables will get passed on to each function
    getVegetables(runningTotal, text1);
};

function getVegetables(runningTotal, text1) {
    var vegetablesTotal = 0;
    var selectVegetables = [];
    var vegetablesArray = document.getElementsByClassName("vegetables");
    for (var v = 0; v < vegetablesArray.length; v++) {
        if (vegetablesArray[v].checked) {
            selectVegetables.push(vegetablesArray[v].value);
            console.log("select vegetable item: ("+vegetablesArray[v].value+")");
            text1 = text1+vegetablesArray[v].value+"<br>";
        }
    }
    var vegetablesCount = selectVegetables.length;
    if (vegetablesCount > 1) {
        vegetablesTotal = (vegetablesCount -1);
    } else {
        vegetablesTotal = 0;
    }
    runningTotal = (runningTotal+vegetablesTotal);
    console.log("total selected vegetable items: "+vegetablesCount);
    console.log(vegetablesCount+" vegetable - 1 free vegetables ="+"$"+vegetablesTotal+".00");
    console.log("vegetables text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"
};