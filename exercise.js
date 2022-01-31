const form = document.getElementById("theForm");
const coins = document.getElementById("coins");
const coinField = document.getElementById("coin");
const amountField = document.getElementById("amount");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = amountField.value;
    const coin = coinField.value;
    for (i = 0; i < amount; i++) {
        const coinDisplay = document.createElement("div");
        coinDisplay.setAttribute("class","coinDisplay");
        coinDisplay.style.display = "inline";
        coinDisplay.innerText = "coin";
        coinDisplay.addEventListener("click", (event) => {
            coinDisplay.parentElement.removeChild(coinDisplay);
        });
        coins.appendChild(coinDisplay);
    }
});