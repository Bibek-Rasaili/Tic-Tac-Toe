var gamePattern = [];
var turnO = true;


function addSymbol(id) {
  if (turnO) {
    $('#' + id).append("<img src='images/circle1.png' alt='circle'>");
      $('#'+id).addClass("checked");
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
});


//if winning combination, win/game over!
// GAME ALGORITHM
