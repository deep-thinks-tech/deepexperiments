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
    let GOOGLE_SCRIPT_URL_P2 = document.getElementById('dep_url').value;
    console.log(GOOGLE_SCRIPT_URL_P2)
    const date = document.getElementById('date').value;
    const transtype = document.getElementById('transtype').value;
    const amount = document.getElementById('amount').value;
    const paytype = document.getElementById('paytype').value;
    const comments = document.getElementById('comment').value;
    let GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbykFTu-6xkFuw1N4D0iIXL-H8Cir8_050IjMd5t8tapGARGLRFv6uza4oNDUswyJQb"+GOOGLE_SCRIPT_URL_P2+"/exec" 
    console.log(GOOGLE_SCRIPT_URL)
 

    const data = {
        Date: date,
        Description: transtype,
        Amount: amount,
        PaymentMethod: paytype,
        Comments: comments
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: "no-cors"  // ✅ Fixes CORS issue
    });
    await response.text();
    document.getElementById("outmsg").innerHTML = "Data Saved Successfully";
}
