const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
console.log(btn);
const color = document.querySelector(".color");

//Get button details from hex page
const btnhex = document.getElementById("btnhex");
console.log(btnhex);

//Event listener for Hex Color picker page
btnhex.addEventListener('click', changeColorhex);

//Event listener for Simple Color picker page
btn.addEventListener('click', changeColor);

function changeColor() {
   //get random number between 0 - 3 to toggle between 4 colors
    const randomnumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
    color.style.color= colors[randomnumber];
}

function changeColorhex() {
    const randomcolor = random_hex_color_code();
    document.body.style.backgroundColor = randomcolor;
    color.textContent = randomcolor;
    color.style.color = randomcolor;

}

//Hex code generator 
function random_hex_color_code() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

//Hex code generator --> borrowed code from https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-11.php -- does not work
/* const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    console.log(n);
    return '#' + n.slice(0, 6);
  }; */
//Arrow function not working
/* const changeColor = () => {
   //get random number between 0 - 3 to toggle between 4 colors
    const randomnumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
    color.style.color= colors[randomnumber];
}; */
