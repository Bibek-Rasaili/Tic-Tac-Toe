var gamePattern = [];
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
var board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
//-1 signifies empty space
//0 will signify O
//1 will signify X

function mapArray() {
  //if box class = checked
  // check what class it has. - circle = 0, cross = 1

  //if cell1, has checked,
  // .hasClass circle, Board[0][1] = 0
  //else Board[0][1] = 1;



  //if box class doesn't have class "checked", do nothing, as its empty.



  //REMEMBER TO INITIALISE board ARRAY
  //in RESTGAME Function (basically once game is over/finished).
}


function checkWon() {

  var checkSum = 0;//when checking if 0 won
                    //1 when checking if X won

  alert("Player 1's 3rd turn has triggered me");
  console.log(board);

  //draw the webpage board into an array
  mapArray(); //board array is global, therefore don't need to assign this.
  // map the board into a 2D array

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
