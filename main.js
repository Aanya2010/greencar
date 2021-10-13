canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

carw=75;
carh=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carx=5;
cary=225;

function add() {
	background_imgTag = new Image();
	 background_imgTag.onload = uploadBackground;
	  background_imgTag.src = background_image;
	   greencar_imgTag = new Image();
	    greencar_imgTag.onload = uploadgreencar;
		 greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, carx, cary, carw, carh);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
  if(cary>=0) {
	  cary=cary-10;
	  uploadBackground();
	  uploadgreencar();
  }
}

function down()
{
	if(cary<=350) {
		cary=cary+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(carx>=0) {
		carx=carx-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(carx<=740) {
		carx=carx+10;
		uploadBackground();
		uploadgreencar();
	}
}
