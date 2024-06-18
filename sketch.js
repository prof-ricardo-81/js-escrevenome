function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("brown");
    fill("green");
    
      if (mouseIsPressed){rect(mouseX, mouseY, 20, 20);
      }
  }