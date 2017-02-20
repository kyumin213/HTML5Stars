

	var can;
	var ctx;
	var w;
	var h;
	var girlpic=new Image();
	var starPic=new Image();
	var num=60;
	var stars=[];
	var lastTime;
	var deltaTime;
	var switchy=false;
	var life=0;
	
	function init(){
		can=document.getElementById("canvas");
		ctx=can.getContext("2d");
		w=can.width;
		h=can.height;
		document.addEventListener("mousemove",mousemove,false);
		girlpic.src="img/girl.jpg";
		starPic.src="img/star.png";
		
		for(var i=0;i<num;i++){
			var ss = new starObj();
			stars.push(ss);
			stars[i].init();
		}
		lastTime=new Date();
		gameloop();
		
	}
	document.body.onload=init;
	function drawBackground(){
		ctx.fillStyle="#393550";
		ctx.fillRect(0,0,w,h);
	}
	
	function gameloop(){
		
		var now=new Date();
		deltaTime=now-lastTime;
		lastTime=now;
		window.requestAnimFrame(gameloop)
		drawBackground();
		drawgirl();
		drawStart();
		aliveupdate();
		
	}
	
	function drawgirl(){
		ctx.drawImage(girlpic,100,150,600,300);
	}
	
	function mousemove(e){
		if(e.offsetX || e.layerX){
			var px=e.offsetX==undefined?e.offsetX:e.layerX;
			var py=e.offsetY==undefined?e.offsetY:e.layerY;
		}
		
		if(px>100 && px<700 && py>150 && py<450){
			switchy=true;
		}else{
			switchy=false;
		}
	}

