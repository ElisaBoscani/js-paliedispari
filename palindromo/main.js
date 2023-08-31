/* Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */
const userWord = prompt("Scrivi una parola");
function palindroma() {
  for (let i = 0; i < userWord.length; i++) {
    if (userWord.length === userWord[-1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}
const palindromo = palindroma();
console.log(palindromo);
