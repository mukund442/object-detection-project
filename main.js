function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
}

img="";
function preload(){
    img=loadImage('fruit_basket.jpg');
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#00FFFF");
    text("basket", 45, 75);
    noFill();
    stroke("#00FFFF");
    rect(30, 60, 450, 350);
}