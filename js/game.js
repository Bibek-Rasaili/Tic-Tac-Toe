// var winPatterns = [
//   [0, 1, 2, 0, 4, 8, 0, 3, 6], //0
//   [1, 4, 7], //1
//   [2, 4, 6, 2, 5, 8], //2
//   [3, 4, 5], //3
//   [6, 7, 8] // 6 (4)
// ]; //For reference

//See GitHub master branch for comments.
//Diff master and this branch:
// Comments and logs removed drastically.
//CheckFor136 function renamed to CheckFor function on this branch
//Delay is 2200 not 4000 in this one. (4000, was for dev purposes).


var turnO = true;

var turnOcount = 0;
//This will be used to trigger check won when its 3; Os 3rd turn

//0,  1,  2,
var board = [-1, -1, -1,
  //3,  4,  5,
  -1, -1, -1,
  //6,  7,  8.
  -1, -1, -1
];
//-1 signifies empty space
//0 will signify O
//1 will signify X

var hasWinner = false;
var winnerSymbol = -1; // set to 0 if O wins
//set to 1 if X wins


function checkFor0() {
  checkFor(0,1,2);
  checkFor(0,4,8);
  checkFor(0,3,6);
}//012
//048
//036


function checkFor2() {
  checkFor(2,4,6);
  checkFor(2,5,8);
} //2,4,6
//2,5,8


function checkFor(a,b,c) {
  //1
  if (board[a] === board[b] && board[b] === board[c] && !(board[a] === -1)) {
    hasWinner = true;
    //won.
    if (board[a] === 0)
      winnerSymbol = 0;
    else
      winnerSymbol = 1;
    //can use else here as someone has won, so its 1 or the Other...
  }
}
//147
//678
//345

//Checking if a player has won. This is optimized to reduce unnecessary code runs.
//This DOESN'T check ALL the boxes unnecessarily unless required -i.e. check only if not empty
function hasWon() {

  if (!(board[0] === -1)){
    checkFor0();
  }

  if (!(board[1] === -1) && hasWinner == false) {
    checkFor(1,4,7);
  }
  if (!(board[2] === -1) && hasWinner == false) {
    checkFor2();
  }

  if (!(board[3] === -1) && hasWinner == false) {
    checkFor(3,4,5);
  }

  if (!(board[6] === -1) && hasWinner == false) {
    checkFor(6,7,8);
  }
}

//Maps the webpage game cells(HTML) to board array (JS), for computation
function mapArray() {
  for (var i = 0; i < 9; i++) {

    if ($('#cell' + (i + 1)).hasClass("checked")) {

      if ($('#cell' + (i + 1)).hasClass("circle")) {
        board[i] = 0;
      } else {
        board[i] = 1;
      }
    }
  }
}

//This function is called from the EventListener,
//this calls oher necessary functions to check if A player has won.
function checkWon() {
  mapArray();
  hasWon();
}

//Resets board, boxes, game.
function resetGame() {
  $('div[type="button"]').removeClass("checked");

  $('div[type="button"]').removeClass("circle");
  $('div[type="button"]').removeClass("cross");

  $('img').remove();
  //reset the game by removing the images and "checked" class from the divs/box(es)

  hasWinner = false;
  winnerSymbol = -1;

  turnO = true;
  turnOcount = 0;

  for (var i = 0; i < board.length; i++) {
    board[i] = -1;
  }

  $('#heading-title').text("Tic-Tac-Toe").removeClass("game-finished");
}

//Adding X or O to the webpage/boxes/div
function addSymbol(id) {
  if (turnO) {
    $('#' + id).append("<img src='images/circle1.png' alt='circle'>");
    $('#' + id).addClass("checked circle");

    turnOcount++;
  } else {
    $('#' + id).append("<img src='images/cross.png' alt='cross'>");
    $('#' + id).addClass("checked cross");
  }

  turnO = !turnO;
}

//Locks cells at end game to prevent further input before the game resets
function lockCells() {
  $('.cell').addClass("checked");
}


//Add EventListener to boxes
$('div[type="button"]').click(function() {

  if (!$('#' + this.id).hasClass("checked")) {
    addSymbol(this.id);

    if (turnOcount >= 3) {
      checkWon();
    }

    if (hasWinner) {
      $('#heading-title').text("Congratulations, Player "+(winnerSymbol === 0 ? "O":"X")+" won!").addClass("game-finished");
      lockCells();
      setTimeout(resetGame, 2200);
    } else {
      if($('.checked').length === 9)
      {
        $('#heading-title').text("Draw").addClass("game-finished");
        setTimeout(resetGame, 2200);
      }
    }
  } else {
    $('#heading-title').fadeOut(200).fadeIn(200);

    $('#heading-title').addClass("error");
    setTimeout(function(){
      $('#heading-title').removeClass("error");
    },400);
  }
});

//Reset Button click listener
$('#reset').click(function() {
  resetGame();
});
