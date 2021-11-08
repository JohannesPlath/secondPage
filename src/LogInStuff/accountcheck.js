
var passWordL = null;
function newAccount() {
    let securityLevelPassw = 0;

    var famNameL = document.forms["LogIn4"]["famNameL"].value;
    var surNameL = document.forms["LogIn4"]["surNameL"].value;
    passWordL = document.forms["LogIn4"]["passWordL"].value;
    var ConfpassWordS = document.forms["LogIn4"]["ConfpassWordL"].value;

    var mustHaveSpeciealSign = /[! @'$%^&*]/;
    var countOfSpecialSign = passWordL.search(mustHaveSpeciealSign);

    var mustHaveUpCase = /[A-Z]/;
    var mustHaveLowCase = /[a-z]/;
    var mustHaveNumber = /[0-1]/;

    var countOfUpperCase = passWordL.search(mustHaveUpCase);
    var countOfLowerCase = passWordL.search(mustHaveLowCase);
    var countOfNumber = passWordL.search(mustHaveNumber);

    setBackroundcolor(securityLevelPassw);

    if (famNameL == null || famNameL === "") {
        alert("Irgendwas muss da schon rein...!\n noch: ");
        return false;
    }
    if ((countOfSpecialSign > 0)) {
        securityLevelPassw++;
        setBackroundcolor(securityLevelPassw);

    }
    if ((countOfSpecialSign <= 0)) {
        alert(" minimum 1 of : ! @ ' $ % ^ & *")
        return false;
    }
    if ((countOfLowerCase >= 0) || (countOfUpperCase >= 0) || (countOfNumber >= 0)) {
        securityLevelPassw++;
        setBackroundcolor(securityLevelPassw);
    }
    if (((countOfLowerCase < 0) || (countOfUpperCase < 0)) || (countOfNumber < 0)) {
        alert(" minimum a lower- and uppercase and an number ");
        return false;
    }
    if ((passWordL.length >= 8)) {
        securityLevelPassw++;
        setBackroundcolor(securityLevelPassw);
    }
    if (((passWordL.length < 8))) {
        alert(" minimum count of Character: 8 !");
        return false;
    }
    if (surNameL == null || surNameL === "") {
        alert("Irgendwas muss da schon rein...!\n noch: ");
        return false;
    }
    if (passWordL !== ConfpassWordS) {
        alert("password not eqaul!");
        return false;
    }
    if (securityLevelPassw < 3) {
        setBackroundcolor(securityLevelPassw);
        return false;
    }


}

function setBackroundcolor( level){

    if (level === 0 ) {
        document.getElementById("passWordL").setAttribute('class', 'red')
    }if (level === 1 ) {
        document.getElementById("passWordL").setAttribute('class', 'orange')
    }if (level === 2 ) {
        document.getElementById("passWordL").setAttribute('class', 'yellow' )
    }
    if (level === 3 ) {
        document.getElementById("passWordL").setAttribute('class', 'green' )
    }



}

/*
function checkSpecialCar(passw ){
    if ((passw^= "!") || (passw^= "@")|| (passw^="#")|| (passw^="$")|| (passw^= "%") || (passw^= "^")|| (passw^= "&")|| (passw^= "*") ){
       return  true;
    }else {
        alert("sonderzeichen fehlt mind. eines von\n  ! Q # $ % ^ & * ");
        return false;
    }
}*/
