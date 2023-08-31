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
//numero del computer
function randomNumberPc() {
  const pcNumber = Math.floor(Math.random() * 5) + 1;
  return pcNumber;
}
const cpuNumber = randomNumberPc();
console.log(cpuNumber);
//somma

//stabiliamo se è pari o dispari
//dichiariamo chi ha vinto
function evenOrOdd() {
  const sum = userNumber + cpuNumber;

  if (userNumber <= 5) {
    console.log(sum);
  } else {
    console.log("manca un numero per la somma");
  }

  let risultato = "";
  if (sum % 2 === 0) {
    risultato = "pari";
  } else {
    risultato = "dispari";
  }
  console.log(risultato);

  if (userOption === risultato) {
    console.log("Hai vinto");
  } else {
    console.log("hai perso");
  }
}
evenOrOdd();
