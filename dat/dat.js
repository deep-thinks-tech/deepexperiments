async function writeGoogleSheet() {
    document.getElementById("outmsg").innerHTML = "Waiting...";
    let GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwsE8PD9vC1rAFdlVWxb75-n4NvG0mLUygXvXGpGoWx4aEv6d87t3dPfKQ1rh3g8HPQ/exec";
    const date = document.getElementById('date').value;
    const write = document.getElementById('write').value;
    const finEd = document.getElementById('finEd').value;
    const futLiv = document.getElementById('futLiv').value;
    const aiComp = document.getElementById('aiComp').value;

    //Create an input array to be used to determine if data was stored
    if (date ==  ''){
        document.getElementById("outmsg").innerHTML = "Mandatory field Date is not entered. Please enter correct data to proceed";
    }else{
    //let inputarray = [date,write, finEd, futLiv, aiComp];

    const data = {
        Date: date,
        Write: write,
        FinEd: finEd,
        FutureLive: futLiv,
        AIComp: aiComp
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
}
