const ctr = document.getElementById("value")
const ctrval = ctr.textContent;
const btnlist = document.querySelectorAll(".btn");

//Set initial count
let count = 0;

/* 
Logic:
1. Listen to every button click
2. Determine the class of the button clicked
3. Call the corresponding functions based on the button class
 */
//Add listener for all buttons
btnlist.forEach((btn) => {
    btn.addEventListener("click",(b) => {
        const btnclass = b.currentTarget.classList;
        btnclass.contains("decrease") ? count-- : btnclass.contains("increase") ? count++ : count = 0;
        ctr.textContent = count;
        ctr.style.color = count > 0 ? "green" : count < 0 ? "red" : "black";
    })
});

//Map does not work, but forEach works!!
/* btnlist.map((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn);
    });
}); */
