let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 


  loop();
})

function loop(){

  
  window.requestAnimationFrame( loop );
}

// ---------------------- Implement Challenges ----------------------

// Arrays to keep track of rockets and ufos for per-frame updates
window.rockets = [];
window.ufos = [];

// Rocket class: accepts x,y,z; contains multiple components and animates upward
function Rocket(x,y,z){
  this.x = x; this.y = y; this.z = z;
  this.entity = document.createElement('a-entity');

  // body
  const body = document.createElement('a-cylinder');
  body.setAttribute('height','1.6');
  body.setAttribute('radius','0.35');
  body.setAttribute('color','#dddddd');
  body.setAttribute('position','0 0.8 0');
  this.entity.append(body);

  // nose
  const nose = document.createElement('a-cone');
  nose.setAttribute('height','0.8');
  nose.setAttribute('radius-bottom','0.35');
  nose.setAttribute('color','#ff5555');
  nose.setAttribute('position','0 1.8 0');
  this.entity.append(nose);

  // fin (one visible, others implied)
  const fin = document.createElement('a-box');
  fin.setAttribute('width','0.06'); fin.setAttribute('height','0.35'); fin.setAttribute('depth','0.6');
  fin.setAttribute('color','#333333'); fin.setAttribute('position','0.32 0.4 0');
  fin.setAttribute('rotation','0 0 25');
  this.entity.append(fin);

  this.entity.setAttribute('position',{x:this.x, y:this.y, z:this.z});

  // animation variables
  this.speed = Math.random()*0.06 + 0.02; // upward delta per frame
  this.launched = false;
}

Rocket.prototype.launch = function(){ this.launched = true; };

Rocket.prototype.update = function(){
  if(!this.launched) return;
  this.y += this.speed;
  this.entity.setAttribute('position',{x:this.x, y:this.y, z:this.z});
};

// UFO class: falls from sky, consists of at least two components, has invade()
function UFO(x,y,z){
  this.x = x; this.y = y; this.z = z;
  this.entity = document.createElement('a-entity');

  // saucer (flattened sphere)
  const saucer = document.createElement('a-sphere');
  saucer.setAttribute('radius','1.2');
  saucer.setAttribute('scale','1 0.45 1');
  saucer.setAttribute('color','#99ccff');
  this.entity.append(saucer);

  // dome
  const dome = document.createElement('a-sphere');
  dome.setAttribute('radius','0.45');
  dome.setAttribute('position','0 0.45 0');
  dome.setAttribute('color','#66aaff');
  this.entity.append(dome);

  this.entity.setAttribute('position',{x:this.x, y:this.y, z:this.z});

  this.falling = false;
  this.onGround = false;
  this.speed = Math.random()*0.12 + 0.02; // fall speed per frame
}

UFO.prototype.invade = function(){ this.falling = true; };

UFO.prototype.update = function(){
  if(!this.falling || this.onGround) return;
  this.y -= this.speed;
  if(this.y <= 0.5){ this.y = 0.5; this.onGround = true; this.falling = false; }
  this.entity.setAttribute('position',{x:this.x, y:this.y, z:this.z});
};

// Create 100 rockets in a 10x10 grid on the X-Z plane, just below the plane (plane at y=0)
function createRocketGrid(){
  const grid = 10; const spacing = 2.4;
  for(let ix=0; ix<grid; ix++){
    for(let iz=0; iz<grid; iz++){
      const x = (ix - (grid-1)/2) * spacing;
      const z = (iz - (grid-1)/2) * spacing;
      const y = (Math.random()* -3) - 0.5; // random between -0.5 and -3.5
      const r = new Rocket(x,y,z);
      scene.append(r.entity);
      rockets.push(r);
      // stagger launch
      setTimeout(()=> r.launch(), Math.floor(Math.random()*3000));
    }
  }
}

// Create several UFOs at random high positions and make them invade
function createUFOs(count=12){
  for(let i=0;i<count;i++){
    const x = rnd(-20,20);
    const z = rnd(-20,20);
    const y = rnd(12,30);
    const u = new UFO(x,y,z);
    scene.append(u.entity);
    ufos.push(u);
    // random delay before invading
    setTimeout(()=> u.invade(), Math.floor(Math.random()*4000));
  }
}

// enhanced loop: update rockets and ufos
function enhancedLoop(){
  // update rockets
  for(let i=rockets.length-1;i>=0;i--){
    const r = rockets[i];
    r.update();
    if(r.y > 60){ if(r.entity.parentNode) r.entity.parentNode.removeChild(r.entity); rockets.splice(i,1); }
  }
  // update ufos
  for(let i=0;i<ufos.length;i++) ufos[i].update();
  window.requestAnimationFrame(enhancedLoop);
}

// Initialize challenges once scene is ready
window.addEventListener('DOMContentLoaded', ()=>{
  // If scene wasn't set earlier
  if(!scene) scene = document.querySelector('a-scene');
  createRocketGrid();
  createUFOs(12);
  // start enhanced animation loop (replace the simple loop)
  window.requestAnimationFrame(enhancedLoop);
});
