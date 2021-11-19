
var Students = [
    {
        "ID": "1",
        "FirstName": "Tom",
        "    LastName " :"Tailor ",
        "Gender": "1",
        "DOB  ": "1995/08/25",
        "Department": "IT",
        "EmailID ": "tomholland@gmail.com",
        "JoiningYr " : "2019"
    },
    {
        "ID": "3",
        "FirstName": "Joesephin",
        "LastName ": "Harris",
        "Gender": "2",
        "DOB": "1990/07/25",
        "Department": "IT",
        "EmailID ": "joesyH@gmail.com",
        "JoiningYr ": "2019"
    },
    {
        "ID": "4",
        "FirstName": "Billa",
        "LastName ": "Bong",
        "Gender": "2",
        "DOB": "1995/07/25",
        "Department": "Maschienenbau",
        "EmailID ": "joeharry@gmail.com",
        "JoiningYr ": "2020"
    }, {
        "ID": "5",
        "FirstName": "Pitt",
        "LastName ": "Pottery",
        "Gender": "1",
        "DOB": "1994/07/25",
        "Department": "WEB",
        "EmailID ": "PiPy@gmail.com",
        "JoiningYr ": "2021"
    },
    {
        "ID": "6",
        "FirstName": "Fred",
        "LastName ": "Parry",
        "Gender": "1",
        "DOB": "1994/07/25",
        "Department": "Maschienenbau",
        "EmailID ": "joeharry@gmail.com",
        "JoiningYr ": "2020"
    },
    {
        "ID": "7",
        "FirstName": "Philipp",
        "LastName ": "Morrris",
        "Gender": "1",
        "DOB": "1998/07/25",
        "Department": "IT",
        "EmailID ": "joesyH@gmail.com",
        "JoiningYr ": "2020"
    },
    {
        "ID": "8",
        "FirstName": "Berta",
        "LastName ": "Broetchen",
        "Gender": "2",
        "DOB": "1980/07/25",
        "Department": "WEB",
        "EmailID ": "BeBro@gmail.com",
        "JoiningYr ": "2020"
    }

]
function showSelectedList(){
    if (typeof document.getElementById("SS/WS") == "Summer")
        filterJoiningYear(Students, )
}


let searchedStudentsIT = Students.filter (function (e) {
        return e.Department == "IT";
    });

/*
function loadJSON(" ./Students.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});*/

function filterDepartment(students, Department) {
    return students.filter(function (e){
        return e.Department===Department
    });
}

function filterJoiningYear(students, Semester){
    if(Semester==="Summer"){
        return students.filter(function (e){
            return e.JoiningDate.slice(5,7) >= 4 && e.JoiningDate.slice(5,7) <=9
        });} else if (Semester==="Winter"){
        return students.filter(function (e){
            return e.JoiningDate.slice(5,7) >= 9 || e.JoiningDate.slice(5,7) <=1
        });
    }

}
