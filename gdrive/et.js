async function writeGoogleSheet() {
    document.getElementById("outmsg").innerHTML = "Waiting...";
    let GOOGLE_SCRIPT_URL_P21 = document.getElementById('dep_url').value;
    const date = document.getElementById('date').value;
    const transtype = document.getElementById('transtype').value;
    const amount = document.getElementById('amount').value;
    const paytype = document.getElementById('paytype').value;
    const comments = document.getElementById('comment').value;

    let script_URL_arr = GOOGLE_SCRIPT_URL_P21.split("");
    let sua = [];
    for (let a = 0; a <script_URL_arr.length-1; a++){
        sua.push(script_URL_arr[a]);
    }
    let GOOGLE_SCRIPT_URL_P2 = sua.join("");
    let GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbykFTu-6xkFuw1N4D0iIXL-H8Cir8_050IjMd5t8tapGARGLRFv6uza4oNDUswyJQb"+GOOGLE_SCRIPT_URL_P2+"/exec" 

    //Create an input array to be used to determine if data was stored
    if (GOOGLE_SCRIPT_URL_P2 == '' || date ==  '' || amount == ''){
        document.getElementById("outmsg").innerHTML = "Mandatory fields not entered. Please enter correct data to proceed";
    }else{
    let inputarray = [date,transtype, amount, paytype, comments];

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

    //Query the last record and check if it same as input
    readGoogleSheet();
    


async function readGoogleSheet() {

    
    let ak1 = '8FwXPv8D6B7N2';
    let ak2 = '9Nq9AgpqbI09o';
    let ak3 = 'rNreLXrZs2lHp';
    
    let arr = [8,9,0,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7];
    let ak = ak1+ak2+ak3;
    let akarr = ak.split(""); //Encrypted key array
    let keyval = GOOGLE_SCRIPT_URL_P21.charAt(GOOGLE_SCRIPT_URL_P21.length-1) //Key - last character of the Deployment  URLs

    let decryptarr = [];
    let dk;
    akarr.map(ak => {
        let akfound = 0;
            dk = 0;
        for (let j = 0; j < arr.length; j++){
            
            if (ak === arr[j] || parseInt(ak) == arr[j]){
                if (parseInt(j)+parseInt(keyval) >= arr.length){
                    dk = parseInt(j)+parseInt(keyval)-arr.length;
                }else{
                    dk = parseInt(j)+parseInt(keyval);
                }
                decryptarr.push(arr[parseInt(dk)]);
                akfound = 1;
            }
        }  
        if(akfound == 0){
            decryptarr.push(ak);
        }    
  
    })
    const API_KEY = decryptarr.join("");


    let SHEET_ID = '1zvz1L02cRm6-KbVGz79OwwKT44XTc5gaSFX8QBIJoME'; // Your Google Sheet ID
    let RANGE = "Sheet1!A1:E50"; // Adjust range as needed

    try{
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
        const response = await fetch(url);
        if(!response.ok) throw new Error("Failed to fetch response")
        const data = await response.json();
        resparray = data.values;
        lastrecord = resparray[resparray.length-1];

        //Compare the last entered record with the input array
        if (inputarray[inputarray.length - 1]==''){
            arrlen = lastrecord.length;
        }else{
            arrlen = inputarray.length;
        }
        let i = 0;
        let arrcompare = "Match";
        for (i = 0; i < arrlen; i++){
            if (inputarray[i]== lastrecord[i]){
                continue;
            }else{
                arrcompare = "Mismatch"
                document.getElementById("outmsg").innerHTML = "Error: Record was not saved";
                break;
            }
        }
        if (arrcompare == "Match"){
            document.getElementById("outmsg").innerHTML = "Data Saved Successfully";
        }   

    } catch (error){
        console.error("Error:", error.message);
    }
}
}
}
