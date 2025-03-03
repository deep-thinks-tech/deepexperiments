function handleCredentialResponse(response) {
    const id_token = response.credential;
    console.log("ID Token:", id_token);
    
    authenticateWithGoogle(id_token);
}

async function authenticateWithGoogle(idToken) {
    const response = await fetch("https://oauth2.googleapis.com/tokeninfo?id_token=" + idToken);
    const user = await response.json();
    
    console.log("User Info:", user);  // Contains email, name, etc.
}
