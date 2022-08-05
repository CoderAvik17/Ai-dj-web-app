song="";
song1="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song = loadsound("song1.mp3");
    song1 = loadsound("song2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.PoseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    console.log(results);
    leftWristX = results[0].pose.leftWristX.x;
    leftWristY = results[0].pose.leftWristY.y;
    console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

    rightWristX = results[0].pose.rightWristX.x;
    rightWristY = results[0].pose.rightWristY.y;
    console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
}