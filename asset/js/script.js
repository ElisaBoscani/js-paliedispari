/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 Dichiariamo chi ha vinto. */

//numero del utente
const userOption = prompt("Scegli pari o dispari");
const userNumber = Number(prompt("Scrivi un numero da 1 a 5"));
console.log(userOption);
if (userNumber <= 5) {
  console.log(userNumber);
} else {
  console.log("il numero non è valido");
}
//numero del compiuter
function randomNumberPc() {
  const pcNumber = Math.floor(Math.random() * 5) + 1;
  return pcNumber;
}
const randomNumber = randomNumberPc();
console.log(randomNumber);
//somma
const som = userNumber + randomNumber;

if (userNumber <= 5) {
  console.log(som);
} else {
  console.log("manca un numero per la somma");
}
//stabiliamo se è pari o dispari
function evenOodd() {
  if (som % 2 == 0) {
    console.log(" pari");
  } else {
    console.log("dispari");
  }
}
const evenOdd = evenOodd();

//dichiariamo chi ha vinto
if (userOption !== evenOdd) {
  console.log("Hai perso");
} else {
  console.log("hai vinto");
}
