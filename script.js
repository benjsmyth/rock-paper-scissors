/* Corresponding values for Rock, Paper, and Scissors.

Rock = 0;
Paper = 1;
Scissors = 2;

*/

// Beginning counters for player and computer.
var playerCounter = 0;
var computerCounter = 0;

// Instructs the computer to choose one of three values at random.
function computerPlay() {
	return Math.floor(Math.random() * 3);
}

// Plays a single round of the game.
function singleRound() {
	var playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
	var computerSelection = computerPlay();

	if (playerSelection === 'rock' && computerSelection === 0) {
		alert('It\'s a tie!');

	}	else if (playerSelection === 'rock' && computerSelection === 1) {
		alert('You lose! Paper beats rock.');
		return computerCounter += 1;

	}	else if (playerSelection === 'rock' && computerSelection === 2) {
		alert('You win! Rock beats scissors.')
		return playerCounter += 1;

	}	

	if (playerSelection === 'paper' && computerSelection === 0) {
		alert('You win! Paper beats rock.');
		return playerCounter += 1;

	}	else if (playerSelection === 'paper' && computerSelection === 1) {
		alert('It\'s a tie!');

	}	else if (playerSelection === 'paper' && computerSelection === 2) {
		alert('You lose! Scissors beat paper.')
		return computerCounter += 1;

	}

	if (playerSelection === 'scissors' && computerSelection === 0) {
		alert('You lose! Rock beats scissors.');
		return computerCounter += 1;

	}	else if (playerSelection === 'scissors' && computerSelection === 1) {
		alert('You win! Scissors beat paper.');
		return playerCounter += 1;

	}	else if (playerSelection === 'scissors' && computerSelection === 2) {
		alert('It\'s a tie!')

	}
}

// Plays five rounds of the game, reports the score after each match, and then reports the final score and winner at the end.
function newGame() {
	singleRound();
		alert(`Player has ${playerCounter} ||| Computer has ${computerCounter}`);
	singleRound();
		alert(`Player has ${playerCounter} ||| Computer has ${computerCounter}`);
	singleRound();
		alert(`Player has ${playerCounter} ||| Computer has ${computerCounter}`);
	singleRound();
		alert(`Player has ${playerCounter} ||| Computer has ${computerCounter}`);
	singleRound();

	if (playerCounter > computerCounter) {
		alert(`Congratulations! You won with ${playerCounter} point(s). The computer finished with ${computerCounter}.`);

	}	else if (playerCounter < computerCounter) {
		alert(`Rats! You lost with ${playerCounter} point(s). The computer won with ${computerCounter}.`);

	}	else {
		alert(`Game end! It was a tie, with you and the computer both ending with ${playerCounter} point(s).`);

	}
}