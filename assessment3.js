const colorButton = document.getElementById("colorButton");


colorButton.addEventListener("click", (event) => {
    document.body.classList.toggle("coral");
})

const boxButton = document.getElementById("boxButton");
const boxDiv = document.getElementById("boxDiv");

boxButton.addEventListener("click", (event) => {
    const boxDisplay = document.createElement("div");
    boxDisplay.classList.add("boxDisplay");
    boxDisplay.style.display ="inline-block";
    boxDisplay.innerText = "I'm a box!";
    boxDisplay.addEventListener("click", (event) => {
        boxDiv.removeChild(boxDisplay);
    });
       boxDiv.appendChild(boxDisplay);
    
});