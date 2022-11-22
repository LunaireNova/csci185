const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:



    drawGrid(canvasWidth, canvasHeight);

    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn
}


// function definition goes here:


function drawElmo(x, y, size, colour, hasNose) {
    fill(colour)
    ellipse(x, y, size);
    fill('white')
    ellipse(x-(.1*size), y-(.1*size), size/5)
    ellipse(x+(.1*size), y-(.1*size), size/5)
    fill('black')
    ellipse(x-(.1*size), y-(.1*size), size/15)
    ellipse(x+(.1*size), y-(.1*size), size/15)
    if (hasNose) {
        fill('purple')
        ellipse(x, y, size / 6, size / 4)
    }
}
