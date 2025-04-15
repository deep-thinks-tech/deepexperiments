const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwDFy1SsKXvmlzGMPcNuLA7AdvtJRDxq4xhjEo1TGJDoKaLFjl10p04zyZXmbzBR1rD/exec"; // Replace with your Apps Script Web App URL

document.getElementById("bookmarkForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const notes = document.getElementById("notes").value;

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Title: title, Notes: notes })
    });

    const resultText = await response.text(); // Use text first to debug
    try {
      const result = JSON.parse(resultText);
      alert(result.message);
    } catch (parseError) {
      alert("Response not in JSON: " + resultText);
    }
  } catch (error) {
    console.error("Error submitting:", error);
    alert("Failed to submit data.");
  }

  document.getElementById("bookmarkForm").reset();
});

async function fetchData() {
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
  let html = "<table><tr><th>Title</th><th>Notes</th></tr>";
  for (let i = 1; i < rows.length; i++) {
    html += `<tr><td>${rows[i][0]}</td><td>${rows[i][1]}</td></tr>`;
  }
  html += "</table>";
  document.getElementById("dataDisplay").innerHTML = html;
}