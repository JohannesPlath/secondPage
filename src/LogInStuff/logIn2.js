

function showPassw() {
    if (document.getElementById('passWordA').type == 'password') {
        document.getElementById('passwd').setAttribute('type', 'text')
        this.innerText = 'Passwort verstecken';
    } else {
        document.getElementById('passWordA').type == 'password';
        this.innerText = 'Show Passwort ';
    }
}

var counter = 4;
function logInCheckAdmin() {
    counter --;
    var famNameA = document.forms["LogIn2"]["famNameA"].value;
    var surNameA = document.forms["LogIn2"]["surNameA"].value;
    var passWordA = document.forms["LogIn2"]["passWordA"].value;

    if (counter <= 0) {
        document.getElementById("btnSubmit").disabled = true;
        document.getElementById("famNameA").disable=true;
        alert("zu oft falsch")
        return false;
    }else if (famNameA == null || famNameA === "") {
        alert("Irgendwas muss da schon rein...!\n noch: "+counter+" Versuche");
        return false;
    } else if (famNameA !== "admin") {
        alert("‘Login Credentials Incorrect\n noch: "+counter+" Versuche");
        return false;
    } else if (surNameA == null || "") {
        alert("Irgendwas muss da schon rein...\n noch: "+counter+" Versuche");
        return false;
    } else if (surNameA !== "admin") {
        alert("‘Login Credentials Incorrect\n noch: "+counter+" Versuche");
        return false;
    } else if (passWordA == null || "") {
        alert("Irgendwas muss da schon rein...\n noch: "+counter+" Versuche");
        return false;
    } else if (passWordA !== "admin") {
            alert("‘Login Credentials Incorrect\n noch: "+counter+" Versuche");
            return false;
    }



}
var counter2 = 4;
function logInCheckStudent() {
    var famNameS = document.forms["LogIn3"]["famNameS"].value;
    var surNameS = document.forms["LogIn3"]["surNameS"].value;
    var passWordS = document.forms["LogIn3"]["passWordS"].value;

    counter2--;
    if (counter2 <= 0) {
        document.getElementById("btnSubmit").disabled = true;
        alert("zu oft falsch")
        return false;
    }else if (famNameS == null || famNameS === "") {
        alert("Irgendwas muss da schon rein...\n noch: "+counter2+" Versuche");
        return false;
    } else if (famNameS !== "pl") {
        alert("‘Login Credentials Incorrect\n noch: "+counter2+" Versuche");
        return false;
    } else if (surNameS == null || "") {
        alert("Irgendwas muss da schon rein...\n noch: "+counter2+" Versuche");
        return false;
    } else if (surNameS !== "jo") {
        alert("‘Login Credentials Incorrect\n noch: "+counter2+" Versuche");
        return false;
    } else if (passWordS == null || "") {
        alert("Irgendwas muss da schon rein...\n noch: "+counter2+" Versuche");
        return false;
    } else if (passWordS !== "123") {
        alert("‘Login Credentials Incorrect\n noch: "+counter2+" Versuche");
        return false;
    }
    window.location.href = "studentsWorkPage.html"

}

