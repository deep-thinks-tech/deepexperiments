const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', changeColor);

function changeColor() {
   //get random number between 0 - 3 to toggle between 4 colors
    const randomnumber = Math.floor(Math.random()*4);
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
    color.style.color= colors[randomnumber];
}