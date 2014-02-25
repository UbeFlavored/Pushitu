function verifyReg(){
	var isEmpty = false;
    var i = 0;
    var forms = document.getElementsByTagName("form")[1].elements;
    var pass = document.getElementById("pass1").value;
   	var confpass = document.getElementById("pass2").value;
    // console.log(form[0].value);
	
    /*
   	for(i = 0;i<forms.length;i++){
   		if(forms[i].value == "" && forms[i].type != "submit"){
   			isEmpty = true;
   		}
   	}
	*/
	
	if(forms[0].value == "" && forms[0].type != "submit"){
   		document.getElementById("first").className = "form-group has-error";
		isEmpty = true;
   	}
	else {
		document.getElementById("first").className = "form-group has-success";
		isEmpty = false;
	}
	if(forms[1].value == "" && forms[1].type != "submit"){
   		document.getElementById("last").className = "form-group has-error";
		isEmpty = true;
   	}
	else {
		document.getElementById("last").className = "form-group has-success";
		isEmpty = false;
	}
	if(forms[2].value == "" && forms[2].type != "submit"){
   		document.getElementById("add").className = "form-group has-error";
		isEmpty = true;
   	}
	else {
		document.getElementById("add").className = "form-group has-success";
		isEmpty = false;
	}
	if(forms[3].value == "" && forms[3].type != "submit"){
   		document.getElementById("pas1").className = "form-group has-error";
		isEmpty = true;
   	}
	else {
		document.getElementById("pas1").className = "form-group has-success";
		isEmpty = false;
	}
	if(forms[4].value == "" && forms[4].type != "submit"){
   		document.getElementById("pas2").className = "form-group has-error";
		isEmpty = true;
   	}
	else {
		document.getElementById("pas2").className = "form-group has-success";
		isEmpty = false;
	}
	
   	if(!isEmpty){
   		if(pass == confpass ){
			alert("Greetings ");
			document.getElementById("pas2").className = "form-group has-success";
   			return true;
   		}
   		else{
   			alert("Password doesn't match");
			document.getElementById("pas1").className = "form-group has-error";
			document.getElementById("pas2").className = "form-group has-error";
			
   			document.getElementById("pass1").id = "test";
   			document.getElementById("pass2").id = "test";
			document.location.reload(true);
   		}
   	}
   	return false;
   }
