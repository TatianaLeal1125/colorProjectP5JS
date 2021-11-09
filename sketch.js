/* function setup(){
    createCanvas(500,500);
}

function draw(){
    if(mouseIsPressed){
        fill(0); 
    }else{
        fill(255);
    }
    ellipse(mouseX,mouseY,80,80);
} */

let x = 0;
let y = 0;
let dim = 80.0;

// Clicking in the box toggles fullscreen on and off.
function setup() {
    let cv = createCanvas(500,500);//,displayHeight);
    cv.center();

    //let div = createDiv('').size(1500,500);
    //div.style('background-color','orange');
    //div.center();
    background(0);
  }
  /* function draw() {
    rectMode(RADIUS);
    translate(width-(2*width/3),height-2*height/3);
    translate(p5.Vector.fromAngle(millis()/1000, 80));
    rect(width/4,height/4,50,50);
    translate(width/2,height/2);
    rect(0, 0,50,50);
  }      */

  function draw(){
      //background('rgba(0,0,0,0.6)');
    
      noStroke();
      fill(255,50);
      
  }

    function mousePressed(){
        background(0);
        circle(mouseX,mouseY,50);
    }