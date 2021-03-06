var Students = [
    {
        "ID": "1",
        "FirstName": "Tom",
        "LastName": "Tailor ",
        "Gender": "1",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningYr": "2019.10.01"
    },
    {
        "ID": "3",
        "FirstName": "Joesephin",
        "LastName": "Harris",
        "Gender": "2",
        "DOB": "1990/07/25",
        "Department": "Wirtschaftswissenschaft",
        "EmailID": "joesyH@gmail.com",
        "JoiningYr": "2019.10.01"
    },
    {
        "ID": "4",
        "FirstName": "Billa",
        "LastName": "Bong",
        "Gender": "2",
        "DOB": "1995/07/25",
        "Department": "Maschienenbau",
        "EmailID": "joeharry@gmail.com",
        "JoiningYr": "2020.04.01"
    }, {
        "ID": "5",
        "FirstName": "Pitt",
        "LastName": "Pottery",
        "Gender": "1",
        "DOB": "1994/07/25",
        "Department": "WEB",
        "EmailID": "PiPy@gmail.com",
        "JoiningYr": "2021.04.01"
    },
    {
        "ID": "6",
        "FirstName": "Fred",
        "LastName": "Parry",
        "Gender": "1",
        "DOB": "1994/07/25",
        "Department": "Maschienenbau",
        "EmailID": "joeharry@gmail.com",
        "JoiningYr": "2020.10.01"
    },
    {
        "ID": "7",
        "FirstName": "Philipp",
        "LastName": "Morrris",
        "Gender": "1",
        "DOB": "1998/07/25",
        "Department": "IT",
        "EmailID": "joesyH@gmail.com",
        "JoiningYr": "2020.04.01"
    },
    {
        "ID": "8",
        "FirstName": "Berta",
        "LastName": "Broetchen",
        "Gender": "2",
        "DOB": "1980/07/25",
        "Department": "WEB",
        "EmailID": "BeBro@gmail.com",
        "JoiningYr": "2020.10.01"
    },
    {
        "ID": "9",
        "FirstName": "Tomas",
        "LastName": "Cock ",
        "Gender": "1",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomcock@gmail.com",
        "JoiningYr": "2019.10.01"
    }, {
        "ID": "10",
        "FirstName": "Patty",
        "LastName": "Poo",
        "Gender": "2",
        "DOB": "1994/05/05",
        "Department": "WEB",
        "EmailID": "papoo@gmail.com",
        "JoiningYr": "2019.04.01"
    },
    {
        "ID": 11,
        "FirstName": "Frederick",
        "LastName": "Ohlsen",
        "Gender": "1",
        "DOB": "1980/06/25",
        "Department": "Maschienenbau",
        "EmailID": "dragQuee69@gmail.com",
        "JoiningYr": "2018.10.01"
    },
    {
        "ID": "12",
        "FirstName": "Philippa",
        "LastName": "Morrrisset",
        "Gender": "2",
        "DOB": "1998/10/25",
        "Department": "IT",
        "EmailID": "phimo@yahoo.com",
        "JoiningYr": "2020.04.01"
    }, {
        "ID": "13",
        "FirstName": "Marty",
        "LastName": "McFly",
        "Gender": "1",
        "DOB": "1994/07/25",
        "Department": "WEB",
        "EmailID": "marfly@gmail.com",
        "JoiningYr": "2020.10.01"
    },


]

function showSelectedList() {
    let Semester = document.getElementById("SS/WS")
    let department = document.getElementById("Department")
    var actualList = filterListe(Students, Semester.value, department.value)
    showFiltered(actualList);
}


function filterListe(students, Semester, department) {
    if (Semester === "Summer") {
        return students.filter(function (student) {
            var month = parseInt(student.JoiningYr.slice(5, 7))
            return  month === 4 && department == student.Department
        });
    } else if (Semester === "Winter") {
        return students.filter(function (student) {
            var month = parseInt(student.JoiningYr.slice(5, 7))
            return month === 10  && department == student.Department
        });
    }

}


function showFiltered(students) {
    var ul = document.getElementById("actualisedList");
    while (ul.firstChild)
        ul.removeChild(ul.firstChild);
    for (let i = 0; i < students.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(completetEntry(students[i])));
        ul.appendChild(li);
    }
}

function completetEntry(student) {
    return student.LastName + ", " + student.FirstName + "," + student.DOB + "," + student.Department + "," + student.JoiningYr;
}

let searchedStudentsIT = Students.filter(function (e) {
    return e.Department == "IT";
});

/*
function loadJSON(" ./Students.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});*/

function filterDepartment(students, Department) {
    return students.filter(function (student) {
        return student.Department === Department
    });
}




function requestJson() {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(xhttp.responseText)
        }
    };
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhttp.send();
}
