function VerifyLogin(){
	var isEmpty = false;
    var i = 0;
    var email = document.getElementById("loginEmail").value;
    var pass = document.getElementById("loginPass").value;
    console.log("email: "+email);
    console.log("password: "+pass);
    if(email ==""){
    	console.log("Email Missing");
    	isEmpty = true;
    }
    if(pass == ""){
    	console.log("Password is Missing");
    	isEmpty = true;
    }
    if(isEmpty == true){
    	alert("X")
    	return false;
    }
    else{
    	alert("D")
    	return true;
    }
    
}