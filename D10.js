/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;
console.log("ESERCIZIO A :", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);
console.log("ESERCIZIO B :", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Philip",
  surname: "Aduteye",
  age: "27",
};
console.log("ESERCIZIO C :", me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("ESERCIZIO D :", me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "CSS", "JAVASCRIPT"];
console.log("ESERCIZIO E :", me.skills);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("PYTHON");
console.log("ESERCIZIO F :", me.skills);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log("ESERCIZIO G :", me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  const randNum = Math.floor(Math.random() * 7);
  return randNum;
}

console.log("FUNZIONI-ESERCIZIO 1 :", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else return num2;
};

console.log("FUNZIONI-ESERCIZIO 2 :", whoIsBigger(7, 3));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe (str) {
  const words = str.split(" ");
  return words.map(str => `${str}`);
}

console.log("FUNZIONI-ESERCIZIO 3 :", splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (string, boolean) {
  if (boolean === true) {
    return string.substring(1);
  } else if (boolean === false) {
    return string.slice(0, -1);
  }
};

console.log("FUNZIONI-ESERCIZIO 4a :", deleteOne("I love coding", true));
console.log("FUNZIONI-ESERCIZIO 4b :", deleteOne("I love coding", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function (str) {
  return str.replace(/[0-9]/g, "");

};

console.log("FUNZIONI-ESERCIZIO 5 :", onlyLetters("I have 4 dogs"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (str) {
  let et = str.includes("@");
  let dotIt = str.includes(".it");
  let dotCom = str.includes(".com");
  if (et && (dotIt || dotCom) == true) {
    return "valid email";
  } else {
    return "non valid email";
  }
};


console.log("FUNZIONI-ESERCIZIO 6a :", isThisAnEmail("philedu30@gmail.com"));
console.log("FUNZIONI-ESERCIZIO 6b :", isThisAnEmail("philedu30.com"));
console.log("FUNZIONI-ESERCIZIO 6c :", isThisAnEmail("philedu30@gmail"));
console.log("FUNZIONI-ESERCIZIO 6d :", isThisAnEmail("philedu30@gmail.it"));
console.log("FUNZIONI-ESERCIZIO 6e :", isThisAnEmail("philedu30gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  const daysOfWeek = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
  let day = new Date();
  let dayIndex = day.getDay();
  let today = daysOfWeek[dayIndex - 1];
  return today;
};
console.log("FUNZIONI-ESERCIZIO 7 :", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (numberOfDices) {
  let sum = 0;
  let result = [];

  for (let i = 0; i < numberOfDices; i++) {
    let value = dice();
    sum += value;
    result.push(value);
  }

  const ObjResult = {
    sum: sum,
    value: result,
  };

  return ObjResult;
};

console.log("FUNZIONI-ESERCIZIO 8 :", rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (x) {
  const givenDate = new Date(x);
  const CurrentDate = new Date();

  const dateDiff = CurrentDate - givenDate;
  const daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  return daysDiff;
};

console.log("FUNZIONI-ESERCIZIO 9 :", howManyDays("2023-02-02"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function (birthday) {
  const date = new Date();
  const birthDate = new Date(birthday);

  const birthdayDay = date.getDate();
  const birthdayMonth = date.getMonth() + 1;

  const dayBirthday = birthDate.getDate();
  const monthBirthday = birthDate.getMonth() + 1;

  if (birthdayDay === dayBirthday && birthdayMonth === monthBirthday) {
    return true;
  } else {
    return false;
  }
};

console.log("FUNZIONI-ESERCIZIO 10 :", isTodayMyBirthday("2024-02-02"));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = (obj, str) => {
  delete obj[str];
  return obj;
};
const Simon = {
  nome: "Simon Nowell",
  età: 87,
  professione: "Show Host",
};
console.log("ARRAY & OGGETTI:ESERCIZIO 11 :", deleteProp(Simon, "age"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function () {
  let recentMovie = 0;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year?.trim()) {
      const year = parseInt(movies[i].Year);
      if (!isNaN(year) && recentMovie < year) {
        recentMovie = year;
      }
    }
  }
  return recentMovie;
};

console.log("ARRAY & OGGETTI:ESERCIZIO 12 :", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function () {
  return movies.length;
};

console.log("ARRAY & OGGETTI:ESERCIZIO 13 :",countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyYears =  function () {
  return movies.map((film) => film.Year)
}
console.log("ARRAY & OGGETTI:ESERCIZIO 14 :",onlyYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function () {
  return movies.filter((film) => film.Year <= 1999)
}
console.log("ARRAY & OGGETTI:ESERCIZIO 15 :",onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function(){
  let sum = 0;
  movies.forEach((film) => sum += parseInt(film.Year));
  return sum;
}
console.log("ARRAY & OGGETTI:ESERCIZIO 16 :",sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function(string){
  return movies.filter((film) => film.Title.includes(string))
}
console.log("ARRAY & OGGETTI:ESERCIZIO 17 :",searchByTitle("Ring"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function(string){
  let liste = {};
  let match =  movies.filter((film) => film.Title.includes(string));
  let unmatch = movies.filter((film) => !film.Title.includes(string));
  liste.match = match;
  liste.unmatch = unmatch;
  return liste;
}

console.log("ARRAY & OGGETTI:ESERCIZIO 18 :",searchAndDivide("Ring"));


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function(film){
  movies.splice(film,1);
  return movies;
}
console.log("ARRAY & OGGETTI:ESERCIZIO 19 :", removeIndex(2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectElementId = function(){
  let element = document.querySelector('#container')
  return element.innerHTML;
}


console.log("ARRAY & OGGETTI:ESERCIZIO 20 :", selectElementId());
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selectElementTagName = function(){
  let element = document.getElementsByTagName('td')
  return element[0].innerHTML;
}

console.log("ARRAY & OGGETTI:ESERCIZIO 21 :",selectElementTagName());
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const printElementTagName = function(){
  let element = document.getElementsByTagName('td')
  for(i = 0; i < element.length; i++){
    let x = element[i].innerHTML;
    console.log(x);
  }
}
printElementTagName();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const changeColor = function(){
  let elements = document.querySelectorAll('a');
  for(i = 0; i < elements.length; i++){
    elements[i].classList.add('bcolor')
    
  }
}
console.log("ARRAY & OGGETTI:ESERCIZIO 23 :", ("Colour of the DOM link"));
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addListItem = function(){
  let list = document.querySelector('#myList');
  let listItem = document.createElement('li');
  listItem.innerText = "Have a nice day";
  list.appendChild(listItem);
}

console.log("ARRAY & OGGETTI:ESERCIZIO 24 :",("Add"));

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const removeListItems = function(){
  let list = document.querySelector('#myList');
  list.innerHTML = "";
}

let buttons = document.querySelectorAll('button');
buttons[0].addEventListener('click', addListItem);
buttons[1].addEventListener('click', removeListItems);

console.log("ARRAY & OGGETTI:ESERCIZIO 25 :",("Reset"));

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClassTr = function(){
  let trList = document.getElementsByTagName('tr');
  for(i = 0 ; i < trList.length ; i++){
    trList[i].classList.add('test');
  }
}
console.log("ARRAY & OGGETTI:ESERCIZIO 26 :", ("tr coloured"));
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
