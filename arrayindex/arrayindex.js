//Get the input and button fields from HTML page
const inp = document.getElementById('inp');
const btn = document.getElementById('btn');


//When the button is clicked, get the input data
btn.addEventListener('click',() => {
   const inpVal = inp.value;
   arrayIndex(inpVal);
});

function arrayIndex(value) {
    //Check if the input value is empty or if it is not a number
    try{
        if(value.trim()==="") throw "Empty string";
        if(isNaN(value)) throw "Not a number";
    }catch(err){
        document.getElementById('out').innerHTML = err;
        return;
    }
    let i = 1;
    let arrayLength = value;
    //Create an array with elements representing individual array lengths
    let smallerArrayLengths = [];
    for (;i<=arrayLength;i++){
        smallerArrayLengths.push(i);
    }
   // console.log(smallerArrayLengths);
    let smallerArray = [];
    let finalArray = [];
    for (j of smallerArrayLengths){
        console.log(j);
        for (let k = 1; k<=j;k++){
            console.log(k);
            smallerArray.push(k);
        }
        console.log(smallerArray);
        finalArray.push(smallerArray);
    }
   console.log(finalArray);

}