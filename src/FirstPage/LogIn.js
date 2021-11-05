function logInCheck() {
    var famName = document.forms["LogIn"]["famName"].value;
    var surName = document.forms["LogIn"]["surName"].value;
    var passWord = document.forms["LogIn"]["passWord"].value;

    if (famName == null || famName == "") {
        alert("Irgendwas muss da schon rein...");
        return false;
    } else if (famName != "pl") {
        alert("falscher Nachname")
        return false;
    } else if (surName == null || "") {
        alert("Irgendwas muss da schon rein...");
        return false;
    } else if (surName !== "jo") {
        alert("falscher Vorname")
        return false;
    } else if (passWord == null || "") {
        alert("Irgendwas muss da schon rein...");
        return false;
    } else if (passWord != "123") {
        alert("falsches Passw.")
        return false;
    }
    /* return true;*/
}
