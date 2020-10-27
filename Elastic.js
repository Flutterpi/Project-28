class Elastic {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.elastic = Constraint.create(options);
        World.add(world,this.elastic);
    }

    display()
    {
        var pointA = this.elastic.bodyA.position
        var pointB = this.elastic.bodyB.position
        strokeWeight(3);
        line (boy.body.position.x,boy.body.position.y,stone.body.position.x,stone.body.position.y)
    }
}