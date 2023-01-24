//Given a string of any length which contains only digits from 0 to 9, replace each consecutive run of the digit 0 with its length.
/*
Check the following
1. Is the entered string, a string of number. Throw an error, if it is not.
2. Does the string has 0's. If yes, start the counter that ends when the current digit is not 0. If no, print the digit
*/
//Get the inputs
const btn = document.getElementById('btn');

//Get the input string when button is clicked
btn.addEventListener('click',() => {
    const inpt = document.getElementById('inp').value;
    replacezeros(inpt);
});

function replacezeros(num) {
    //Check if input is empty or non integer
    try {
        if (num.trim() == "") throw "Empty";
        if (isNaN(num)) throw "not a number";
    }
    catch(err){
        document.getElementById('out').innerHTML = "Input is " + err;
        return;
    }

    //Reset the error message
    document.getElementById('out').innerHTML = ""

    //Convert num into string
    const strNum = num.toString();

    //Convert string to array
    const strArr = strNum.split("");

    //Variable to store result array
    const resArr = [];
    
    //Counter variable
    let count = 0;

    //Loop through the array to separate non-zero digits from zero
    strArr.map((str, ind) => {
        if (str != 0){
            resArr.push(str);
        } else{
            count++;
            if (strArr[ind+1] != 0 || ind == strArr.length-1){
                resArr.push(count.toString());
                count = 0;
            }
        }
        
    })

    //Convert the array to string to number
    const resStr = resArr.toString();
    const resStrfin = resStr.replaceAll(",","");
    const resNum = parseInt(resStrfin);
    console.log(resNum);

    document.getElementById('out').innerHTML = "The value after replacing zeros with its count is " + resStrfin;
}