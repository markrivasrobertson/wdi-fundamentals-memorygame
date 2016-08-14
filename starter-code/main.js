var gameBoard = document.getElementById('game-board');
var createCard = function() {
	var div = document.createElement('div');
	div.className = 'card';
	gameBoard.appendChild(div);
};

//document.gameBoard.appendChild('createCard');


var x = 4;
var output = '';
// var result = '';
for (var i = 0; i < x; i += 1) {
	createCard();
};


// document.getElementsByTagName('div')[0].appendChild(createCard);
// gameBoard.appendChild(createCard);
console.log(createCard);

//document.getElementByID('game-board').innerHTML = '';
//alert('hi suzie');
/*var board = document.getElementByID('game-board');
var cards = 4;



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
