const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydnH05YVkmA6rbQ6JNpprWNvpX8jsMwG5UCVz86O0q9CEC65h4Oz9-pkwPEk3qzR0l/exec"; // Replace with your Apps Script Web App URL
let author = [];

let totalBooks, totalBooksByAuthor = 0;
let dataArr;
let authorbooks = [];
async function fetchData(){
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL); // GET by default
        const text = await response.text();
        const data = JSON.parse(text);
    
        if (data.status === "success") {
          
          dataArr = data.data
          
          dataArrLen = dataArr.length;          
          for (let j=6;j<dataArrLen;j++){ //j =  5 because books related data starts from 6th row or 5th element of the array
            author.push(dataArr[j][3]);
          }
          uniqueAuthors = removeDuplicates(author);
          uniqueAuthors.sort();
          uAuthors = uniqueAuthors.slice(1);
          document.getElementById('author').innerHTML = uAuthors.reduce((append, x) => `${append}<option>${x}</option>`, `<option>Choose...</option>`);
        
        } else {
          alert("Error fetching data: " + data.message);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        alert("Error fetching data.");
      }

  }
  fetchData();

  function removeDuplicates(arr){
    return [...new Set(arr)];
  }

  function getBooks(){
    authorbooks = [];
    let selectAuthor = document.getElementById('author').value;
    for (let k = 6; k< dataArr.length; k++){
      if (dataArr[k][3] == selectAuthor){
        authorbooks.push(dataArr[k]);
      }
    }
    document.getElementById('totalbooks').innerHTML = "Total Books Read: "+`<b>`+authorbooks.length;
    authorbooks.sort((a,b)=>a[2].localeCompare(b[2]));
    displayData(authorbooks);

  }

  function displayData(rows) {
    let html = "<input type='text' id='searchInput' class= 'form-control' onkeyup = 'searchFun()'    placeholder='Search by Title...'><br> <table id = 'books-read' class='table table-bordered table-striped'><tr><th>Title</th><th>Rating</th><th>Year Read</th><th>Genre</th><th>Format</th></tr>";
    for (let i = 0; i < rows.length; i++) {
      html += `<tr><td>${rows[i][2]}</td><td>${rows[i][7]}</td><td>${rows[i][0]}</td><td>${rows[i][4]}</td><td>${rows[i][5]}</td></tr>`;
    }
    html += "</table>";
    document.getElementById("dataDisplay").innerHTML = html;
  }

  function searchFun(){
      const searchInput = document.getElementById('searchInput');
      const searchTerm = searchInput.value.toLowerCase();
      const tableID = document.getElementById('books-read');
      const rows = tableID.getElementsByTagName('tr');
      // Start from index 1 to skip the table header row
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        let rowMatches = false;
        const cells = row.getElementsByTagName('td');

        for (let j = 0; j < cells.length; j++) {
          const cellText = cells[j].textContent.toLowerCase();
          if (cellText.includes(searchTerm)) {
            rowMatches = true;
            break; // No need to check other cells in this row
          }
        }

        if (rowMatches) {
          row.style.display = ''; // Show the row
        } else {
          row.style.display = 'none'; // Hide the row
        }
      }
  }
