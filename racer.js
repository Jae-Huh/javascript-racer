$(function() {
//put your js in here
var player1 = '.player1';
var player2 = '.player2';
  $(window).keydown(function(event) {

    //if q is pressed do something
    if(event.keyCode === 81) {
      movePlayer(player1);
    }
    //if p is pressed do something else
    if(event.keyCode === 80) {
      movePlayer(player2);
    }
    console.log(event.keyCode);
  })
})

var player1Wins = 0;
var player2Wins = 0;
var player1WinningStreak = 0;
var player2WinningStreak = 0;

function movePlayer(playerNumber) {
  //find the active cell for this player - $()
  //stop it being active - # removeClass()
  //find the cells neighbour # next()
  //make it active # addClass()
  $(playerNumber).find('.active').removeClass().next().addClass('active');

  //if I don't have a neighbour, create an alert saying game over # alert() if
  //count the number of wins for each player
  if ($('.player1').children().last().hasClass('active')) {
    window.setTimeout(player1HasWon, 50);
    player1Wins += 1;
    player1WinningStreak += 1;
    player2WinningStreak = 0;
    window.setTimeout(resetGame, 100);
  } else if ($('.player2').children().last().hasClass('active')) {
    window.setTimeout(player2HasWon, 50);
    player2Wins += 1;
    player2WinningStreak += 1;
    player1WinningStreak = 0;
    window.setTimeout(resetGame, 100);
  }
  $('.player1Score').text('Player 1 wins: ' + player1Wins)
  $('.player1Streak').text('Current winning streak of player 1: ' + player1WinningStreak);
  $('.player2Score').text('Player 2 wins: ' + player2Wins);
  $('.player2Streak').text('Current winning streak of player 2: ' + player2WinningStreak);
}

function player1HasWon() {
  alert('Player 1 has won!');
}
function player2HasWon() {
  alert('Player 2 has won!');
}

//resets a game
function resetGame() {
  $('tr').find('.active').removeClass()
  $(':first-child').addClass('active');
}

//bonus points

//display the high scores on the page # - text()
