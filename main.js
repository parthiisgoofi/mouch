muchhX=0;
muchhY=0;

function preload(){
    muchh_image = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0, 0);
    stroke(255, 0, 0, 0);
    circle(muchhX,muchhY,0);
    image(muchh_image, muchhX-15, muchhY+1, 30, 30);
}

function take_snapshot(){
    save('my_Muchh.png');
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
 if (results.length > 0){
     console.log(results);
     console.log("muchh x = " + results[0].pose.nose.x);
     console.log("muchh y = " + results[0].pose.nose.y);
     muchhX = results[0].pose.nose.x;
     muchhY = results[0].pose.nose.y;
 }
}