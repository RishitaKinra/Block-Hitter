class SlingShot{
    constructor(bodyA,pointB){
        var sling_options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.bodyA = bodyA
        this.pointB = pointB;
        this.constraint = Constraint.create(sling_options);
        World.add(world,this.constraint);
    }

    attach(body){
        this.constraint.bodyA = body;
    }

    fly(){
        this.constraint.bodyA = null;
    }

    display(){
        if(this.constraint.bodyA){
            var pointA = this.constraint.bodyA.position;
            var pointB = this.pointB;
        
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
}