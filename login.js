function login(){
    var un=document.getElementById('username').value;
    var pw=document.getElementById('password').value;
    var myDetails=document.getElementById('my-details');
    var error='';
    if(un==''){
    error=error + "enter username" + '\n';
    myDetails.innerText=error;
    }
    if(pw==''){
    error=error + "enter password" + '\n';
    myDetails.innerText=error;    
    }
    if(error==''){
    myDetails.innerText="login successful";
    }
}

function redirect() {
    window.location.href = window.location.protocol+'//'+window.location.host + "/signup/signup.html";
}