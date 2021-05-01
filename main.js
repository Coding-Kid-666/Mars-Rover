canvas = document.getElementById("marsCanvas");
ctx=canvas.getContext("2d");
roverWidth=100;
roverHeight=90;
backgroundImg="mars.jpg";
roverImg="rover.png";
roverX=10;
roverY=10;

function loaded(){
    console.log("Loaded succesfuly.")
    backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBg();
    backgroundImgTag.src=backgroundImg;

    roverImgTag=new Image();
    roverImgTag.onload=uploadRover();
    roverImgTag.src=roverImg;
}
function uploadBg(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(roverImgTag,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown",my_Keydown);

function my_Keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed == 37){
        console.log("LEFT")
        Left();
    }
    if(keypressed == 38){
        console.log("UP");
        Up();
    }
    if(keypressed == 39){
        console.log("RIGHT");
        Right();
    }
    if(keypressed == 40){
        console.log("DOWN");
        Down();
    }
}
function Left(){
    if(roverX >= 0){
        
        roverX= roverX-10;
        console.log("When Left is pressed,X= " + roverX + "Y = " + roverY);
        uploadBg();
        uploadRover();
    }
}
function Up(){
    if(roverY >= 0){
        
        roverY= roverY-10;
        console.log("When Up is pressed,X= " + roverX + "Y = " + roverY);
        uploadBg();
        uploadRover();
    }
}
function Right(){
    if(roverX <= 700){
        
        roverX= roverX+10;
        console.log("When Right is pressed,X= " + roverX + "Y = " + roverY);
        uploadBg();
        uploadRover();
    }
}
function Down(){
    if(roverY <= 500){
        
        roverY= roverY+10;
        console.log("When Down is pressed,X= " + roverX + "Y = " + roverY);
        uploadBg();
        uploadRover();
    }
}

//Remove barrier and add warning. 
//Add fuel variable and when fuel low speed=3.