function rnd(l, u) {
  return Math.random() * (u - l) + l;
}

window.addEventListener("DOMContentLoaded", function () {
  scene = document.querySelector("a-scene");

  for (let i = 0; i < 20; i++) { 
    let x = rnd(-20, 20);
    let z = rnd(-20, 20);
    createHay(x, 0, z);
  }
});

function createHay(x, y, z) {
  let hay = document.createElement("a-dodecahedron");
  hay.setAttribute("material", "src: url(hay.jpg);");

  
  hay.setAttribute("radius", 1);

  
  hay.setAttribute("position", { x: x, y: y + 1, z: z });

  scene.append(hay);
}