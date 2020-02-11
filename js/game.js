var winPatterns = [
  [0, 1, 2, 0, 4, 8, 0, 3, 6], //0
  [1, 4, 7], //1
  [2, 4, 6, 2, 5, 8], //2
  [3, 4, 5], //3
  [6, 7, 8] // 6 (4)
];
//See Algorithm Pattern image/plan to understand


var turnO = true;

var turnOcount = 0;
//documents/tracks the amout of turn O (/player1) has had.
//This will be used to trigger check won when its 3;

// var board = [
//   [-1, -1, -1],
//   [-1, -1, -1],
//   [-1, -1, -1]
// ];
//Decided to use 1D array instead of 2D and it doable with either
//1D array is faster and consumes less memory as it require less allocation
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

function mapArray() {
  //if box class = checked
  // check what class it has. - circle = 0, cross = 1
  for (var i = 0; i < 9; i++) {
    if ($('#cell' + (i + 1)).hasClass("checked")) {
      //if cell1, has checked,
      // .hasClass circle, Board[1] = 0
      //else Board[1] = 1;

      if ($('#cell' + (i + 1)).hasClass("circle")) {
        console.log("I have class circle: " + $('#cell' + (i + 1)).hasClass("circle"));
        board[i] = 0;
      } else {
        console.log("I have class cross: " + $('#cell' + (i + 1)).hasClass("cross"));
        board[i] = 1;
      }

      console.log(board);

    } else {
      //its empty, so do nothing.
      //REDUNDANT
    }
  }
  //if box class doesn't have class "checked", do nothing, as its empty.

  //no return required as board is global variable for now

  //IMPORTANT
  //REMEMBER TO INITIALISE board ARRAY
  //in RESTGAME Function (basically once game is over/finished).
}

function hasWon() {
  //would take in array as param if not global.
  console.log("in hasWon");
  //MAIN Algorithm here!!
  var hasWinner = false; //start of assuming no one as hasWon
  //then set to true if pattern exist.

  //If not -1, then run through the Checks/pattern - DEPENDING on the location.

  var winnerSymbol = -1; // set to 0 if O wins
  //set to 1 if X wins
  var same = 0;
  //Algorithm Pattern check plan

  for (var i = 0; i <= 3; i++) {
    if (board[i] > -1) {
      console.log("I am board cell no. " + (i + 1) + " and I am not empty, I have: " + board[i]);

      var symbolCheck = 0; //0s can be replaced by this.

      if(hasWinner)
      {
        break; //return true at hasWinner - in the win conditions
              //IMPORTANT
              // put the winnerSymbol on BEFORE the - return hasWinner tho!!!!!
      }

      //Done third
      if (i === 0) {
        //checks for 0
      }

      if (i === 1) {
        //checks for 1
        if (board[i] === symbolCheck) {
          //check for O
          same++;
          if (board[4] === symbolCheck) {
            same++;
            if (board[7] === symbolCheck) {
              same++;
              //WIN
              winnerSymbol = symbolCheck;
              hasWinner = true;
              // return hasWinner;

            } else {
              //No win - failed at 3rd/last spot
              same = 0;
              hasWinner = false;
              winnerSymbol = -1;
            }
          } else {
            //failed at 2nd spot
            same = 0;
          }
        } else {// check for X
          //symbolCheck is 0 right now.
          symbolCheck++;
          if (board[i] === 1) {
            same++;
            if (board[4] === 1) {
              same++;
              if (board[7] === 1) {
                same++;
                //WIN
                hasWinner = true;
                winnerSymbol = 1;
                //symbolCheck = 0; not necessary here has after win,
                // it should call RESET function
              } else {
                //no win - failed at 3rd spot.
                same = 0;
                winnerSymbol = -1;
                hasWinner = false;
                symbolCheck = 0;
              }
            } else {
              //failed at 2nd Spot
              same = 0;
              symbolCheck = 0;
              //Since it failed. this will allow to check for O
              //first again.
            }

          } else {
            console.log("This should never run!");
            symbolCheck = 0;// this should never run
//as its in else statement added for extra security.
          }

        }
      }

      if (i === 2) {
        //checks for 2
      }

      if (i === 3) {
        //checks for 3
      }
    }
  }

  if (board[6] > -1) { //Done first
    console.log("I am board cell no. " + (i + 1) + " and I am not empty, I have: " + board[i]);

    if (board[6] === 0) {
      //check for O
      same++;
      if (board[7] === 0) {
        same++;
        if (board[8] === 0) {
          //if won,
          same++;
          hasWinner = true;
          winnerSymbol = 0;
        } else {
          //if 3rd one don't match, reset all/these
          same = 0;
          hasWinner = false;
          winnerSymbol = -1;
        }
      }
    } else //Done second
    {
      //check for 1
      for (var i = 6; i <= 8; i++) {

        if (board[i] === 1) {
          same++; //will increment at 6, 7 and 8 if matched.

          if (i === winPatterns[4][2]) { //i=8
            if (same === 3) { //if matched at all 3, WIN

              hasWinner = true;
              winnerSymbol = 1;

            } else {
              //ELSE, this is the end of the road. RESET
              same = 0;
              hasWinner = false;
              winnerSymbol = -1;

            }
          }
        }



        //____________
        // Formulated from:
        // if (board[6] === 1)
        //   same++;
        // if (board[7] === 1)
        //   same++;
        // if (board[8] === 1)
        //   same++;
        //   hasWinner = true;
        //   winnerSymbol = 1;
        // else
        //   same=0;
        //   hasWinner = false;
        //   winnerSymbol = -1;
        //_____________
      }



    }
    //run pattern checks here
  }
  //if board[0] != -1
  // then run checks

  //if board[1] != -1
  // run checks

  //if board[2,3,6] != -1
  // check









  //returns true if won,
  //false if not.
}


