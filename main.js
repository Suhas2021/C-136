objects = [];
status1 = "";

function setup()
{
    canvas = createCanvas(380, 380)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(380,380)
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modeLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function modeLoaded()
{
    console.log("Model Loaded!")
    status1 = true;
}

function draw() {
    image(video, 0, 0, 380, 380);
}

