
const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    // Read the input data
    const ipStr = document.getElementById('inp').value;
    //convert string to array of numbers
    const ipArrStr = ipStr.split(",");
    //convert array elements to numbers
    const ipArr = [];
    ipArrStr.map((ipArrStrVal) => {
         //check if the input is a number and throw error if it is not
        try{
            if (isNaN(ipArrStrVal)) throw "Not a number";
        }
        catch(err) {
            document.getElementById('out').innerHTML = err;
            return;
        }
        ipArr.push(Number(ipArrStrVal));
    });    
    if (ipArr.length == 0){
        return;
    } else{
    document.getElementById('out').innerHTML = "";
    missingBits(ipArr);
}
});

function missingBits(arr) {
         //declare the variable to store prev integer in the array
         let prev = arr[0];
         //declare the resulting array
         let newArr = [];
         //iterate through the array to determine if there is a gap between the elements in the array
         //if there is a gap, then check if the difference is 2
         //if yes, then insert the missing number in the new array
         //if the difference is more than two the new array should have ... between the two elements
         arr.map((arrval) => {
            if (arrval == prev || arrval-prev == 1) {
                newArr.push(Number(arrval));
                prev = arrval;
            } else if (arrval-prev == 2){
                newArr.push(arrval-1);
                newArr.push(Number(arrval));
                prev = arrval;
            } else {
                newArr.push('...');
                newArr.push(Number(arrval));
                prev.arrVal;
            }
         });
         document.getElementById('out').innerHTML = "["+newArr+"]";
}