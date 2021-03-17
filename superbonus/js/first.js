
function onClick(){
  var clickedTd = this;
  var clickedTdValue = parseInt(clickedTd.dataset.number);
  var square = clickedTd.children[0];
  var bombFound = clickedTd.children[1];
  console.log(clickedTdValue, bombRnd);
  console.log(square);
  if (bombRnd.includes(clickedTdValue)) {
    square.style.display = "none";
    bombFound.style.display = "block";
  }else {
    square.style.display = "none";
  }

  clickedTd.removeEventListener('click', onClick);
  console.log(clickedTdValue);

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

    console.log(rnd);
  }

}

var bomb = 15;

function selectDifficult() {

  var difficult = document.getElementsByClassName("difficulty");
    for (var i = 0; i < difficult.length; i++) {

      difficult[i].addEventListener('click', function(){
        var clickedDifficult = this;
        var clickedDifficultValue = clickedDifficult.dataset.value;
        console.log(clickedDifficultValue);

        if (clickedDifficultValue == 0) {
          bomb = 15;
        }else if (clickedDifficultValue == 1) {
          bomb = 30;
        }else if (clickedDifficultValue == 2) {
          bomb = 50;
        }

        generaBomb();

      });
    }
}
selectDifficult();
