function validation(){
    let username = document.getElementById("username").value;
    let useremail = document.getElementById("email").value;
    let userphone = document.getElementById("mobile").value;
    let userStatus = false;
    let emailStatus = false;
    let mobileStatus = false;
    let charExp = /^[a-zA-Z]+$/
    let numExp = /^[0-9]+$/

if(username === ""){
    document.getElementById("nameerror").innerHTML = "Please Enter Name *"
}else{
    if(username.match(charExp)){
        document.getElementById("nameerror").innerHTML = ""
        userStatus = true;
    }else{
        document.getElementById("nameerror").innerHTML = "Please enter Characters Only *"
    }
    }

    if(useremail === ""){
        document.getElementById("emailerror").innerHTML = "Please Enter Email Address *"
    }else{
    document.getElementById("emailerror").innerHTML = "";
    emailStatus = true;
    }

    if(userphone === ""){
        document.getElementById("mobileerror").innerHTML = "Please Enter Mobile Number *"
    }
    else{
        if(userphone.match(numExp)){
            if(userphone.length == 10){
                document.getElementById("mobileerror").innerHTML = ""
                mobileStatus = true;
            }else{
                document.getElementById("mobileerror").innerHTML = "Phone Number Should Be 10 Digit"
            }
        }else{
            document.getElementById("mobileerror").innerHTML = "Please Enter Numbers only *"
        }
    }





if(userStatus === true && emailStatus === true && mobileStatus === true){
    return true;
}else{
    return false;
}



}