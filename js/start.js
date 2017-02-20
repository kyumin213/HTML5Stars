var starObj=function(){
	this.x;
	this.y;
	this.picNo;
	this.times;
	this.xSpd;
	this.ySpd;
	this.beta;
	
}
starObj.prototype.init=function(){
	this.x=Math.random()*600+100;
	this.y=Math.random()*300+150;
	this.picNo=Math.floor(Math.random()*7);
	this.times=0;
	this.beta=Math.random()*Math.PI*0.5;
	
	this.xSpd=Math.random()*3-1.5;
	this.ySpd=Math.random()*3-1.5;
}
starObj.prototype.update=function(){
	this.x+=this.xSpd*deltaTime*0.004;
	this.y+=this.ySpd*deltaTime*0.004;
	
	//this.x超过图片范围就重生，this.y超过图片范围就重生
	if(this.x<100 || this.x>700){
		this.init();
		return;
	}
	
	if(this.y<150 || this.y>450){
		this.init();
		return;
	}
	this.times +=deltaTime;
	if(this.times>50){
		this.picNo+=1;
		this.picNo%=7;
		this.times=0
	}
	
}
starObj.prototype.draw=function(){
	//globalAlpha全局透明度
	ctx.save();
	ctx.globalAlpha=Math.sin(this.beta)*life;
	//drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
	ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7);
	ctx.restore();
}

function drawStart(){
	for(var i=0;i<num;i++){
		stars[i].update();
		stars[i].draw();
	}
}

function aliveupdate(){
	if(switchy){
		life+=0.03*deltaTime*0.05;
		if(life>1){
		life=1;
	   }
	}else{
		life-=0.03*deltaTime*0.05;
		if(life<0){
			life=0;
		}
	}
}
