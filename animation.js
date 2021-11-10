var numberOfCircles = 12;
var diameterSingleCircle = 110;
var diameter = [diameterSingleCircle,diameterSingleCircle];
var letter;

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

function draw(){
    //background(255);
    translate(width/2,height/2);
    noStroke();
    drawCircles();
    if(letter=='a'){
        push();
        let i=0;
        let color = colors[i];
        th = TWO_PI * i/numberOfCircles;
        rotate(th);
        fill(color.color);
        circle(width/6,0, diameter[i])
        pop();
    }if(letter=='s'){
        push();
        let i=8;
        let color = colors[i];
        th = TWO_PI * i/numberOfCircles;
        rotate(th);
        fill(color.color);
        circle(width/6,0, diameter[1])
        pop();
    }
}

function drawCircles(){
    for(let i = 0; i < numberOfCircles; i++){
        push();
        let color = colors[i];
        th = TWO_PI * i/numberOfCircles;
        rotate(th);
        fill(color.color);
        circle(width/6,0,110)
        pop();
    }
}

function keyTyped(){
    console.log(letter);
    letter = key;
    switch(key){
        case 'a':
            if(diameter[0] < 180){
                diameter[0]+=10;
            }
            break;
        case 's':
            if(diameter[1] < 180){
                diameter[1]+=10;
            }
            break;

    }
    redraw();
    return false;
}

function keyReleased(){
    letter = 'm';
    console.log(diameterSingleCircle);
    console.log(letter);
    return false;
}