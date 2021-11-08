function newAccount() {
    let securityLevelPassw = 0;

    var famNameL = document.forms["LogIn4"]["famNameL"].value;
    var surNameL = document.forms["LogIn4"]["surNameL"].value;
    var passWordS = document.forms["LogIn4"]["passWordL"].value;
    var ConfpassWordS = document.forms["LogIn4"]["ConfpassWordL"].value;

    var mustHaveSpeciealSign = /[! @ ' $ % ^ & *]/;
    var countOfSpecialSign = passWordS.search(mustHaveSpeciealSign);

    var mustHaveUpCase = /[A-Z]/;
    var mustHaveLowCase = /[a-z]/;
    var mustHaveNumber = /[0-1]/;

    var countOfUpperCase = passWordS.search(mustHaveUpCase);
    var countOfLowerCase = passWordS.search(mustHaveLowCase);
    var countOfNumber = passWordS.search(mustHaveNumber);

    if (famNameL == null|| famNameL === "" ) {
        alert("Irgendwas muss da schon rein...!\n noch: " );
        return false;
    } if ((countOfSpecialSign > 0) ) {
        securityLevelPassw++;
    } if ((countOfSpecialSign <= 0) ){
         alert(" minimum 1 of : ! @ ' $ % ^ & *")
         return false;
    } if ((countOfLowerCase >= 0) || (countOfUpperCase >= 0) || (countOfNumber >= 0)) {
        securityLevelPassw++;
    } if (((countOfLowerCase < 0) || (countOfUpperCase < 0)) || (countOfNumber < 0) ) {
        alert(" minimum a lower- ,an uppercase and an number ");
        return false;
    } if ((passWordS.length >= 8)) {
        securityLevelPassw++;
    } if (((passWordS.length < 8)) ) {
        alert(" minimum count of Character: 8 !");
        return false;
    } if (surNameL == null || surNameL === "") {
        alert("Irgendwas muss da schon rein...!\n noch: " );
        return false;
    } if(passWordS != ConfpassWordS ){
        return false;
    } if(securityLevelPassw < 3 ){
        return false;
    }


}

function newAccount2() {}

/*
function checkSpecialCar(passw ){
    if ((passw^= "!") || (passw^= "@")|| (passw^="#")|| (passw^="$")|| (passw^= "%") || (passw^= "^")|| (passw^= "&")|| (passw^= "*") ){
       return  true;
    }else {
        alert("sonderzeichen fehlt mind. eines von\n  ! Q # $ % ^ & * ");
        return false;
    }
}*/
