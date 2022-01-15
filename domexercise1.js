function main() {
    document.getElementById("grow-me").classList.add("big");
    document.getElementById("shrink-me").classList.remove("big");
    console.log(document.getElementsByTagName("li")[0].innerHTML);
    console.log(document.getElementsByTagName("li")[1].innerHTML);
    console.log(document.getElementsByTagName("li")[2].innerHTML);
    document.getElementsByClassName("link")[0].setAttribute("href", "https://www.example.com");
    document.getElementsByClassName("link")[0].innerHTML = "somewhere";
    document.getElementById("hide-me").style.display = "none";
    document.getElementById("show-me").style.display = "block";
    document.querySelector("h1").innerHTML = ("Welcome " + document.getElementById("name").value + "!");
}