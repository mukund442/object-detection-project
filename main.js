function setup(){
    canvas=createCanvas(380, 380);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(380, 380);
    video.hide();

    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : obejct Detecting";
}
object=[];
status="";
img="";
function preload(){
    img=loadImage('fruit_basket.jpg');
}

function draw(){

    image(video, 0, 0, 380, 380);
    if(status!=""){
        objectDetector.detect(video, gotResult);
        r=random(255);
        g=random(255);
        b=random(255);

        for(i=0; i<objects.lenght; i++){
            document.getElementById("status").innerHTML="status : object Detected";
            document.getElementById("number_of_objects").innerHTML="number of object detected are"+object.lenght;
            fill(r, g, b);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+ percent+"%",objects[i].x, object[i].y);
            noFill();
            stroke(r, g, b);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
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

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting Objects";
}