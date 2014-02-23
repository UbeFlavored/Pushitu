function verifyReg(){
	var isEmpty = false;
    var i = 0;
    var forms = document.getElementsByTagName("form")[1].elements;
    var pass = document.getElementById("pass1").value;
   	var confpass = document.getElementById("pass2").value;
   // console.log(form[0].value);
   	for(i = 0;i<forms.length;i++){
   		if(forms[i].value == "" && forms[i].type != "submit"){
   			isEmpty = true;
   		}
   	}
   		if(isEmpty){
   		alert("Error: One of the textbox is empty");
    
   	}else{
   		if(pass == confpass ){
        alert("Greetings ");
   			return true;
   		}
   		else{
   			alert("Password doesn't match");

   			document.getElementById("pass1").id = "test";
   			document.getElementById("pass2").id = "test";
        document.location.reload(true);
   		}
   	}
   	return false;
   }
