var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var span = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

span.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColors(pickedColor);
		}  
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
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