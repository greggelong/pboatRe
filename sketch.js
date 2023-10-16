let img 
let clr
let boats =[]

function preload(){
  img = loadImage("oboats.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  angleMode(DEGREES)
  clr = [
    color(255, 187, 153), // Peach
    color(255, 102, 102), // Coral
    color(255, 204, 153), // Pale Yellow
    color(255, 153, 153), // Salmon
    color(255, 255, 153), // Pastel Yellow
    color(255, 204, 51),  // Mustard
    color(204, 153, 255), // Lavender
    color(153, 204, 255), // Baby Blue
    color(255, 51, 153),  // Hot Pink
    color(153, 102, 51),  // Brown
    color(255),
    color(255), color(255), color(255), 
    color(255), color(255), color(255), 
    color(255)
  ];
  boatSP(width/2,height/2,400,270) //  recusively set size and positions of boats
  //frameRate(10)
  
   
}

function draw() {
  background(74);
  for(let i = 0; i<boats.length;i++){
    boats[i].show()
     
  }

  if(mouseIsPressed && mouseX>width/2){
    for(let i = 0; i<boats.length;i++){
      
      boats[i].move()
      boats[i].edges()
    }
  }

  if(mouseIsPressed && mouseX<width/2){
    for(let i = 0; i<boats.length;i++){
      
      boats[i].goback()
  
    }
  }

}




function boatSP(x,y,w,h){
  // put boats into size and position using recursion
  //tint(random(clr))//tint(255,z+50)
  //image(img,x,y,w,h)
  let boat = new Pb(x,y,random(clr),w,h)
  boats.push(boat)
  if (w>40){
    boatSP(x+w*0.6,y,w*0.5,h*0.5)
    boatSP(x-w*0.6,y,w*0.5,h*0.5)
    boatSP(x,y-h*0.5,w*0.5,h*0.5)
    //boatSP(x,y+h*0.5,w*0.5,h*0.5)
  }
}

function keyPressed() {
  // this will download the first 25 seconds of the animation!
  if (key === 'g') {
    saveGif('kid.gif', 18);
  }
  if (key === 's') {
    saveCanvas('kid', 'jpg');
  }
  
}