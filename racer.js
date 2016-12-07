$(function() {
//put your js in here
var player1 = '.player1';
var player2 = '.player2';
  $(window).keydown(function(event) {

    //if q is pressed do something
    if(event.keyCode === 81) {
      movePlayer(player1)
    }
    //if p is pressed do something else
    if(event.keyCode === 80) {
      movePlayer(player2)
    }
    console.log(event.keyCode)
  })
})


function movePlayer(playerNumber) {
  //find the active cell for this player - $()
  //stop it being active - # removeClass()
  //find the cells neighbour # next()
  //make it active # addClass()
  $(playerNumber).find('.active').removeClass().next().addClass('active');

  //if I don't have a neighbour, create an alert saying game over # alert() if
  if ($(playerNumber).children().last().hasClass('active')) {
    alert('Game Over');
  }
}


//bonus points
//reset a game
//count the number of wins for each player
//display the high scores on the page # - text()
