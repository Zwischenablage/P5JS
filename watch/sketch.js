function setup() {
  // put setup code here
	createCanvas(400,400);
	angleMode(DEGREES);
}

function draw() {
  // put drawing code here
	background(0);
	
	translate(200,200); //set center to center of circle
	rotate(-90);	//rotate everything by 90 degrees ccw
	
	let currentHour = hour();
	let currentMinute = minute();
	let currentSecond = second();
	
	let colorHour = color (158,213,204);
	let colorMinute = color (140,227,41);
	let colorSecond = color (255,89,100);
	
	noFill();
	strokeWeight(8);
	
	
	//hour
	stroke(colorHour);	
	let endHour = map(currentHour % 12, 0, 12, 0, 360);
	arc(0,0, 200,200, 0, endHour);
	
	//minute
	stroke(colorMinute);	
	let endMinute = map(currentMinute, 0, 60, 0, 360);
	arc(0,0, 220,220, 0, endMinute);
	
	//second
	stroke(colorSecond);	
	let endSecond = map(currentSecond, 0, 60, 0, 360);
	arc(0,0, 240,240, 0, endSecond	);
	
	
	push();
	rotate(endHour);
	stroke(colorHour);
	line(0,0,50,0);
	pop();
	
	push();
	strokeWeight(4);
	rotate(endMinute);
	stroke(colorMinute);
	line(0,0,50,0);
	pop();
	
	push();
	rotate(endSecond);
	stroke(colorSecond);
	line(0,0,50,0);
	pop();
	
	
}