class Rope {
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,pointB:pointB,stiffness:1,length:400
}
this.rope=Constraint.create(options)
this.pointB=pointB

World.add(myWorld,this.rope)

    }
    display(){
        var pos=this.rope.bodyA.position
       
        push()
        
        rectMode(CENTER)
        fill("black")
        line(pos.x,pos.y,this.pointB.x,this.pointB.y)
        pop()
    }
}