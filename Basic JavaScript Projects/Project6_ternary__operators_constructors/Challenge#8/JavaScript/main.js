function age_Function() {
    var Age, can_Vote;
    Age = document.getElementById("Age").value;
    can_Vote = (Age<18)? "You are not old enough to vote.":"You can vote!";
    document.getElementById("age_Result").innerHTML=can_Vote;
}