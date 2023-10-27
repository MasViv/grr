noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristY=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(100,100);
    canvas=createCanvas(550,500);
    canvas.position(900,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background("black");
    document.getElementById("square_side").innerHTML="Just look in the console. It is right there." + difference + " it is";
    fill("greenyellow");
    stroke("orange");
    square(noseX,noseY,difference);
}

function modelLoaded()
{
    console.log('PoseNet (more like PoseNOT) is on');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseofx=" + noseX + "noseofy=" +noseY);

        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("rightWristofx=" + rightWristX + "leftWristofy=" + leftWristY + "different" + difference);
    }
}