async function writeGoogleSheet(){
    document.getElementById("outmsg").innerHTML = "";
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxpgQURreCaIk0MIqPWLqRCfT4b2hk3BH1WuABalBqNf4irGCmwkzjjjnKo8MlKQ5gNtQ/exec";


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

