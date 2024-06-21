/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse()
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.*/

let pets2 = pets.shift(1);
console.log(pets2);
pets.push(pets2);
console.log(pets)


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "xyz 123456 xy";
  console.log(cars);
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newCar = {
  brand: "Fiat",
  model: "Panda",
  color: "White",
  trims: ["4x4", "sport"],
}
cars.push(newCar);
console.log(cars)


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = []


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/



/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let indice = 0;

while (indice < numericArray.length) {
  console.log(numericArray[indice]);
  if (numericArray[indice] === 32) {
    break;
  }
  indice++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
switch (charactersArray) {
  case 0: a === 0;
    console.log(a = 0);
    break;
  case 1: b === 1;
    console.log(b = 1);
    break;
  case 2: c === 2;
    console.log(c = 2);
    break;
  case 3: d === 3;
    console.log(d = 3);
    break;
  case 4: e === 4;
    console.log(e = 4);
    break;
  case 5: f === 5;
    console.log(f = 5);
    break;
  case 6: g === 6;
    console.log(g = 6);
    break;
  case 7: h === 7;
    console.log(h = 7);
    break;
  case 8: i === 8;
    console.log(i = 8);
    break;
  case 9: l === 9;
    console.log(l = 9);
    break;
  case 10: m === 10;
    console.log(m = 10);
    break;
  case 11: n === 11;
    console.log(n = 11);
    break;
  case 12: o === 12;
    console.log(o = 12);
    break;
  case 13: p === 13;
    console.log(p = 13);
    break;
  case 14: q === 14;
    console.log(q = 14);
    break;
  case 15: r === 15;
    console.log(r = 15);
    break;
  case 16: s === 16;
    console.log(s = 16);
    break;
  case 17: t === 17;
    console.log(t = 17);
    break;
  case 18: u === 18;
    console.log(u = 18);
    break;
  case 19: v === 19;
    console.log(v = 19);
    break;
  case 20: z === 20;
    console.log(z = 20);
    break;
}
