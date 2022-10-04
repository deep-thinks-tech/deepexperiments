const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.getElementById("btn");
console.log(btn);
const color = document.querySelector(".color");
//Event listener for Simple Color picker page
btn.addEventListener('click', changeColor);

//Main function to change color
function changeColor() {
    let hexColor = '#';
    //get 6 random number to toggle between the values in variable colors
    for (let i = 0; i < 6; i++){
        let randomno = randomnumbergen();
        hexColor += colors[randomno];
    }
    //Change the background color
    document.body.style.backgroundColor = hexColor;
    //Update the color value in the text
    color.textContent = hexColor;
    //Update the color style in the color text to change to the same color
    color.style.color = hexColor;
}

//Function to generate random numbers
function randomnumbergen() {
    return Math.floor(Math.random() * colors.length);
}

//Hex code generator - Alternate option - Did not use
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
