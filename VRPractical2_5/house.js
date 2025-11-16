

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  
  
  let spacing = 5;
  let index = 0;

  for (let i = 0; i < 10; i++) {
    let x = (i % 5) * spacing - 10;   
    let z = Math.floor(i / 5) * spacing - 10; 
    createHouse(x, 0, z);
  }
})

function createHouse(x, y, z){
  let house = document.createElement("a-entity");
  
  let base = document.createElement("a-box");
  base.setAttribute("material", "src: url(wall.jpg);");
  base.setAttribute("position","0 1 0");
  base.setAttribute("height","2");
  base.setAttribute("width","2");
  base.setAttribute("depth","2");
  house.append( base );

  let roof = document.createElement("a-cylinder");
  roof.setAttribute("segments-radial","3");
  roof.setAttribute("rotation","-90 0 0");
  roof.setAttribute("material", "src: url(roof.jpg);");
  roof.setAttribute("position","0 2.5 0");
  roof.setAttribute("height","2.5");
  roof.setAttribute("radius","1.5");
  house.append( roof );

  house.setAttribute("position",{x:x, y:y, z:z});
  scene.append( house );
}