class Mango
{
  constructor(x,y,diameter) 
  {
    var options = 
    {
    isStatic:true,
    'restitution':0,
    'friction':1
    }
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    //this.image = loadImage("sprites/mango.png")
    this.body = Bodies.circle(this.x,this.y,this.diameter/2,options)
    World.add(world, this.body);
  }
    display()
    {
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("yellow");
        fill("orange");
        rect(0,0,this.diameter);
        pop(); 
    }
}
