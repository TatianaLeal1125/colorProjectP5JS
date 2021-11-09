//https://maruaprosof.com/tip-de-composicion-los-colores-importan/
//https://editor.p5js.org/kiddelpool/sketches/nlCipPAKR
//https://codepen.io/valhead/pen/Lbzywb?editors=0010
//https://codepen.io/valhead/full/yVzXwJ
//https://codepen.io/valhead/pen/fa66f4df2b783d245632f1cc24e71929?editors=0010

var numberOfCircles = 12;
var array = [];
var control = false;
var cont = 0;
var circles = [];
var diameterOnlyCircle = 150;
var diameterBigCircle = 300;
var diameterCircles = 110;

var colors = [
  { id: 0, name: "rojo", color:"#ff0000"},
  { id: 1, name: "rojo-naranja", color:"#ff4000"},
  { id: 2, name: "naranja", color:"#ff8000"},
  { id: 3, name: "amarillo_naranja", color:"#fbba00"},
  { id: 4, name: "amarillo", color:"#ffff00"},
  { id: 5, name: "verde_amarillo", color:"#c5f258"},
  { id: 6, name: "verde", color:"#00ff00"},
  { id: 7, name: "azul_verde", color:"#009c8c"},
  { id: 8, name: "azul", color:"#0000ff"},
  { id: 9, name: "azul_violeta", color:"#422c6d"},
  { id: 10, name: "violeta", color:"#78288c"},
  { id: 11, name: "rojo_violeta", color:"#922B3e"}
]

function setup(){
    createCanvas(displayWidth,displayHeight);
    background(255);
}

/* function windowResized(){
  if(windowWidth < 900){
    diameterOnlyCircle = 60;
    diameterBigCircle = 100;
    diameterCircles = 60;
  }
  else if(windowWidth < 1280){
    diameterOnlyCircle = 100;
    diameterBigCircle = 150;
    diameterCircles = 80;
  }
  else if(windowWidth > 1400){
    diameterOnlyCircle = 100;
    diameterBigCircle = 300;
    diameterCircles = 90;
  }
} */

function draw(){
  //console.log("Width: ", windowWidth);
  background(255);
  translate(width/2,height/2);
  noStroke();
  drawCircles();
  if(cont == 2){
    cont = 0;
  }
  if((array[0] == "a" && array[1] == "c") || (array[1] == "a" && array[0] == "c") ){
    let color=colors[2];
    //background(255);
    push();
    //drawCircles();
    drawBigCircle(color);
    pop();
  } else if(array[0] == "a" && array[1] == "s"){
    let color=colors[10];
    //background(255);
    push();
    //drawCircles();
    drawBigCircle(color);
    pop();
  }
}

function drawCircles(){
    for(var i=0; i< numberOfCircles; i++){
        drawOnlyCircle(width/6,0,diameter=diameterCircles, i, numberOfCircles,pu=true,po=true);
    }
} 

function drawOnlyCircle(w,h,diameter, i,numberOfCircles, pu, po){
  if(pu){ push() }
  let color = colors[i];
 if(w != width/6) {th=0;}else{th = TWO_PI * i/numberOfCircles;}
  rotate(th);
  //rotate(millis()/10000);
  fill(color.color);
  circle(width/6,0,diameter);
  if(po) { pop() }
}

function drawBigCircle(color){
    push();
    rotate(0);
    rotate(millis()/1000);
    fill(color.color);
    circle(width/90,height/90,diameterBigCircle);
    pop();
}


function keyTyped(){
  console.log(key);
  letter = key;
  //if(control == 1){
    switch(key){
      case 'a':
        array[cont]=key;
        drawOnlyCircle(width/6,0,diameter=diameterOnlyCircle,i=0,numberOfCircles,pu=true,po=true);
        cont++;
        console.log('soy cont: ',cont)
        break;
      case 'c':
        array[cont]=key;
        drawOnlyCircle(width/6,0,diameter=diameterOnlyCircle,i=4,numberOfCircles,pu=true, po=true);
        cont++;
        console.log('soy cont: ',cont)
        break;
      case 's':
        array[cont]=key;
        drawOnlyCircle(width/6,0,diameter=diameterOnlyCircle,i=8,numberOfCircles,pu=true, po=true);
        cont++;
        console.log('soy cont: ',cont)
        break;
    }
  //}
  return false;
}

/* function mousePressed(){
  control +=1;
  if(control == 1){
      noLoop();
      redraw();
  }else if(control == 2){
      control = 0;
      loop();
  }
} */


