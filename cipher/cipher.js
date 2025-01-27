const btn = document.getElementById("encrypt");
btn.addEventListener("click", ()=> {starthere();});

//Array Definitions
let alphaArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0,'~','!','@','#','$','%','^','&','*','(',')','_','+'];
let numArray = [1,2,3,4,5,6,7,8,9,0];
let charArray =  ['~','!','@','#','$','%','^','&','*','(',')','_','+'];
let quertyArray = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

function starthere(){

    let cipher =  document.getElementById('ciphertype').value;
    if (cipher = 'simplesub'){
        simplesub();
    } else {
        document.getElementById("out").innerHTML = "Nothing here yet";
    }
}

    function  simplesub(){
        //Get the input and key values
        let input = document.getElementById('inval').value;
        let key = document.getElementById('keyval').value;
        let validation = "Valid";

        //Remove whitespaces from key
        keyNoSpace = key.replaceAll(" ","");

        //Convert string to arrays
        inputArray = input.split("");
        keyArray = keyNoSpace.split("");

        //Check for invalid characters in the key
        inputcheck = inputArray.map(charcheck);
        keycheck = keyArray.map(charcheck);

        inputcheck.map(function(i){
            if (i == "Not Found"){
                validation = "Invalid";
                document.getElementById("out").innerHTML = "Invalid Input";
            }
        })

        keycheck.map(function(k){
            if (k == "Not Found"){
                validation = "Invalid";
                document.getElementById("out").innerHTML = "Invalid Key";
            }
        })
        //Proceed with encryption only if the inputs and keys are valid
        if (validation == "Valid"){
            document.getElementById("out").innerHTML = "";

            //Match the lengths of input and key arrays
            matchedKeyArray  = matcharraylen(inputArray, keyArray);

            //Find the key positions
            let keyPositions = keyPosFun(matchedKeyArray);

            //Check the input in their respective arrays and advance them by key positions to create a new output array.
            outputArray = encrypt(inputArray, keyPositions);
            outputString = outputArray.join("");
            document.getElementById("out").innerHTML = outputString;
    }
    }
    function matcharraylen(i, k){
        iLen = i.length;
        kLen = k.length;
        let a = 0;
        if (iLen > kLen){
            for (let i = kLen; i < iLen; i++){
                k.push(k[a]);
                a++;
            }
            return k;
        }else if (iLen < kLen){
            while (iLen < k.length){
                k.pop();
            }
            return k;
        }else {
            return k;
        }
    }

    //Function to check if each element of input or key arrays have values not considered for encryption
    function charcheck(a){
        let check = "Not Found"
        for (i = 0; i < alphaArray.length; i++){
            if (a.toLowerCase() == alphaArray[i]){
                check = "Found"
                break;
            }
        }
        return check;
    }

    //Function to 1. Determine the position of the keys 2.Determine if the input value is an alphabet, number, or character
    function keyPosFun(array){

        //Find the key positions
        let keyPos = [];   
        array.map(function(key){
            for (let i = 0; i < alphaArray.length; i++){
                if(key.toLowerCase() == alphaArray[i]){
                    if (i < 26){
                        keyPos.push(i+1);
                    } else if(i >= 26 && i <36){
                        for (let j = 0; j < numArray.length; j++){
                            if (key == numArray[j]){
                                keyPos.push(j+1);
                            }
                        }
                    }else if (i >= 36){
                        for (let j = 0; j < charArray.length; j++){
                            if (key == charArray[j]){
                                keyPos.push(j+1);
                            }
                        }
                    }
                   
                }
            }

            
        })
        return keyPos;
    }

    function encrypt(inputArray,keyPos){
        let outputArray = [];
        let inputPos = 0; //variable to store the position of the input array elements
        let elementFound = "No"; // to determine if for loop was exited because the element was found or due to element not being found
        let newPos = 0; //variable to calculate the position of the alphabet, number, or character that would be the substitution for the input element.
        inputArray.map(i => {
            newPos = 0;
            for(j = 0; j< quertyArray.length; j++){
                elementFound = "No"; 
                if(i.toLowerCase() == quertyArray[j]){
                    elementFound =  "Yes";
                    newPos = j + keyPos[inputPos];
                    if (newPos >=quertyArray.length){
                        newPos = newPos - quertyArray.length;
                    }   
                    outputArray.push(quertyArray[newPos]);
                    inputPos++;
                    break;
                }
            }
            if(elementFound == "No"){
                for(j = 0; j<numArray.length;j++){
                    elementFound == "No";
                    if(i == numArray[j]){
                        elementFound = "Yes";
                        newPos = j + keyPos[inputPos];
                        if (newPos >=numArray.length){
                            while(newPos >=numArray.length){
                                newPos = newPos - numArray.length;
                            }
                        }
                        outputArray.push(numArray[newPos]);
                        inputPos++;
                        break;
                    }
                }
            }
            if(elementFound == "No"){
                for(j = 0; j<charArray.length;j++){
                    elementFound == "No";
                    if(i == charArray[j]){
                        elementFound = "Yes";
                        newPos = j + keyPos[inputPos];
                        if (newPos >=charArray.length){
                            while(newPos >=charArray.length){
                                newPos = newPos - charArray.length;
                            }
                            
                        }
                        outputArray.push(charArray[newPos]);
                        inputPos++;
                        break;
                    }
                }
            }
        })
        return outputArray;
    }