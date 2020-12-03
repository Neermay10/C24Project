class Paper {
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
    }

    display(){
        var pos = this.body.position;
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.diameter,this.diameter);


    }
    
}