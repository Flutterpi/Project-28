class Tree 
{
    constructor(x, y,width,height) 
    {
      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(x, y,width,height,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = 0;

      Matter.Body.setAngle(this.body,this.angle);
      
      //this.image = loadImage("sprites/tree.png")
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke(135,235,240);
      fill(255);
      rect(0,0, this.width, this.height)
      //image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }