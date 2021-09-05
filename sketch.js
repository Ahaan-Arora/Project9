
function setup() {
  
  
  createCanvas(400,400);
  background("black")
}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  


  if (keyDown(RIGHT_ARROW)) 
  {
    background("orange");
    
  }

  if (keyDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

