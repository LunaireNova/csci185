const circleData = [
    {x: 500, y: 50, d: 100, speedX: 3, speedY: 3, color: 'crimson'},
    {x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: 'pink'},
    {x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: 'orange'},
    {x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: 'green'},
    {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, color: 'blue'},
    {x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: 'black'}
];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// initialize variables outside of the function:


const ball = {
    x:700,
    y:500,
    d:50,
    speedX:3,
    speedY: -2
};



// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:
function draw() {
    //frameRate(1)
    clear();

    // same:
    // fill('red');
    // circle(ball.x, ball.y, ball.d);
    // ball.x += ball.speedX;
    // ball.y +=1 //ball.speedY;

    // same:
    let i = 0;
    while (i < circleData.length) {

    const  ball = circleData[i];

    fill(ball.color)
    circle(ball.x, ball.y, ball.d);
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    i++;
   
}

drawGrid(canvasWidth, canvasHeight);
}
