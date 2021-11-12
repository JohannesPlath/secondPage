

const rezept = {
    'Titel': "Mole",
    'Serves': 2,
    'Ingredians':["Cinnamon", "cumin","cacao"]

}
console.log(rezept.Titel);
console.log(rezept.Serves)
for (let i in rezept){
    console.log(rezept[i]);
}

let bookArray = [
    [Titel = 'Handbuch', Author='Schmidt', hasBeenread=false],
        [Titel='Handbuch der Webentw', Author='Schmidt und co.', hasBeenread=false],
            [Titel='Haensel', Author='Rudi', hasBeenread=true]];

function printBooks(){
    for (var i=0; i < bookArray.length; i++){
        var book = bookArray[i];
        var bookinfo = book.Author + "wrote" + book.Titel
        if (book.hasBeenread){
            console.log("has been read" + bookinfo)
        }else {
            console.log("don´t be readed" + bookinfo)
        }

    }
}