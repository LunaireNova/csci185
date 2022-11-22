function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    // drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    // drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    // drawCreature(454, 423, 141, '#aebb83', '#227876');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');

    drawFace(200, 400, 100, 'purple');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:








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

    circle(centerX - sf, centerY - sf, sf); 
    circle(centerX + sf, centerY - sf, sf);
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