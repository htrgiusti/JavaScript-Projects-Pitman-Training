function my_Dictionary () {
    var Animal = {
        Species: "Dog",
        Breed: "Dachshund",
        Sound: "Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML= Animal.Sound;
}