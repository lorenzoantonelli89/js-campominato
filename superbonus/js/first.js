var scorePlay = 1;

var arrTd = [];

function onClick(){
  var clickedTd = this;
  var clickedTdValue = parseInt(clickedTd.dataset.number);
  var square = clickedTd.children[0];
  var bombFound = clickedTd.children[1];
  if (bombRnd.includes(clickedTdValue)) {
    square.style.display = "none";
    bombFound.style.display = "block";
  }else {
    arrTd.push(clickedTd);
    square.style.display = "none";
    if (arrTd.length < 10) {
      document.getElementById('score').innerHTML = '00' + scorePlay++;
    }else {
      document.getElementById('score').innerHTML = '0' + scorePlay++;
    }
  }

  clickedTd.removeEventListener('click', onClick);

}

var tdBtn = document.getElementsByClassName("table-cell");


for (var i = 0; i < tdBtn.length; i++) {
  var elemTd = tdBtn[i];
  elemTd.addEventListener('click', onClick);
}

var bombRnd = [];

function generaBomb() {
  while (bombRnd.length < bomb) {
    var rnd = Math.floor(Math.random() * 100) + 1;
    if (!bombRnd.includes(rnd)) {
      bombRnd.push(rnd);
    }

  }

}

var bomb = 0;

function selectDifficult() {
  var clickedDifficult = this;
  var clickedDifficultValue = clickedDifficult.dataset.value;

  if (clickedDifficultValue == 0) {
    bomb = 15;
  }else if (clickedDifficultValue == 1) {
    bomb = 30;
  }else if (clickedDifficultValue == 2) {
    bomb = 50;
  }

  generaBomb();

}

var difficult = document.getElementsByClassName("difficulty");
  for (var i = 0; i < difficult.length; i++) {
    difficult[i].addEventListener('click', selectDifficult);
  }


function refreshGame() {
  location.reload();
}

var refreshBtn = document.getElementById('refresh');

refreshBtn.addEventListener('click', refreshGame);
