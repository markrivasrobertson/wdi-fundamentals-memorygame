var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []
var createBoard = function() {
	var gameBoard = document.getElementById('game-board');
	var createCard = function() {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	gameBoard.appendChild(cardElement);
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
};
var isMatch = function(cardsInPlay) {
 	if (cardsInPlay[0] == cardsInPlay[1]) {
	alert("You found a match!");
} 	else {
	alert("Sorry, try again.");
}
	var doneCards = document.getElementsByClassName('card');
	doneCards[0].innerHTML = '';
	doneCards[1].innerHTML = '';
	doneCards[2].innerHTML = '';
	doneCards[3].innerHTML = '';

 }; 
var isTwoCards = function() {
	var cardType = this.getAttribute('data-card');
	cardsInPlay.push(cardType);
	if (cardType == "queen") {
		this.innerHTML = '<img src="Queen.png">'
	} else {
		this.innerHTML = '<img src="King.png">'

	}

	if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];}

};

//document.gameBoard.appendChild('createCard');


var x = 4;
var output = '';
// var result = '';
for (var i = 0; i < cards.length; i += 1) {
	createCard();
};
}
createBoard();
// document.getElementsByTagName('div')[0].appendChild(createCard);
// gameBoard.appendChild(createCard);
// console.log(createCard);

//document.getElementByID('game-board').innerHTML = '';
//alert('hi suzie');
/*var board = document.getElementByID('game-board');
var cards = 4;

attempt to clear cards after two cards clicked.  destroyed divs
var divs = document.getElementsByTagName('div')
	for (var i = 0; i < divs.length; i++) {
	divs[]

document.getElementsByTagName('footer').innerHTML = '<p>Bobby boy got blood bones</p>';
var x = 4;
for (var i = 0; i < x; i += 1) {
document.createElement('div');}

/*
TELLS THE PLAYER WHETHER THEY'VE MATCHED CARDS

if (cardFour == cardTwo) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}
*/
