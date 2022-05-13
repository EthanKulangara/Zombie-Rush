class Log{
    constructor(x,y,w,angle){
        var option = {
            restitution:0.4,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,w,20,option);
        World.add(world,this.body);
        this.height = 20;
        this.width = w;
        this.image = loadImage("./assets/wood2.png");
        Matter.Body.setAngle(this.body,angle);

    }
    display(){
        var pos = this.body.position;
        //imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}