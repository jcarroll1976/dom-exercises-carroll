const letters = document.getElementById("letters");
const lettersDiv = document.getElementById("letters-div");
const numbersDiv = document.getElementById("numbers-div");
const numbers = document.getElementById("numbers");

letters.addEventListener("click", function() {
    lettersDiv.style.display = "block";
    numbersDiv.style.display = "none";
  });

numbers.addEventListener("click", function() {
    lettersDiv.style.display = "none";
    numbersDiv.style.display = "block";
  });
/*function linkClicked() {
    letterLink.preventDefault();
    if(document.querySelectorAll("p").style.color === "red"){
        document.querySelectorAll("p").style.color = "blue";
    } else if (document.querySelectorAll("p").style.color === "blue") {
        document.querySelectorAll("p").style.color = "red";
    }
}*/