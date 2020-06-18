/*var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;*/
var myGamePiece; var myScore;
var obs=[];
var count=0;
var mySound;
var myMusic;
function startGame() {
    myGameArea.start();
    myGamePiece = new component(150,150, "basket1.png", 10,590,"image" );
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
     mySound = new sound("bomb1.AAC");
     mypop=new sound("pop1.mpeg");
     myMusic =new sound("audio.mpeg");
     myMusic.play();
    /*obs=new component(200,150,"ball1.jpg",100,90,"image");*/
}

var myGameArea = {
    canvas : document.createElement("canvas"),
     start : function() {
        this.canvas.width = 1520;
        this.canvas.height =735;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo=0;
        this.interval = setInterval(updateGameArea, 10);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        document.getElementById("div1").style.display= 'block';
        clearInterval(this.interval);
    }

}

function component(width, height, color, x, y,type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX=0;
     
    this.update=function(){   
    ctx = myGameArea.context;
    /*if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } */
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
      }
             } 
     
     this.newPos = function() {
        
        this.x += this.speedX;
        if(this.x<0)
        this.x=-this.x;
        if(this.x>=1340)
            this.x=1340;          
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var end=otherobj.width;
         /*if(end==80)*/
         if(otherleft-myleft>0&&myright-otherright>0)
        var crash = true;
   /* else if(myright-otherright>2)
        crash=true;*/

        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
                
           crash = false;
        }
        
        return crash;
    }

}
function updateGameArea() {
    var x,y,i;



        /*var ball=["banana1.png","ball2.jpg","apple.png","ball4.jpg","bomb.png","ball6.jpg","ball7.jpg","ball8.jpg","ball9.jpg","ball5.jpg"];
         var k=Math.floor(Math.random()*10);*/
         

    for (i = 0; i < obs.length; i += 1) {

       /* if (myGamePiece.crashWith(obs[i])&& obs[i].color=="bomb.png") {
            myGameArea.stop();
        }*/
             if(myGamePiece.crashWith(obs[i]))
            { 
                if(obs[i].width==80&&obs[i].y<=590){
                    mySound.play();
                    myMusic.stop();
                    
                    myGameArea.stop();

                    return;
                     
                }
                else if(obs[i].y<=590)
              {count=count+10;
                mypop.play();
                myMusic.stop();
              
                obs[i].width=0;
            obs[i].height = -200;
                return;}

                }
        
            
        } 

        
    
    
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGameArea.frameNo += 1;
    if (everyinterval(200)) {
        x = myGameArea.canvas.width-(Math.random()*1360);
        y = myGameArea.canvas.height-700;
        var ball=["baanana.png","apple1.png","cherry1.png","blueberry1.png","bomb.png","apricot.png","brocolli.png","mango.png","potato.png","grapes.png"];
         var k=Math.floor(Math.random()*10);
         var d=Math.floor(Math.random()*10);
          var c=Math.floor(Math.random()*10);
          var b=Math.floor(Math.random()*10);
          var a=Math.floor(Math.random()*10);
          var m=Math.floor(Math.random()*10);
          var p=Math.floor(Math.random()*10);
          var q =Math.floor(Math.random()*10);
          var r=Math.floor(Math.random()*10);
          var j=Math.floor(Math.random()*10);
         /* obs.push(new component(80, 80, ball[4], x-80, y,"image"));*/
          
          
            if((x-80)<1400){
            if(k==4)
                
            obs.push(new component(80, 80, ball[k], x-80, y,"image"));
            else
              obs.push(new component(100, 80, ball[k], x-100, y,"image"));
            }
            
            if((x+100)<1400){
            if(d==4)
            obs.push(new component(80, 80, ball[d], x+100, y,"image"));
            
            else
            
                obs.push(new component(100, 80, ball[d], x+100, y,"image"));
            }
            
             if((x+800)<1400){
            if(c==4)
            obs.push(new component(80, 80, ball[c], x+800, y,"image"));
            else
                obs.push(new component(100, 80, ball[c], x+800, y,"image"));
              }      
            
            if((x+600)<1400){
            if(b==4)
            obs.push(new component(80, 80, ball[b], x+600, y,"image"));
            else
                obs.push(new component(100, 80, ball[b], x+600, y,"image"));
              }
            
            if((x+1300)<1400){
            if(a==4)
            obs.push(new component(80, 80, ball[a], x+1300, y,"image"));
            else
                obs.push(new component(100, 80, ball[a], x+1200, y,"image"));
                }
        

            var g=Math.floor(Math.random()*10);
            
            if((x+1000)<1400){
            if(g==4)
                obs.push(new component(80,80,ball[g],x+1000,y,"image"));
            else
                ob.push(new component(100,80,ball[g],x+1000,y,"image"));
        }


            
            if(everyinterval(150))
            {   if(x<1400)
                {
                if(m==4)
                obs.push(new component(80, 80, ball[m], x, y,"image"));
                else
                    obs.push(new component(100, 80, ball[m], x, y,"image"));
            }
            if((x+275)<1400)
            {
                if(p==4)
                
                obs.push(new component(80, 80, ball[p], x+275, y,"image"));
            else
                obs.push(new component(100, 80, ball[p], x+275, y,"image"));
        }
        if((x+400)<1400)
        {
              if(q==4)  
        
            obs.push(new component(80, 80, ball[q], x+400, y,"image"));
            else
                obs.push(new component(100, 80, ball[q], x+400, y,"image"));}
            if((x+700)<1400)
            {
            if(r==4)
            obs.push(new component(80, 80, ball[r], x+700, y,"image"));
            else
                obs.push(new component(100, 80, ball[r], x+700, y,"image"));
        }


            }
    
             }
            
    
    for (i = 0; i < obs.length; i += 1) {
        if(count<=50)
        obs[i].y += 1;
       else if(count<=90)
        obs[i].y+=2;
    else
        obs[i].y+=3;

        obs[i].update();
    }
   
       if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -7; }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 7; }
    
   
     myScore.text="SCORE: " + count;
    myScore.update();
     myGamePiece.newPos();    
    myGamePiece.update();
        obs.update();

    
   /*obs.x+=3;*/
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}