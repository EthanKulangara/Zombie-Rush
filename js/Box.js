class Box{
    constructor(x,y){
        var option = {
            restitution:0.4,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,50,50,option);
        World.add(world,this.body);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("./assets/wood1.png")
    }
    display(){
        var pos = this.body.position;
        //imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        
    }
}