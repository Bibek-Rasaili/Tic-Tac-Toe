var gamePattern = [];
var turnO = true;

var turnOcount = 0;
//documents/tracks the amout of turn O (/player1) has had.
//This will be used to trigger check won when its 3;


function checkWon(){

  alert("Player 1's 3rd turn has triggered me");






}




function resetGame(){
  $('div[type="button"]').removeClass("checked");

  $('img').remove();
  //reset the game by removing the images and "checked" class from the divs/box(es)
}

function addSymbol(id) {
  if (turnO) {
    $('#' + id).append("<img src='images/circle1.png' alt='circle'>");
      $('#'+id).addClass("checked");

      turnOcount++;//because O goes first
      //first winning condition possible is when O is on 3rd turn.
  } else {
    $('#' + id).append("<img src='images/cross.png' alt='cross'>");
      $('#'+id).addClass("checked");
  }
  //Next click should have different symbol (a boolean to implement turns)

  turnO = !turnO; //so if its true, its set to false, if false, set to true.
  //this toggles the boolean to implement player turns
}

//Add EventListener to boxes
$('div[type="button"]').click(function() {

  if(!$('#'+this.id).hasClass("checked"))
    addSymbol(this.id);
  else
    alert("Soz it has been checked, love");
//when called adding a symbol, (check If not already  )



//if winning combination, win/game over!
// GAME ALGORITHM
  var won = false;
  //if turnOcount === 3 then winPossible = true, if (winPossible) then run...
  //or just have if turnOcount >= 3 then run...

  if (turnOcount >= 3)
    won = checkWon(); //under dev





  if (won)
  {
    alert("Congratulations, you won!");
    setTimeout(resetGame,2000);
    //restGame()

    //Also Remember to RESET/initialise the variable
    //such as turnO, turnOcount, etc
  }
//Because its player 1 and 2,
// THERE will be no such thing as "GAME OVER".

//If it was against comp/algorithm, we can have IF statement to check who won
// and have else statement here to process "Game Over" when or if required.
});


  $('#reset').click(function(){
    resetGame();
  });
