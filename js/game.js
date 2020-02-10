
var gamePattern = [];
var turnO = true;


function addSymbol(id) {
  if (turnO)
    $('#'+id).append("<img src='images/circle.png' alt='circle'>");
  else
    $('#'+id).append("<img src='images/cross.png' alt='cross'>");

  turnO = !turnO; //so if its true, its set to false, if false, set to true.
  //this toggles the boolean to implement player turns
}

//Add EventListener to boxes
$('div[type="button"]').click(function(){
  addSymbol(this.id);

});



//when called add a symbol, (If not already - check)

//Next click should have different symbol (a boolean to implement turns)


//if winning combination, win/game over!
