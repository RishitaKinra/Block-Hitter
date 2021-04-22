class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution: 1,
          friction: 0.2,
          density: 0.001   
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.img = loadImage("block.png");
        this.Visibility = 255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        if(this.body.speed<1.5){
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.img,0,0,this.width, this.height);
          pop();
        }
        else{
          //do nothing
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility-5;
          tint(255,this.Visibility);
          image(this.img,this.body.position.x,this.body.position.y,this.width, this.height);
          pop();
        }
      }
}
