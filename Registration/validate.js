var fieldArray = [];

function init() {
    if (localStorage.fieldValue) {
        fieldArray = JSON.parse(localStorage.fieldValue);
    }
}



function validation() {
    let user = document.getElementById("uname").value;
    let pass = document.getElementById("pass1").value;
    let conpass = document.getElementById("pass2").value;
    let mob = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;

    var fieldObj = { UserName: user, Password: pass, ConfrimPassword: conpass, Mobile: mob, Email: email };

    localStorage.setItem("fieldValue", JSON.stringify(fieldObj));
    // console.log(fieldArray);
    // localStorage.fieldRecord = JSON.stringify(fieldArray);

    if (user == "") {
        document.getElementById("valname").innerHTML = "Please Enter User Name";
        return false;
    }
    if ((user.length < 2) || (user.length > 20)) {
        document.getElementById("valname").innerHTML = "Character should be between 2 to 20";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById("valname").innerHTML = "Number is not allowed";
        return false;
    }

    if (pass == "") {
        document.getElementById("valpass1").innerHTML = "Please Enter Password";
        return false;
    }
    if ((pass.length <= 5 || (pass.length > 20))) {
        document.getElementById("valpass1").innerHTML = "Character should be between 5 to 20";
        return false;
    }

    if (conpass == "") {
        document.getElementById("valpass2").innerHTML = "Please Enter Confirmed Password";
        return false;
    }
    if (pass != conpass) {
        document.getElementById("valpass2").innerHTML = "Password Does Not Match";
        return false;
    }

    if (mob == "") {
        document.getElementById("valmobile").innerHTML = "Please Enter Mobile";
        return false;
    }
    if (isNaN(mob)) {
        document.getElementById("valmobile").innerHTML = "Should Include only number";
        return false;
    }
    if (mob.length != 10) {
        document.getElementById("valmobile").innerHTML = "Should Include only 10 digits";
        return false;
    }

    if (email == "") {
        document.getElementById("valemail").innerHTML = "Please Enter Email";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById("valemail").innerHTML = "Invalid Email";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById("valemail").innerHTML = "Invalid Email";
        return false;
    }

}