async function writeGoogleSheet(){
    document.getElementById("outmsg").innerHTML = "";
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwKw4mJsBEbnhsutl7EAn1fnmhz3d31aNEdxUEeQyduRi2QNW8Rz_CtwI9s53YvE9h9UA/exec";


    const data = {
        Title: document.getElementById("title").value,
        URL: document.getElementById("url").value
    };
    const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: "no-cors"  // ✅ Fixes CORS issue
    });

    //const result = 
    
    const result = await response.text();
    console.log(typeof(result))
    console.log(result);
    document.getElementById("outmsg").innerHTML = "Done";
}

//Check https://www.youtube.com/watch?v=N3vnUgjQCGU&pp=ygUPI3N3aW5nYXBwc2NyaXB0


async function fetchData() {
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwKw4mJsBEbnhsutl7EAn1fnmhz3d31aNEdxUEeQyduRi2QNW8Rz_CtwI9s53YvE9h9UA/exec";

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL); // GET by default
    const text = await response.text();
    const data = JSON.parse(text);

    if (data.status === "success") {
      displayData(data.data);
    } else {
      alert("Error fetching data: " + data.message);
    }
  } catch (err) {
    console.error("Fetch error:", err);
    alert("Error fetching data.");
  }
}

function displayData(rows) {
  let html = "<table><tr><th>Title</th><th>URL</th></tr>";
  for (let i = 1; i < rows.length; i++) {
    html += `<tr><td>${rows[i][0]}</td><td><a href="${rows[i][1]}" target="_blank">${rows[i][1]}</a></td></tr>`;
  }
  html += "</table>";
  document.getElementById("dataDisplay").innerHTML = html;
}

