var circleArray = [];

function onKeyDown(event) {
	var circle = createRandomCircle();
	circleArray.push(circle);
}

function onFrame(event) {
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].fillColor.hue += 2;
		circleArray[i].scale(.9);
	}
}

function createRandomCircle() {
	var maxPoint = new Point(view.size.width, view.size.height);
	// the code below is equivalent to Point(Math.random(), Math.random());
	var randomPoint = Point.random();
	// get a random point on the canvas
	var point = maxPoint * randomPoint;
	// create a circle at the random poin on the canvas
	var newCircle = new Path.Circle(new Point(point), 500);
	newCircle.fillColor = "blue";
	return newCircle;
}