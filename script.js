document.getElementById("registrationForm").addEventListener('submit', function(click) {
    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let confirmPassword=document.getElementById('confirmPassword').value;
    
    usernameError.textContent='';
    emailError.textContent='';
    passwordError.textContent='';
    confirmPasswordError.textContent='';
    
    if(username===''){
        usernameError.textContent='Username is required';
        event.preventDefault();
    }
    if(email===''){
        emailError.textContent='Email is required';
        event.preventDefault();
    }
    if(password===''){
        passwordError.textContent='Password is required';
        event.preventDefault();
    }else if(password.length<6){
        passwordError.textContent='Password must be atleast 6 characters';
        event.preventDefault();
    }
    if(confirmPassword===''){
        confirmPasswordError.textContent='Password is required';
        event.preventDefault();
    }else if(confirmPassword!==password){
        confirmPasswordError.textContent='passwords do not match';
        event.preventDefault();
    }else{
        console.log("Login Successfull");
    }
});