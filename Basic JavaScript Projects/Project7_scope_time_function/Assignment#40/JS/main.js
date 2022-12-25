function get_Date() {
    if (new Date().getHours() < 8) {
        document.getElementById("Date").innerHTML="How are you today?";
    }
}