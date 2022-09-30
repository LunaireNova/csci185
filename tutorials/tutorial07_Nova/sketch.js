function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 80, 'hotpink'); //x, y, diameter, color
    drawCircle(200, 100, 40, 'darkblue');
    drawCircle(300, 100, 80, 'teal');
    drawCircle(400, 100, 40, 'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 100, 50, 'teal');
    drawOval(200, 200, 50, 100, 'hotpink');
    drawOval(300, 200, 100, 50, 'darkblue');
    drawOval(400, 200, 50, 100, 'teal');


    // Exercise 3:
    drawBullseye(100, 300, 100, 'red', 'orange');
    drawBullseye(200, 300, 50, 'blue', 'green');
    drawBullseye(300, 300, 100, 'yellow', 'pink');
    drawBullseye(400, 300, 50, 'orange', 'yellow');
    

    // Exercise 4:
    drawFace(100, 400, 50);
    drawFace(200, 400, 100, 'red');
    drawFace(300, 400, 50);
    drawFace(400, 400, 100);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor

// drawCircle(300, 400, 40, 'yellow');
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY,);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, fillColor = 'red', fillColor1 = 'orange') {
    fill(fillColor1);
    circle(centerX, centerY, size);
    fill(fillColor);
    circle(centerX, centerY, size * .75);
    fill(fillColor1);
    circle(centerX, centerY, size * .5);
    fill(fillColor);
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, faceColor='yellow') {
    fill(faceColor);
    circle(centerX, centerY, size); // 100, 400, 50
    fill('black');  
    let sf = size / 6;
    circle(centerX - sf, centerY - sf, sf); // Left Eye
    circle(centerX + sf, centerY - sf, sf); // Right Eye

    //make a mouth:
    strokeWeight(size / 25)
    // line(
    //     centerX - sf*2, // x1
    //     centerY + sf, // y1
    //     centerX + sf*2, // x2
    //     centerY + sf // y2
   // ) //x1 y1 x2 y2

    noFill()
    stroke('black');
    curve(
        centerX - sf*2, centerY + 1.5*size, // contr+ol point
        centerX - sf*2, centerY + sf, //start point
        centerX + sf*2, centerY + sf, //end point
        centerX + sf*2, centerY + 1.5*size  //control point
    )
    strokeWeight(1)

   // arc(100, 100, 100, 200, -1, -.5, OPEN)

    // x, y, width, height, start, OPEN
}
