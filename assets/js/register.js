var compare = function () {
    var pass, rpass;
    pass = document.getElementById("pass1");
    rpass = document.getElementById("pass2");
  
    if (rpass.value === pass.value) {
      rpass.style.borderColor = "green";
      rpass.setCustomValidity("");
    } else {
      rpass.style.borderColor = "red";
      rpass.setCustomValidity("Password does not match");
    }
  };

  var passwordvalidation = () => {

    var password,str;
    password = document.getElementById("pass1");
    str = password.value;
    str = str.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

    if(str == null){
        password.setCustomValidity("invalid password :-\n* Password must contain 8 or more characters\n* Password must contain atlest one uppercase letter\n* Password must contain atleast one special character");
        password.style.borderColor="red";
    }
    else{
        password.setCustomValidity("");
        password.style.borderColor="green";
    }
}

var emailvalidation = () => {

    var email,str;
    email = document.getElementById("emailid");
    str = email.value;
    str = str.match(/^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/gm);
    

    if(str === null){
        email.setCustomValidity("Invalid email :- \n *Email should contain a special character. \n *Email should contain a domain name.\n  ");
        email.style.borderColor="red";
    }
    else{
        email.setCustomValidity("");
        email.style.borderColor="green";
    }
}

var usernamevalidation = () => {

    var uname,uname1,res;
    uname = document.getElementById("unm");
   
    if(uname.value[0].toUpperCase() === uname.value[0]){
        uname.setCustomValidity("");
        uname.style.borderColor="green";
    }
    else{
        uname.setCustomValidity("Invalid username :- \n *Starting letter of the username should be in Uppercase.");
        uname.style.borderColor="red";
    }
}

