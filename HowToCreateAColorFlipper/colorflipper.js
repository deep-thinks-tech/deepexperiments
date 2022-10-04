const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
console.log(btn);
const color = document.querySelector(".color");


//Event listener for Simple Color picker page
btn.addEventListener('click', changeColor);

//Main function to change color
function changeColor() {
   //get random number between 0 - 3 to toggle between 4 colors
    const randomnumber = randomnumbergen();
    //Change the background color
    document.body.style.backgroundColor = colors[randomnumber];
    //Update the color value in the text
    color.textContent = colors[randomnumber];
    //Update the color style in the color text to change to the same color
    color.style.color= colors[randomnumber];
}

//Function to generate random numbers
function randomnumbergen() {
    return Math.floor(Math.random() * colors.length);
}