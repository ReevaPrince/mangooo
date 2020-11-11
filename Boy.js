class Boy {
    constructor(x, y, width, height) {
  
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.image = loadImage('boy.png');
     // this.sling = Constraint.create(options);
     // World.add(world, this.sling);
    //  World.add(world, this.body);

    }
  //  attach(body){
   //   this.sling.bodyA = body;
//  }
  
 // fly(){
 //     this.sling.bodyA = null;
 // }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }

  };