function checkWon() {

  var checkSum = 0; //when checking if 0 won
  //1 when checking if X won

  alert("Player 1's 3rd turn has triggered me");
  console.log(board);

  //draw the webpage board into an array
  mapArray(); //board array is global, therefore don't need to assign this.
  // map the board into a 1D array


  hasWon();
  // return hasWon(); THIS WILL BE IMPLEMENTED
  //check for O wins
  //check for X wins
  //return true if someone wins

  //return that with also soemthing ...(TBA)
  //OR
  //return or set a global variable like
  // var Owon = -1; to 0 is O won
  // Owon to 1; if X won..

  //return false if no one won;
}




function resetGame() {
  $('div[type="button"]').removeClass("checked");

  $('img').remove();
  //reset the game by removing the images and "checked" class from the divs/box(es)
  turnO = true;
  turnOcount = 0;
  //Game finished.
  //player 1 goes first. and 0 boxes checked.
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

//Add EventListener to boxes
$('div[type="button"]').click(function() {

  if (!$('#' + this.id).hasClass("checked")) {
    addSymbol(this.id);




    //if winning combination, win/game over!
    // GAME ALGORITHM
    var won = false;
    //if turnOcount === 3 then winPossible = true, if (winPossible) then run...
    //or just have if turnOcount >= 3 then run...

    if (turnOcount >= 3)
      won = checkWon(); //under dev





    if (won) {
      alert("Congratulations, you won!");
      setTimeout(resetGame, 2000);
      //restGame()

      //Also Remember to RESET/initialise the variable
      //such as turnO, turnOcount, etc
    }




  } else {
    alert("Soz it has been checked, love");
    //when called adding a symbol, (check If not already  )
  }


  //Because its player 1 and 2,
  // THERE will be no such thing as "GAME OVER".

  //If it was against comp/algorithm, we can have IF statement to check who won
  // and have else statement here to process "Game Over" when or if required.
});


$('#reset').click(function() {
  resetGame();
});
