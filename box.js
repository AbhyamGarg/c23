class Box {
  //intiallises the object
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    //it captures new settings(push)
    push();
    //translate changes 0 of the axis to given x and y position (remaps the position)
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0,0, this.width, this.height);
    //pop reverts the old setings so that rotate and translate do not apply to entire gamespace
    pop();
  }
};
