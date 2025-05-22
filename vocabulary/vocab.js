const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzsC3BTICF92Kh_AkuPWznEsvlsQdFH9-6ZLO4l_6LQz_e1mwisEOHQiP6cJpce14ZJEQ/exec"; // Replace with your Apps Script Web App URL

//const storageKey1 = "myStoredWords"; // Custom name for localStorage key
//const storageKey2 = "myStoredMeanings";

let word = [];
let meaning = [];

let eng_alphabets = ['All','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//let savedWords = JSON.parse(localStorage.getItem(storageKey1));
//let savedMeanings = JSON.parse(localStorage.getItem(storageKey2));
let wordArray = [];
let meaningArray = []; 
let combinedwordArray = []; 
let sortedWordArr = [];
let sortedMeaningArr = [];
//temp storage for original word and meaning array
let origword = [];
let origmeaning = [];
/*
if(savedWords){
    wordArray = savedWords;
    meaningArray = savedMeanings;
}
*/

let i = 0;

  async function newQ(){
    if (word.length == 0){
      await fetchData();
    }
    randomNoGen();
    document.getElementById("q").innerHTML = meaning[i];
    document.getElementById("out").innerHTML = "";
  }

 function randomNoGen(){
    i = Math.floor(Math.random() * meaning.length);      
    };

const btnA = document.getElementById("btn2");
btnA.addEventListener("click",() => {
    document.getElementById("out").innerHTML = word[i]; 
});


  let newBtn = document.getElementById("newbtn");
  if (newBtn != null){
  newBtn.addEventListener('click',() => {
    document.getElementById("q").innerHTML = "";
    document.getElementById("out").innerHTML = "";
    const newword = document.getElementById("word").value;
    const newmeaning = document.getElementById("meaning").value;
    if(newword == "" || newmeaning == ""){
      document.getElementById("outword").innerHTML = "Either Word or Meaning is empty. Enter correct values."
    }else if (newword.indexOf('(') == -1){
      //Check if parts of speech part is present
      document.getElementById("outword").innerHTML = "Word "+newword+" does not have parts of speech. "
    }else{
      /*
      If the word already exists in the word array, don't save the word again. Else, add the word and meaning in the end of their respective arrays.
       */
      //Check if word exists
      let exists = 0;
      /*
      if(savedWords){
        wordArray = savedWords;
        meaningArray = savedMeanings;
    }
    */
    //combinedwordArray = word.concat(wordArray);
      for (k = 0; k<word.length; k++){
        if (newword.toLowerCase()  == word[k].toLowerCase()){
          document.getElementById("outword").innerHTML = "Word "+newword+ " already exists.";
          exists = 1;
        }
      }
      if(exists == 0){
        /*
        if(savedWords){
          document.getElementById("warning").innerHTML = "Warning! Main Array and Local Storage are not in sync. Sync data before leaving the session";  
        }
        wordArray.push(newword);
        localStorage.setItem(storageKey1, JSON.stringify(wordArray)); // Save updated array
        meaningArray.push(newmeaning);
        localStorage.setItem(storageKey2, JSON. stringify(meaningArray)); // Save updated array
        savedWords = JSON.parse(localStorage.getItem(storageKey1));
        savedMeanings = JSON.parse(localStorage.getItem(storageKey2));
        */
       writeData();
    }
    }
  });
}else{
  let x = "Don't do anything, ";
  x+="including print error message."
}

async function writeData(){

  const data = {
      Word: document.getElementById("word").value,
      Meaning: document.getElementById("meaning").value
  };
  const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      mode: "no-cors"  // ✅ Fixes CORS issue
  });

  //const result = 
  
  await response.text();
  document.getElementById("outword").innerHTML = "Word added to the vocabulary with meaning";
  document.getElementById("wordform").reset();
} 

  //Sync function - Identify the local storage data missing from the arrays - word and meaning
  async function fetchData(){
    

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL); // GET by default
        const text = await response.text();
        const data = JSON.parse(text);
    
        if (data.status === "success") {
          //displayData(data.data);
          dataArr = data.data
          dataArrLen = dataArr.length;
          for (let j=1;j<dataArrLen;j++){
            word.push(dataArr[j][0]);
            meaning.push(dataArr[j][1]);
          }
        } else {
          alert("Error fetching data: " + data.message);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        alert("Error fetching data.");
      }

  }

  //Clear function -  cleans up the local storage
  /*
  function clearData(){
    savedWords = JSON.parse(localStorage.getItem(storageKey1));
    if (savedWords){
        //Clear data only on second confirmation
        confirmation = document.getElementById('syncresult').innerHTML;
        if (confirmation == "You have data in local storage. Use Sync to know. Click Clear button again to confirm deletion."){
          localStorage.removeItem(storageKey1); // Clear using the custom key
          localStorage.removeItem(storageKey2); // Clear using the custom key
          wordArray = [];
          meaningArray = [];
          document.getElementById('syncresult').innerHTML = "Local Storage cleared."
        }else{
          document.getElementById('syncresult').innerHTML = "You have data in local storage. Use Sync to know. Click Clear button again to confirm deletion."
        }
        
    }else{
      document.getElementById('syncresult').innerHTML = "Local Storage cleared."
    }
 
  }
  */

  if (document.getElementById("letter")){
  //Populate the alphabet LOV with alphabets
  document.getElementById("letter").innerHTML =
  eng_alphabets.reduce((append, x) => `${append}<option>${x}</option>`, `<option>Choose...</option>`);
}

  //Function to capture the selected alphabet and create relevant dictionary
  async function alphabet(){
    let alpha = document.getElementById('letter').value;
    document.getElementById("wordselect").innerHTML = "";
    //Replace the updated word and meaning array with the original arrays
    if (origword.length == 0){
      await fetchData();
      origword = word;
      origmeaning = meaning;
    }
    word = origword;
    meaning = origmeaning;
   
    
    
    //create an array of words and their meanings for the words that starts with the letter selected
    let alphaArray = [];
    sortedWordArr = [];
    sortedMeaningArr = [];
    if (alpha != "All"){
      for (let i = 0; i < word.length; i++){
        if (word[i].toLowerCase().indexOf(alpha.toLowerCase())==0){
          alphaArrElement =  word[i]+" : "+meaning[i];
          alphaArray.push(alphaArrElement);
        }
      }  
  } else {
    for (let i = 0; i < word.length; i++){
        alphaArrElement =  word[i]+" : "+meaning[i];
        alphaArray.push(alphaArrElement);
    } 
  }
    alphaArray.sort();
    //For using in the dictionary and in word guessor, split the key-value pairs in the alphaArray into two arrays.
    alphaArray.map(a => {
      let wm = a.split(" : ");
      sortedWordArr.push(wm[0]);
      sortedMeaningArr.push(wm[1]);
    });
    document.getElementById("wordselect").innerHTML =
    sortedWordArr.reduce((append, x) => `${append}<option>${x}</option>`, `<option>Choose...</option>`);
    word =  sortedWordArr;
    meaning = sortedMeaningArr;
  }

  //Function to return the meaning of the selected word
  function getMeaning(){
    let selectWord = document.getElementById('wordselect').value;
    let selectMeaning = "";
    for (let i = 0; i < sortedWordArr.length; i++){
      if(selectWord == sortedWordArr[i]){
        selectMeaning = sortedMeaningArr[i];
        break;
      }
    }
    document.getElementById('meanings').innerHTML = selectMeaning;
  }