/* Corresponding values for Rock, Paper, and Scissors.

Rock = 0;
Paper = 1;
Scissors = 2;

*/

window.onload = function() {
	document.getElementById('music').play();
	document.getElementById('music').volume = 0.35;
}

document.getElementById('rocksound').volume = 0.3;
document.getElementById('papersound').volume = 0.3;
document.getElementById('scissorssound').volume = 1;
document.getElementById('winmusic').volume = 0.4;
document.getElementById('losemusic').volume = 0.5;

// Variables for DOM manipulation.
var playerScore = document.querySelector('#playerscore');
var computerScore = document.querySelector('#computerscore');
var announceText = document.querySelector('#announcetext');

// Functions for the event listeners.
var playRock = function() {
	playRound('rock');
}

var playPaper = function() {
	playRound('paper');
}

var playScissors = function() {
	playRound('scissors');
}

var rockSound = function() {
	document.getElementById('rocksound').play();
	document.getElementById('rocksound').currentTime = 0;
}

var paperSound = function() {
	document.getElementById('papersound').play();
	document.getElementById('papersound').currentTime = 0;
}

var scissorsSound = function() {
	document.getElementById('scissorssound').play();
	document.getElementById('scissorssound').currentTime = 0;
}

var winMusic = function() {
	document.getElementById('winmusic').play();
}

var loseMusic = function() {
	document.getElementById('losemusic').play();
}

// Event listeners for each icon.
var rockimg = document.getElementById('rockimg');
rockimg.addEventListener('click', playRock);
rockimg.addEventListener('click', rockSound);

var paperimg = document.getElementById('paperimg');
paperimg.addEventListener('click', playPaper);
paperimg.addEventListener('click', paperSound);

var scissorsimg = document.querySelector('#scissorsimg');
scissorsimg.addEventListener('click', playScissors);
scissorsimg.addEventListener('click', scissorsSound);

// Beginning counters for player and computer.
var playerCounter = 0;
var computerCounter = 0;

// Instructs the computer to choose one of three values at random.
function computerPlay() {
	return Math.floor(Math.random() * 3);
}

// Plays a single round of the game.
function playRound(selection) {
	var playerSelection = selection;
	var computerSelection = computerPlay();

	if (playerSelection === 'rock' && computerSelection === 0) {
		playerCounter += 0;
		computerCounter += 0;
		playerScore.textContent = String(playerCounter);
		computerScore.textContent = String(computerCounter);
		announceText.textContent = `It\'s a tie! The score is ${playerCounter} to ${computerCounter}.`
	}	
	else if (playerSelection === 'rock' && computerSelection === 1) {
		playerCounter += 0;
		computerCounter += 1;
		playerScore.textContent = String(playerCounter);
		computerScore.textContent = String(computerCounter);
		announceText.textContent = `You lose! Paper beats rock. The score is ${playerCounter} to ${computerCounter}.`
	}	
	else if (playerSelection === 'rock' && computerSelection === 2) {
		playerCounter += 1;
		computerCounter += 0;
		playerScore.textContent = String(playerCounter);
		computerScore.textContent = String(computerCounter);
		announceText.textContent = `You win! Rock beats scissors. The score is ${playerCounter} to ${computerCounter}.`		
	}	

	if (playerSelection === 'paper' && computerSelection === 0) {
		playerCounter += 1;
		computerCounter += 0;
		playerScore.textContent = String(playerCounter);
		computerScore.textContent = String(computerCounter);
		announceText.textContent = `You win! Paper beats rock. The score is ${playerCounter} to ${computerCounter}.`	
	}	
	else if (playerSelection === 'paper' && computerSelection === 1) {
		playerCounter += 0;
		computerCounter += 0;
		playerScore.textContent = String(playerCounter);
		computerScore.textContent = String(computerCounter);
		announceText.textContent = `It\'s a tie! The score is ${playerCounter} to ${computerCounter}.`
	}	
	else if (playerSelection === 'paper' && computerSelection === 2) {
		playerCounter += 0;
		computerCounter += 1;
		playerScore.textContent = String(playerCounter);
		computerScore.textContent = String(computerCounter);
		announceText.textContent = `You lose! Scissors beat paper. The score is ${playerCounter} to ${computerCounter}.`
	}

	if (playerSelection === 'scissors' && computerSelection === 0) {
		playerCounter += 0;
		computerCounter += 1;
		playerScore.textContent = String(playerCounter);
		computerScore.textContent = String(computerCounter);
		announceText.textContent = `You lose! Rock beats scissors. The score is ${playerCounter} to ${computerCounter}.`
	}	
	else if (playerSelection === 'scissors' && computerSelection === 1) {
		playerCounter += 1;
		computerCounter += 0;
		playerScore.textContent = String(playerCounter);
		computerScore.textContent = String(computerCounter);
		announceText.textContent = `You win! Scissors beat paper. The score is ${playerCounter} to ${computerCounter}.`	
	}
	else if (playerSelection === 'scissors' && computerSelection === 2) {
		playerCounter += 0;
		computerCounter += 0;
		playerScore.textContent = String(playerCounter);
		computerScore.textContent = String(computerCounter);
		announceText.textContent = `It\'s a tie! The score is ${playerCounter} to ${computerCounter}.`
	}
	if (playerCounter === 5 && playerCounter > computerCounter) {
		announceText.textContent = `Congratulations! You won against the computer. Refresh the browser if you'd like to play again.`
		rockimg.removeEventListener('click', playRock);
		paperimg.removeEventListener('click', playPaper);
		scissorsimg.removeEventListener('click', playScissors);

		rockimg.removeEventListener('click', rockSound);
		paperimg.removeEventListener('click', paperSound);
		scissorsimg.removeEventListener('click', scissorsSound);

		rockimg.classList.replace('startgame', 'endgame');
		paperimg.classList.replace('startgame', 'endgame');
		scissorsimg.classList.replace('startgame', 'endgame');

		music.pause();
		winMusic();
	}	
	else if (computerCounter === 5 && playerCounter < computerCounter) {
		announceText.textContent = `Rats! The computer beat you. Refresh the browser if you'd like to play again.`;
		rockimg.removeEventListener('click', playRock);
		paperimg.removeEventListener('click', playPaper);
		scissorsimg.removeEventListener('click', playScissors);

		rockimg.removeEventListener('click', rockSound);
		paperimg.removeEventListener('click', paperSound);
		scissorsimg.removeEventListener('click', scissorsSound);

		rockimg.classList.replace('startgame', 'endgame');
		paperimg.classList.replace('startgame', 'endgame');
		scissorsimg.classList.replace('startgame', 'endgame');

		music.pause();
		loseMusic();
	}	
	else if (playerCounter === 5 && computerCounter === 5) {
		announceText.textContent = `Game end! It was a tie. Refresh the browser if you'd like to play again.`;
		rockimg.removeEventListener('click', playRock);
		paperimg.removeEventListener('click', playPaper);
		scissorsimg.removeEventListener('click', playScissors);

		rockimg.removeEventListener('click', rockSound);
		paperimg.removeEventListener('click', paperSound);
		scissorsimg.removeEventListener('click', scissorsSound);

		rockimg.classList.replace('startgame', 'endgame');
		paperimg.classList.replace('startgame', 'endgame');
		scissorsimg.classList.replace('startgame', 'endgame');

		music.pause();
	}
}