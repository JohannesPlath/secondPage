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

function showSelectedList() {
    let department = document.getElementById("Department")
    var stuffList = requestJson();
    console.log(stuffList)
    //var actualList = filterListe(sStuffList,  department.value)
    showFiltered(stuffList);
}

function showFiltered(stuffList) {
    var ul = document.getElementById("actualStuffList");
    while (ul.firstChild)
        ul.removeChild(ul.firstChild);
    for (let i = 0; i < stuffList.length; i++) {  // toDo .length knallt ... Uncaught TypeError: Cannot read properties of undendefined (reading 'length')
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(completetEntry(stuffList[i])));
        ul.appendChild(li);
    }
}
function completetEntry(stuff) {
        return stuff.name + ", " + stuff.username + "," + stuff.phone + "," + stuff.id + "," + stuff.email;
    }