class ConnonBall{
    constructor(x,y){
this.x=x
this.y=y
this.r=30
this.body=Bodies.circle(this.x,this.y,this.r,{isStatic:true})
World.add(world,this.body)

    }
 display(){
     ellipseMode(RADIUS)
     ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
 }   
shoot(){
    console.log("hi")
    var newAngle=canon.angle-28
    newAngle=newAngle*(3.14/180)
    var velocity=p5.Vector.fromAngle(newAngle)
    velocity.mult(0.5)
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{
        x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
}
    }
