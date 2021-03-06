function Bubble(player){
  var x1 = "x1";
  var y1 = "y1";
  this.x = 290;
  this.y = 290;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.total = 0;
  this.size = 0;
  this.player = player;

  this.eatFood = function(foodkek){
    if((foodkek.x >= this.x) && (foodkek.x <= this.x+blockSize) &&(foodkek.y >= this.y)&& (foodkek.y <= this.y+blockSize)){
      foodkek.pickLocation();
      this.total += 1;
      this.size += 1;
    }

    var highscore = localStorage.getItem("highscore");

if(highscore !== null){
    if (this.total > highscore) {
        localStorage.setItem("highscore", this.total);      
    }
}
else{
    localStorage.setItem("highscore", this.total);
}
    fill("#ffffff");
    textSize(20);
    text("HIGH SCORE: " + localStorage.getItem("highscore"), 10, 30);
    text("SCORE: " + this.total, 10, 60);
  
  }

  this.getSmall = function(small){
    if((small.x >= this.x) && (small.x <= this.x+blockSize) &&(small.y >= this.y)&& (small.y <= this.y+blockSize)){
      small.pickLocation();
      this.size-= 10;
    }
  }

  this.movement = function(xDir, yDir){
    this.xSpeed = xDir;
    this.ySpeed = yDir;
  }

  this.update = function(){
    this.x = this.x + this.xSpeed;
    this.y += this.ySpeed;
    this.x = constrain(this.x, 0, 500-blockSize);
    this.y = constrain(this.y, 0, 500-blockSize);

  }

  this.show = function(img){
    //stroke("ffffff");
    blockSize = 20 + this.size;
    this.player.draw(blockSize, this.x, this.y)
  }
}
