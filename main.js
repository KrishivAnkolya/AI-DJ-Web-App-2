music = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWrightX = 0;
rightWrightY = 0;

function preload() {
    music = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup() {
    canvas = creaeCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500)
}

function play() {
    music.play();
    music.setVolume(1);
    music.rate(1);

    music2.play();
    music2.setVolume(1);
    music2.rate(1);
}

function modelLoaded() {
    console.log('PoseNet Is Initailized');
}

function gotPoses() {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.leftWrist.y;

        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}