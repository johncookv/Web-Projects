var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var isEasy = false;

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(pickedColor);
		}  
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

resetButton.addEventListener("click", function() {
	isEasy ? resetGame(3) : resetGame(6);
});
easyButton.addEventListener("click", function() {
	isEasy = true;
	resetGame(3);
	for (var i = 3; i < squares.length; i++) {
		squares[i].style.backgroundColor = "#232323";
	}
})

hardButton.addEventListener("click", function() {
	isEasy = false;
	resetGame(6);
})

function resetGame(num) {
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "#232323";
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
	h1.style.backgroundColor = pickedColor;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		var color = randomColor();
		arr.push(color);
	}

	return arr;
}

function randomColor() {
	var color = "rgb(";
	for(var i = 0; i < 3; i++) {
		var random = Math.floor(Math.random() * 256);
		color += random;
		if (i < 2) {
			color += ", ";
		}
	}
	return color + ")";
}