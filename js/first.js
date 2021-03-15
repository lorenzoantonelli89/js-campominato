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

var result = document.getElementById('result');

var numMathRnd = 100;
var valueUtente = 84;

var difficultBtn = document.getElementById('difficult');

difficultBtn.addEventListener('change', function(){
  var difficult = document.getElementById('difficult').value;

  if (difficult == 1) {
     numMathRnd = 100;
     valueUtente = 84;
  }else if (difficult == 2) {
     numMathRnd = 80;
     valueUtente = 64;
  }else if (difficult == 3) {
    numMathRnd = 50;
    valueUtente = 34;
  }

});

function numPc(){
  arrNumRnd = [];

  while (arrNumRnd.length < 16) {
    var rnd = Math.floor(Math.random() * numMathRnd) + 1;
    if (!arrNumRnd.includes(rnd)) {
      arrNumRnd.push(rnd);
    }
  }

  console.log(arrNumRnd);
}


function numPlayer(){

  numUtente = [];

  while (numUtente.length < valueUtente) {
    var numInsert = parseInt(prompt('Scrivi un numero compreso tra 1 e ' + numMathRnd));
    if (numUtente.includes(numInsert)) {
      alert('Hai inserito un numero doppio');
      continue
    }
    numUtente.push(numInsert);

    if (arrNumRnd.includes(numInsert)) {
      result.innerHTML = 'Hai perso ma hai totalizzato: ' + (numUtente.length - 1) + ' punti';
      console.log('Hai perso ma hai totalizzato: ' + (numUtente.length - 1) + ' punti');
      break;
    }else if (numUtente.length == valueUtente) {
      result.innerHTML = 'Hai vinto';
      console.log('Hai vinto');
    }

  }
}

function campominato(){
  numPc();
  numPlayer();
}


var playBtn = document.getElementById('play');

playBtn.addEventListener('click', function(){

  campominato();

});
