async function writeGoogleSheet(){
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxfl3iLgHpFhtAXE6YFiv1Nq7RQkiNnH4MNmPns-la0vrJ8SIcLpqwlr5jTVE3eUw-Olw/exec";


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
    await response.text();
    //console.log(typeof(result))
    //console.log(result);
    document.getElementById("outmsg").innerHTML = "Done";
}

//Check https://www.youtube.com/watch?v=N3vnUgjQCGU&pp=ygUPI3N3aW5nYXBwc2NyaXB0

