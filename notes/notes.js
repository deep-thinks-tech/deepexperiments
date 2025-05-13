const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJ7HgohnagAO2t8-DLJGlNNnbs4bLDXY_QwtFKnfeem2pKVCqRn3UIfqG_WlOI0xxS/exec"; // Replace with your Apps Script Web App URL

async function loadTitleLOV() {
  const loadTitleURL = GOOGLE_SCRIPT_URL+"?action=fetchTitles"
  const response = await fetch(loadTitleURL);

  if (!response.ok) {
    console.error("Failed to load titles");
    return;
  }

  const result = await response.json();
  const titles = result.titles;

  const select = document.getElementById("title");
  select.innerHTML = '<option value="">-- Select Title --</option>';

  titles.forEach(title => {
    const option = document.createElement("option");
    option.value = title;
    option.textContent = title;
    select.appendChild(option);
  });
}
console.log("Hello hello hello");
  loadTitleLOV();
/*
window.onload = () => {
  console.log("Hello hello hello");
  loadTitleLOV();
};
*/

document.getElementById("bookmarkForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let notes = document.getElementById("notes").value;

  if (title == ""){
    title = document.getElementById("newtitle").value;
  }

  
/*
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Title: title, Notes: notes }),
      mode: "no-cors"
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
  */
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ Title: title, Notes: notes }),
    mode: "no-cors"
  });

  await response.text(); // Use text first to debug
  alert("Data Submitted.");

  document.getElementById("bookmarkForm").reset();
  await loadTitleLOV();
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