//Capture the button clicks and call functions accordingly

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', syncFun);
btn2.addEventListener('click', asyncFun);

let  sum;

function syncFun() {
    const inp = getInput();
    let i;
    let  sum = 0;
    for (i=0; i <= inp; i++){
        sum+=i;
    }   
    sumDisplay(sum);
}

function asyncFun() {
    const myPromise = new Promise (function(myResolve, myReject) {
        const inp = getInput();
        let i;
        sum = 0;
        for (i=0; i <= inp; i++){
            sum+=i;
        }   
        if(sum){
            myResolve(sum);
            console.log(sum);
        } else{
            myReject("Error here");
        }
    });
   myPromise.then((sum)=> {sumDisplay(sum)}, (err) => {sumDisplay(err)});
}

function getInput() {
    const inp = document.getElementById('textip').value;
    return inp;
}

function sumDisplay(value){
    document.getElementById('result').textContent = value;
}