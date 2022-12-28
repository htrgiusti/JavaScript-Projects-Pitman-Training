function constant_Function() {
    const dog_breed = {color: "brown", size: "small", chestsize: "huge"};
    dog_breed.chestsize = "small";
    document.getElementById("Constant").innerHTML = "My sausage boy has a " + dog_breed.chestsize + " chest muscle."
}