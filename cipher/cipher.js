const btn = document.getElementById("encrypt");
btn.addEventListener("click", ()=> {starthere();});

function starthere(){
    let alphaArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let numArray = [1,2,3,4,5,6,7,8,9,0];
    let charArray =  ['~','!','@','#','$','%','^','&','*','(',')','_','+'];
    let quertyArray = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

    let cipher =  document.getElementById('ciphertype').value;
    console.log(cipher);
    if (cipher = 'simplesub'){
        simplesub();
    } else {
        document.getElementById("out").innerHTML = "Nothing here yet";
    }

    function  simplesub(){
        //Get the input and key values
        let input = document.getElementById('inval').value;
        let key = document.getElementById('keyval').value;
        let tempOutput = "Here is the input "+input+" and here is the  key "+key;

        //Remove whitespaces from key
        keyNoSpace = key.replaceAll(" ","");

        //Convert string to arrays
        inputArray = input.split("");
        console.log(inputArray);
        keyArray = keyNoSpace.split("");
        console.log(keyArray);
        document.getElementById("out").innerHTML = tempOutput;
    }
    
}