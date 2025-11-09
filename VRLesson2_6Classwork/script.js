
let scene, mechs = [], mech;
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
  for(let i = 0; i < 1; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let m = new Mech(x, 0 , z);
    mechs.push(m);
  }
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
