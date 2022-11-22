//const player = { x: canvasWidth/2, y: canvasHeight/2, d: 200, color: 'purple', originalColor: 'purple' };


const circleData = [
    {x: 500, y: 50, d: 40, speedX: 3, speedY: 3, color: 'teal', originalColor: 'teal'},
    {x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: 'orange', originalColor: 'orange'},
    {x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: 'yellow', originalColor: 'yellow'},
    {x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: 'green', originalColor: 'green'},
    {x: 140, y: 120, d: 50, speedX: 0, speedY: -0.5, color: 'blue', originalColor: 'blue'},
    {x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: 'purple', originalColor: 'purple'}
];

const bubbles = [];

const faces= [];

let y = 400;
let x = 200;


const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


function setup() {
    
    createCanvas(canvasWidth, canvasHeight);
    let i = 0;
    while (i < 400){
        const data = {
            x:Math.random()*canvasWidth,
            y:Math.random()*canvasHeight,
            w:Math.random()*8,
            speed:Math.random()*3,
            color: 'white'
        };
            bubbles.push(data);
            i++
    }
  //  faces.push({x:200,y:400})

    
    
   // drawGrid(canvasWidth, canvasHeight);
}

function drawcollision() {
    

    // initialize the player color to default:
    face.color = face.originalColor;

    for (let i = 0; i < circleData.length; i++) {
        let ball = circleData[i];

        // 1. check intersection 
        bounceIfIntersects(ball, face);
        for(let j = 0; j < faces.length; j++){
            bounceIfIntersects(ball, faces[j]);
        }

        // 2. modify the x and y coordinates of the current ball:
        move(ball);

        // 3. draw ball: 
        fill(ball.color);
        circle(ball.x, ball.y, ball.d);
    }

    // after drawing all the balls, draw the player.
    fill(face.color);
    circle(face.x, face.y, face.d);}


    function bounceIfIntersects(ball1, face) {
        let spring = 1;
        let minDist = ball1.d/2 + face.d/2;
        let dx = face.x - ball1.x;
        let dy = face.y - ball1.y;
        const distance = dist(ball1.x, ball1.y, face.x, face.y);
        if (distance <= minDist) {
            let angle = atan2(dy, dx);
            let targetX = ball1.x + cos(angle) * minDist;
            let targetY = ball1.y + sin(angle) * minDist;
            let ax = (targetX - face.x) * spring;
            let ay = (targetY - face.y) * spring;
            ball1.speedX -= ax;
            ball1.speedY -= ay;
            ball1.speedX /= 2;
            ball1.speedY /= 2;
        } 
    }
    
    function move(ball) {
        ball.y += ball.speedY;
        ball.x += ball.speedX;
        if ((ball.x - ball.d / 2)<= 0) {
            ball.speedX *= -1;
            ball.x += ball.speedX;
        } else if ((ball.x + ball.d / 2) >= canvasWidth) {
            ball.speedX *= -1;
            ball.x += ball.speedX;
        } else if ((ball.y - ball.d / 2) <= 0) {
            ball.speedY *= -1;
            ball.y += ball.speedY;
        } else if (ball.y + ball.d / 2 >= canvasHeight) {
            ball.speedY *= -1;
            ball.y += ball.speedY;
        }
    }
    
    function mouseDragged() {
        face.x = mouseX;
        face.y = mouseY;
    }




// Isn't working ;-; 
 
// const moveController = ev => {
//     console.log(ev.code);
// if (ev.code == 'KeyW') {
//     console.log('Go up!');
//     y = y -2;
// } else if (ev.code == 'KeyS') {
//     console.log('Go down!');
//     y = y + 2;
// } else if (ev.code == 'KeyA') {
//     console.log('Go left!');
//     x = x -2;
// } else if (ev.code == 'KeyD') {
//     console.log('Go right!');
//     x = x +2;
// } 

//     // a arrow moves circle left
//     // d arrow moves circle right
//     // w arrow moves circle up
//     // s arrow moves circle down

//     // redraw Monster:
//     clear();
//     noFill();
//     drawFace(x, y, width);
//     drawGrid(canvasWidth, canvasHeight);
// }


// // Add event listener on keydown
// document.addEventListener('keydown', moveController);





const face={x: canvasWidth/2, y: canvasHeight/2, d: 200, color: 'purple', originalColor: 'purple'};

function draw() {
    clear();
    background(color(102, 3, 8))
    fill('white');
let i = 0;
    while (i < 400){
       
       let bubble = bubbles[i];
       circle(bubble.x, bubble.y, bubble.w);
       bubble.y -= bubble.speed 
       if (bubble.y<0){
        bubble.y = canvasHeight
       }
            
            i++
    }

    //Ball collision 
    drawcollision();

    // background(color(102, 3, 8))
    for(let i = 0; i < faces.length; i++){
        const point = faces[i]
        drawFace (point.x, point.y, 100, point.color)
    } 
    drawFace(face.x, face.y, face.d, 'purple');
}


// const colors=[color(102, 3, 8),color(11, 66, 24), color(204, 119, 0)]



function mouseClicked(){
    const colors=[color(0, 60, 60),color(11, 66, 24), color(204, 119, 0)]
    const randomIndex=Math.floor(Math.random()* colors.length)
    faces.push({x: mouseX, y: mouseY, d:100, color:colors[randomIndex], originalColor:colors[randomIndex]}) 
}




// const faces=[]



function drawFace(centerX, centerY, size, faceColor='purple') {

    beginShape(); // Right Horn
    strokeWeight (2);
    fill('red')
    stroke('black');
    vertex(centerX + size * .60, centerY - size/1.5);
    vertex(centerX - size * .40, centerY - size * .25);
    vertex(centerX + size/2.1, centerY);
    endShape(CLOSE);

    beginShape(); // left Horn
    strokeWeight (2);
    fill('red')
    stroke('black');
    vertex(centerX - size * .60, centerY - size/1.5);
    vertex(centerX + size * .40, centerY - size * .25);
    vertex(centerX - size/2.1, centerY);
    endShape(CLOSE);


  



    fill(faceColor); // The Face
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






    beginShape(); //Glow in Eyes.
    strokeWeight (.5);
    fill('red')
    stroke('black');

    circle(centerX - sf, centerY - sf, sf); //Left Eye
    circle(centerX + sf, centerY - sf, sf); //Right Eye
   // arc(100, 100, 100, 200, -1, -.5, OPEN)

    // x, y, width, height, start, OPEN

    // beginShape();
    // strokeWeight (5);
    // fill('purple')
    // stroke('black');
    // vertex(centerX + size * .39, centerY - size/1.8);
    // vertex(centerX - size * .35, centerY - size * .25);
    // vertex(centerX + size/2.1, centerY);
    // endShape(CLOSE);
}


// Isn't working ;-; 
 
const moveController = ev => {
    console.log(ev.code);
if (ev.code == 'KeyW') {
    console.log('Go up!');
   face.y = face.y -2;
} else if (ev.code == 'KeyS') {
    console.log('Go down!');
    face.y = face.y + 2;
} else if (ev.code == 'KeyA') {
    console.log('Go left!');
    face.x = face.x -2;
} else if (ev.code == 'KeyD') {
    console.log('Go right!');
    face.x = face.x +2;
} 

    // a arrow moves circle left
    // d arrow moves circle right
    // w arrow moves circle up
    // s arrow moves circle down

    // redraw Monster:
    clear();
    noFill();
    drawFace(200, 400, 100, 'purple');
    drawGrid(canvasWidth, canvasHeight);
}

// Add event listener on keydown
document.addEventListener('keydown', moveController);