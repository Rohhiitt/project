class ball {
 constructor(x,y){
  var options={
      isStatic:false,
      restitution:0.3,
      friction:0,
      density:1.2
  }
  this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,
  options);
  this.width = width;
  this.height = height;
  this.image = loadImage("sprites/paper.png");
  World.add(world,this.body);
}
display(){
image(this.image,0,0,this.width,this.height);
}
}