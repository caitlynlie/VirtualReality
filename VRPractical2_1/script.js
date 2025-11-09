let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,-0.5,z);
  }
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let y = rnd(10,15);
    let z = rnd(-20,20);
    createCloud(x,y,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createHouse(x,0,z);
  }
   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x, y, z){
  let cloud = document.createElement("a-entity");
  
  let circ1 = document.createElement("a-sphere");
  circ1.setAttribute("radius","0.55");
  circ1.setAttribute("position","0.5 -0.1 0.05");
  circ1.setAttribute("color","#ECF0F1");
  cloud.append( circ1 );

  let circ2 = document.createElement("a-sphere");
  circ2.setAttribute("radius","0.65");
  circ2.setAttribute("position","0 0 0");
  circ2.setAttribute("color","#ECF0F1");
  cloud.append( circ2 );

  let circ3 = document.createElement("a-sphere");
  circ3.setAttribute("radius","0.6");
  circ3.setAttribute("position","-0.5 -0.2 -0.05");
  circ3.setAttribute("color","#ECF0F1");
  cloud.append( circ3 );

  cloud.setAttribute("position",{x:x, y:y, z:z});
  scene.append( cloud );
}
/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x, y, z){
  let house = document.createElement("a-entity");
  
  let base = document.createElement("a-box");
  base.setAttribute("color","white");
  base.setAttribute("position","0 1 0");
  base.setAttribute("height","2");
  base.setAttribute("width","2");
  base.setAttribute("depth","2");
  house.append( base );

  let roof = document.createElement("a-cylinder");
  roof.setAttribute("segments-radial","3");
  roof.setAttribute("rotation","-90 0 0");
  roof.setAttribute("color","brown");
  roof.setAttribute("position","0 2.5 0");
  roof.setAttribute("height","2.5");
  roof.setAttribute("radius","1.5");
  house.append( roof );

  house.setAttribute("position",{x:x, y:y, z:z});
  scene.append( house );
}
function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}