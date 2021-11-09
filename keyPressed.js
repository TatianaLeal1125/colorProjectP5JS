function setup(){
    createCanvas(600,600).center();
    background(0);
}

let value = 0;

function draw(){
    fill(value);
    rect(25,25,50,50);
}

function keyTyped(){
    if( key ==='A'){
        value = 255;
    }else{
        value = 0;
    }

    return false;
}