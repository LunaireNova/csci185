function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("grey");

    //invoke draw smiley:
    drawSmiley(700, 300, 300);


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/circle
    // fill('red');
    // circle(750, 300, 500);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('teal');
    // ellipse(650, 200, 60, 100);

    // fill('teal');
    // ellipse(850, 200, 60, 100);

    // fill('black');
    // ellipse(850, 200, 10, 100);

    // fill('black');
    // ellipse(650, 200, 10, 100);

    // fill('black');
    // ellipse(750, 400, 300, 10, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    // Rectangle: https://p5js.org/reference/#/p5/rect
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function drawSmiley(x, y, diameter) {
    fill('yellow');
    circle(x, y, diameter); // x, y, diameter

}