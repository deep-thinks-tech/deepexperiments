//On page load, this javascript runs to create a table with dynamic number of rows and columns
//To be done later - Determine the number of rows and columns

//Define total number of rows and columns
let totalRows = 10;
let totalCols = 10;

//Capture page load event
window.addEventListener('DOMContentLoaded',loadPage);

function loadPage() {
    let i, j;
    let html = "";
    let count = 0;

    for (i = 0; i < totalRows; i++){
        html += `<tr>`
        for (j = 0; j < totalCols; j++){
            count++;
            html += `<td class = "cell">${count}</td>`
        }
        html += `</tr>`
    }
    
document.getElementById('tab').innerHTML = html;
//On successful load of the page, move on to capture cell clicks
cellClick();
}

function cellClick() {
/*Capture cell click event
For each cell in the table, check which cell is clicked.
Toggle the background color of the cell clicked */
const cellList = document.querySelectorAll(".cell")
cellList.forEach((cell) => {
    //Capture the cell click event
    cell.addEventListener("click",(c) => {
        //Toggle background colors of the clicked cell
        c.currentTarget.style.background = c.currentTarget.style.background == "green" ? "" : "green";
        
    })
})
}
