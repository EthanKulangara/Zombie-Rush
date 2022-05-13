class CannonBall {
  constructor(x, y) 
  {
    var options = {
      isStatic: true
    };
    this.r = 50;
    this.body = Bodies.circle(x, y, this.r, options);
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1:this.image = loadImage("./assets/Zombie1.png");
      break;
      case 2:this.image = loadImage("./assets/Zombie2.png");
      break;
      case 3:this.image = loadImage("./assets/Zombie3.png");
      break;
      case 4:this.image = loadImage("./assets/Zombie4.png");
      break;
      default:break
    }
    World.add(world, this.body);
  }

  shoot() {
    var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }

  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}
