// Create a basic slideshow using HTML, CSS, and JavaScript

const slider = document.querySelectorAll(".slider"); // Creates a const for all images (.slider)
const btnPrev = document.getElementById("prev-button"); // Creates a const for the previous button
const btnNext = document.getElementById("next-button"); // Creates a const for the next button

let currentSlide = 0; // Creates a let for the current slide (active slide).

function hideSlider() { // Creates a function to remove "on" class for each image
  slider.forEach(item => item.classList.remove("on"))
}

function showSlider() { // Creates a function to add "on" class in "current slide"
  slider[currentSlide].classList.add("on")
}

function nextSlider() { // Creates a function for next Slider 
  hideSlider() // remove "on" class for each image
  if(currentSlide === slider.length -1) { // This statement will see if the slider is the "currentSlide"
    currentSlide = 0 // Returns to the first slide (currentSlide)
  } else { // If it's not in the last slider, add 1 slider (currentSlide++)
    currentSlide++
  }
  showSlider() // Runs showSlider()
}

function prevSlider() { // Creates a function for previous Slider
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1 
  } else { // If it's not in the last slider, subtract 1 slider (currentSlide--) 
    currentSlide--
  }
  showSlider() // Runs showSlider()
}

btnNext.addEventListener("click", nextSlider)
btnPrev.addEventListener("click", prevSlider)



// Create a countdown() function

function countdown() { // Creates a function countdown()
    var seconds = document.getElementById("seconds").value; // Creates a variable called "seconds" and gives the HTML element "seconds" its value
    function tick() { // Creates a function called tick ()
        seconds = seconds -1; // Subtracts seconds by 1
        timer.innerHTML = seconds; // Creates a timer and gives "seconds"
        setTimeout(tick, 1000); // Gives tick function 1000 milliseconds
        if(seconds == -1) { // Creates an if statement (if "seconds" -1 then give an alert)
            alert("Time's Up!");
        }
    }
    tick(); // Runs the function tick ()
}