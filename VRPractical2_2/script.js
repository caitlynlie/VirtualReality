let scene
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    pokeball = document.querySelector("#pokemonball");
    rocket = document.querySelector("#rocket");
    dude = document.querySelector("#dude");
    sun = document.querySelector("#sun");
    car.a = 0;
    car.da = -0.5;
    pokeball.a = 0;
    pokeball.da = 1;
    rocket.a = 1;
    rocket.da = 0.01;
    dude.a = 1;
    dude.da = 0.01;
    dude.b = 0.85
    dude.db = 0.005
    sun.a = 0;
    sun.da = 0.01;
    loop();
})
function loop(){
  car.a += car.da;
  car.setAttribute("position",{x:car.a, y:0, z:-8});
  pokeball.a += pokeball.da;
  pokeball.setAttribute("rotation",{x:pokeball.a, y:0, z:0});
  rocket.a += rocket.da;
  rocket.setAttribute("position",{x:3, y:rocket.a, z:-4});
  dude.a += dude.da;
  dude.setAttribute("scale",{x:dude.a, y:dude.a, z:dude.a});
  dude.b += dude.db
  dude.setAttribute("position",{x:-2, y:dude.b, z:-10});
  sun.a += sun.da;
  sun.setAttribute("opacity", sun.a);
  window.requestAnimationFrame(loop);

}