// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

function numPc(){

  arrNumRnd = [];

  for (var i = 0; i < 8; i++) {
    var rnd = Math.floor(Math.random() * 13) + 1;
    console.log(rnd);
    if (arrNumRnd.includes(rnd)) {
      i--
    }else {
      arrNumRnd.push(rnd);
    }
  }

  console.log(arrNumRnd);
}


function numUtente(){

  numUtente = [];

  for (var i = 0; i < 5; i++) {
    var numInsert = parseInt(prompt('scrivi un numero'));
    if (numUtente.includes(numInsert)) {
      alert('hai inserito un numero doppio');
      i--
    }else {
      numUtente.push(numInsert);

      if (arrNumRnd.includes(numInsert)) {
        console.log('hai perso ma hai totalizzato: ' + (numUtente.length - 1) + ' punti');
        break;
      }else if (numUtente.length == 5) {
        console.log('hai vinto');
      }
    }
  }
}


function campominato(){
  numPc();
  numUtente();
}

campominato();
