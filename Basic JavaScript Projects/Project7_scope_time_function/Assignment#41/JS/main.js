function age_Function() {
    var x = document.getElementById("age").value;
    if (x<18) 
    {
        document.getElementById("age_Result").innerHTML="You are younger than 18."
    }
    else
    {
        document.getElementById("age_Result").innerHTML="You are older than 18."
    }
}