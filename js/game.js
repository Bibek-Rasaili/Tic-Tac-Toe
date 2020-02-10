
var gamePattern = [];


function addSymbol(id) {
  $('#'+id).append("<img src='images/circle.png' alt='circle'>");
}

//Add EventListener to boxes
$('div[type="button"]').click(function(){
  addSymbol(this.id);

});



//when called add a symbol, (If not already - check)

//Next click should have different symbol (a boolean to implement turns)


//if winning combination, win/game over!
