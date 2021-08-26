function setup() {
video=createCapture(VIDEO);
video.size(550,500);
canvas=creatCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("Pose Net Is Inixialised ,Model Loaded!");
}

function draw() {
    background('cyan');
}

function gotPoses(results) {
if(results.lenght>0) {
    console.log(results);
}

}