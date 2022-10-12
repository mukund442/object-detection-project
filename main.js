function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("ststus").innerHTML="Status : detecting objects";
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

    fill("#00FFFF");
    text("apples", 45, 75);
    noFill();
    stroke("#00FFFF");
    rect(30, 60, 450, 350);
}

function modelLoaded(){
    console.log("model loaded");
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}