var winPatterns = [
  [0, 1, 2, 0, 4, 8, 0, 3, 6], //0
  [1, 4, 7], //1
  [2, 4, 6, 2, 5, 8], //2
  [3, 4, 5], //3
  [6, 7, 8] // 6 (4)
];

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
  checkFor136(0,1,2);
  checkFor136(0,4,8);
  checkFor136(0,3,6);
}//012
//048
//036


function checkFor2() {
  checkFor136(2,4,6);
  checkFor136(2,5,8);
} //2,4,6
//2,5,8


function checkFor136(a,b,c) {
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
  console.log("Checks for "+a+".. complete." + hasWinner + " " + winnerSymbol);
}
//147
//678
//345


function hasWon() {

  if (!(board[0] === -1)){
    checkFor0();
  }

  if (!(board[1] === -1) && hasWinner == false) {
    console.log((hasWinner));
    checkFor136(1,4,7);
  }
  if (!(board[2] === -1) && hasWinner == false) {
    checkFor2();
  }

  if (!(board[3] === -1) && hasWinner == false) {
    console.log((hasWinner));
    console.log(board);
    checkFor136(3,4,5);
  }

  if (!(board[6] === -1) && hasWinner == false) {
    checkFor136(6,7,8);
  }

}



function mapArray() {
  for (var i = 0; i < 9; i++) {

    if ($('#cell' + (i + 1)).hasClass("checked")) {

      if ($('#cell' + (i + 1)).hasClass("circle")) {
        board[i] = 0;
      } else {
        board[i] = 1;
      }
      //if cell1, has checked,
      // .hasClass circle, Board[1] = 0
      //else Board[1] = 1;
      console.log(board);
    }
  }
  //no return required as board is global variable for now
  //REMEMBER TO INITIALISE board ARRAY in resetGame()
}

function checkWon() {
  console.log("Player 1's 3rd complete: Checking now begins");
  console.log(board);

  //draw the webpage board into an array
  mapArray(); //board array is global, therefore don't need to assign this.
  // map the board into a 1D array

  hasWon();
}



//Game finished.
function resetGame() {
  $('div[type="button"]').removeClass("checked");

  $('div[type="button"]').removeClass("circle");
  $('div[type="button"]').removeClass("cross");
  //removes classes checked,circle and cross.
  //important to remove circle and cross too else it will give wrong number on the Board
  //during checking if won...

  $('img').remove();
  //reset the game by removing the images and "checked" class from the divs/box(es)

  hasWinner = false; //No winners
  winnerSymbol = -1; //No symbol has won

  turnO = true; //O's turn
  turnOcount = 0; //O had 0 turns

  //player 1 goes first. and 0 boxes checked.

  console.log(board);
  for (var i = 0; i < board.length; i++) {
    board[i] = -1;
  }
  console.log("reset board " + board);

  $('#heading-title').text("Tic-Tac-Toe").removeClass("game-finished");//or .html()..
}


function addSymbol(id) {
  if (turnO) {
    $('#' + id).append("<img src='images/circle1.png' alt='circle'>");
    $('#' + id).addClass("checked circle");

    turnOcount++; //because O goes first
    //first winning condition possible is when O is on 3rd turn.
  } else {
    $('#' + id).append("<img src='images/cross.png' alt='cross'>");
    $('#' + id).addClass("checked cross");
  }
  //Next click should have different symbol (a boolean to implement turns)

  turnO = !turnO; //so if its true, its set to false, if false, set to true.
  //this toggles the boolean to implement player turns
}

function lockCells() {
  $('.cell').addClass("checked"); //by adding pressed class,
                            //it stops user continuing until reset.
}


//Add EventListener to boxes
$('div[type="button"]').click(function() {

  if (!$('#' + this.id).hasClass("checked")) {
    addSymbol(this.id);
    //Adding Xs and Os

    if (turnOcount >= 3) {
      checkWon();
      //start checking if either player has won
    }



      // //return false if no one won;
      // if (winnerSymbol === 0)
      //    alert("Player 0 has won");
      // if (winnerSymbol === 1)
      //    alert("Player X has won")
      //cant be else cuz its show X won if O not true.

    if (hasWinner) {
      $('#heading-title').text("Congratulations, Player "+(winnerSymbol === 0 ? "O":"X")+" won!").addClass("game-finished");

      lockCells(); //lock cells so after a player has already won, they can't still keep addding symbol to the box/board
      setTimeout(resetGame, 4000);

      //restGame()
      //Also Remember to RESET/initialise the variable such as turnO, turnOcount, etc
    } else {
      //If has winner, run win statements.
      //However, if all cells filled and still no winner: Delcare/run draw statements and reset

      //run this if all box filled.
      if($('.checked').length === 9)
      {
        $('#heading-title').text("Draw").addClass("game-finished");
        //Dont really need to lock cells as this should only run if all are full/checked
        setTimeout(resetGame, 4000);
      }
      //***
      //Don't need to do if full and hasWinner == false
      //because this is in an else statement where this will only run IF no one has won!!

    }
  } else {
    //animate the header red for timeout
    $('#heading-title').fadeOut(200).fadeIn(200);

    $('#heading-title').addClass("error");
    setTimeout(function(){
      $('#heading-title').removeClass("error");
    },400);
    //prevents adding symbol of checked
  }
});

//Reset Button click listener
$('#reset').click(function() {
  resetGame();
});
