class Boy {
    constructor(x, y){
      var options = {
         isStatic: true,
          'restitution':0,
          'friction':1,
          'density':1.2
          
      }
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 70;
      
      //this.image = loadImage = ("sprites/stone.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }