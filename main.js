img= "";
object= [];
status= "";
function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for(i=0; i< object.length; i++){
            document.getElementById("status").innerHTML= "Status: Objects Detected!!";
            fill("#5EACBD");
            percent= floor(object[i].confidence *100);
            stroke("#5EACBD");
            text(object[i].label+" " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            rect(object[i].x ,object[i].y, object[i].width, object[i].height);
        }
    }
    
}
function preload(){
    img= loadImage('dog_cat.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center()
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects...";
}

function modelLoaded(){
    console.log("Model Is Loaded");
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    
    if(error){
        console.log(error)
}
    else{
        console.log(results);
        object= results;
    }
}
