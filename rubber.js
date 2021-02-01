class Rubber {
    constructor(x, y, width,height) {
      var options = {
          'restitution':0.3,
          'friction':1,
          'density':1
      }
      this.body = Bodies.circle(x, y, width,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      
      rectMode(CENTER);
      strokeWeight(5)
      stroke("gray")
      fill('lightgreen');
      circle(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  
