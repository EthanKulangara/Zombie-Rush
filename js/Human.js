class Human{
    constructor(x,y){
        var options = {
            restitution:0.4,
            friction:1
        }
        this.body = Bodies.circle(x,y,50,options)
        World.add(world,this.body);
        this.radius = 50;
        var rand = Math.round(random(1,2));
        switch(rand){
            case 1:this.image = loadImage("./assets/Human1.png");
            break;
            case 2:this.image = loadImage("./assets/Human2.jpg");
            break;
            default:break
        }
    }
    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.radius,this.radius);

    }
}