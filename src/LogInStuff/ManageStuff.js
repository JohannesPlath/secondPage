

function addStudent(){
    let famNameS = document.forms["LogIn3"]["famNameS"].value;
    let First_Name = document.forms["addStuff"]["First_Name"].value;
    let Last_Name = document.forms["addStuff"]["Last_Name"].value;
    let DOB = document.forms["addStuff"]["DOB"].value;
    let DOY = document.forms["addStuff"]["DOY"].value;

    let Department = document.forms["addStuff"]["Department"].value;
    let Mail = document.forms["addStuff"]["Mail"].value;
    let actualDate = new Date().setHours(0,0,0,0)
    let maxDate = new Date(year + 60, month, day );
    let minDate = new Date(year - 17, month, day)
    let minJoiningDate = new Date()

    if (DOB <= minDate){
        alert("to young to study")
        return false;
    }
    if (DOB >= maxDate) {
        alert("to old to study")
        return false;
    }
}