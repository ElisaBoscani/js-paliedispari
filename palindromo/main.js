/* Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */
const userWord = prompt("Scrivi una parola");
let word = userWord.length;
function palindroma() {
  for (let i = 0; i < word; i++) {
    if (userWord[i] === userWord[word - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}
const palindromo = palindroma();
console.log(palindromo);
if (palindromo) {
  console.log("è palindroma");
} else {
  console.log("non è palindroma");
}
