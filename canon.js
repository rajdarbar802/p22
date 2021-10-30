class Canon {
    constructor(x,y,w,h,angle){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.angle=angle
        this.Canonimg=loadImage("./assets/canon.png")
        this.CannonBaseimg=loadImage("./assets/cannonBase.png")
    }
    display(){
        console.log(this.angle)
        if (keyIsDown(RIGHT_ARROW)&&this.angle<70) {
          this.angle+=1  
        }
        if (keyIsDown(LEFT_ARROW)&&this.angle>-30) {
            this.angle-=1
            
        }
        push ()
        translate(this.x,this.y)
        rotate (this.angle)
        imageMode(CENTER)
        image(this.Canonimg,0,0,this.w,this.h)
        pop ()
        image(this.CannonBaseimg,70,20,200,200)
        noFill()
    }

}