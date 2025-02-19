let btn = document.getElementById('submitbtn');
btn.addEventListener('click', () => {
    const SHEET_ID = document.getElementById('sheet_id').value; // Your Google Sheet ID
    const API_KEY = document.getElementById('api_key').value; // Your API Key
    const RANGE = "Sheet1!A1:C30"; // Adjust range as needed



async function readGoogleSheet() {
    try{
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
        const response = await fetch(url);
        if(!response.ok) throw new Error("Failed to fetch response")
        const data = await response.json();
        console.log("Sheet Data:", data.values);
    } catch (error){
        console.error("Error:", error.message);
    }
}

readGoogleSheet();
})


async function writeGoogleSheet() {
    const GOOGLE_SCRIPT_URL = document.getElementById('dep_url').value;
    const type = document.getElementById('type').value;
    const feature = document.getElementById('features').value;
    const data = {
        Type: type,
        Features: feature
    };
    try{

    const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: "no-cors"  // ✅ Fixes CORS issue
    });
    const result = await response.text();
    //if (result  == "Success"){
        console.log(result);
    //} else{
        //throw new Error("Write Failed");
    //}
} catch(error){
    console.log("Error:", error.message)
}
}
