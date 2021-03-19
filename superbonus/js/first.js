var scorePlay = 1;

var arrTd = [];

function onClick(){
  var clickedTd = this;
  var clickedTdValue = parseInt(clickedTd.dataset.number);
  var square = clickedTd.children[0];

  var lost = document.getElementById('lost');
  var win = document.getElementById('win');

  var squareBtn = document.getElementsByClassName("square-click");
  for (var i = 0; i < squareBtn.length; i++) {
    var elemSquare = squareBtn[i];
    if (bombRnd.includes(clickedTdValue)) {
      elemSquare.style.opacity = "0";
      lost.style.display = "block";
    }
  }
  if (!bombRnd.includes(clickedTdValue)) {
    arrTd.push(clickedTd);
    console.log(arrTd.length);
    square.style.opacity = "0";
    if (arrTd.length < 10) {
      document.getElementById('score').innerHTML = '00' + scorePlay++;
    }else{
      document.getElementById('score').innerHTML = '0' + scorePlay++;
    }
    if (arrTd.length == (100 - bomb)) {
      win.style.display = "block";
    }

  }

  clickedTd.removeEventListener('click', onClick);

}


var bombRnd = [];

function generaBomb() {
  var tdBtn = document.getElementsByClassName("table-cell");

  while (bombRnd.length < bomb) {
    var rnd = Math.floor(Math.random() * 100) + 1;
    if (!bombRnd.includes(rnd)) {
      bombRnd.push(rnd);
      tdBtn[rnd - 1].innerHTML += '<i class="fas fa-bomb"></i>';

    }

  }

}

var tdBtn = document.getElementsByClassName("table-cell");

var bomb = 0;

function selectDifficult() {
  var clickedDifficult = this;
  var clickedDifficultValue = clickedDifficult.dataset.value;

  if (clickedDifficultValue == 0) {
    bomb = 12;
    for (var i = 0; i < tdBtn.length; i++) {
      var elemTd = tdBtn[i];
      elemTd.addEventListener('click', onClick);
    }
  }else if (clickedDifficultValue == 1) {
    bomb = 20;
    for (var i = 0; i < tdBtn.length; i++) {
      var elemTd = tdBtn[i];
      elemTd.addEventListener('click', onClick);
    }
  }else if (clickedDifficultValue == 2) {
    bomb = 30;
    for (var i = 0; i < tdBtn.length; i++) {
      var elemTd = tdBtn[i];
      elemTd.addEventListener('click', onClick);
    }
  }

  generaBomb();

  this.style.color = "blue";
  this.style.textDecoration = "underline";
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
