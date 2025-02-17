let btn = document.getElementById('submitbtn');
btn.addEventListener('click', () => {
    const SHEET_ID = document.getElementById('sheet_id').value; // Your Google Sheet ID
    console.log("Sheet ID ", SHEET_ID);
    const API_KEY = document.getElementById('api_key').value; // Your API Key
    console.log("API KEY ", API_KEY);
    const RANGE = "Sheet1!A1:C10"; // Adjust range as needed



async function readGoogleSheet() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    console.log(url);
    const response = await fetch(url);
    console.log("Hello");
    const data = await response.json();

    console.log("Sheet Data:", data.values);
//https://sheets.googleapis.com/v4/spreadsheets/1zvz1L02cRm6-KbVGz79OwwKT44XTc5gaSFX8QBIJoME/values/Sheet1!A1:C10?key=AIzaSyAG9E0Q5BQtBDjsteLCBruQuhOaucv5oKs
}

readGoogleSheet();
})
