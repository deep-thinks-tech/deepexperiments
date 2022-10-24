let username, password;
const clickHandle = () => {
    username = document.getElementById('un').value;
    password = document.getElementById('pw').value;
    console.log("Usernamein ", username, " Passwordin ", password);
};

// Need to add a logic where initially the button is disabled. Only when user name and password fields have values, enable the button.
class user {
    constructor (username, password){
        this.username = "Teddy";
        this.password = "bear";
    }
}
const newuser = new user();
console.log("Usernameout ", username, " Passwordout ", password); 
console.log("Usernameoutclass ", newuser.username, " Passwordoutclass ", newuser.password)