
    function myfunction() {
        var fn = document.getElementById('firstname').value;
        var ln = document.getElementById('lastname').value;
        var eid = document.getElementById('emailid').value;
        var pwd = document.getElementById('password').value;
        var pwd2 = document.getElementById('repassword').value;
        var myDetails = document.getElementById('my-details');
        var error = '';
        if (fn == '' ) {
            error = error + "please enter first name" + '\n';
            myDetails.innerText=error;
        }
        
        if (ln == '') {
            error = error + "please enter last name " +'\n'; 
            myDetails.innerText=error;
        }
        
        if (eid == '') {
            error = error + "please enter email id" + '\n';
            myDetails.innerText=error;
        }
        
         if (pwd == ''){
            error=error + "enter password" + '\n';
            myDetails.innerText=error;
        }   
         else if (pwd2=='' ){
             error=error + "enter re-enter password" + '\n';
            myDetails.innerText=error;
        }
        else if (pwd2 != pwd){
            error=error + "password and re-enter password are different" + '\n';
            myDetails.innerText=error;
        }
        if(error == '') {
            myDetails.innerText = fn  +  '\n'  + ln +  '\n' + eid; 
        }
    }


function redirect() {
    console.log('I am here')
    window.location.href = window.location.protocol+'//'+window.location.host+"/login/login.html";
}