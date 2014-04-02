function VerifyLogin() {
    var isEmpty = false;
    var isEPass = false;
    var i = 0;
    var email = document.getElementById("loginEmail").value;
    var pass = document.getElementById("loginPass").value;
    console.log("email: " + email);
    console.log("password: " + pass);

    for (i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].title == "style")
            mainCSS = document.styleSheets[i];
        break;
    }

    if (email == "") {
        isEmpty = true;
        document.getElementById("e").className = "form-group has-error";
    }
    else {
        document.getElementById("e").className = "form-group";
        isEmpty = false;
    }
    
    if (pass == "") {
        isEPass = true;
        document.getElementById("p").className = "form-group has-error";
    }
    else {
        document.getElementById("p").className = "form-group";
        isEPass = false;
    }
    if (isEmpty == true || isEPass == true) {
        return false;
    }
    else {
        return true;
    }

}