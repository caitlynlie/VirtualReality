function rnd(l, u) {
  return Math.random() * (u - l) + l;
}

window.addEventListener("DOMContentLoaded", function () {
  scene = document.querySelector("a-scene");

  for (let i = 0; i < 15; i++) {
    let x = rnd(-20, 20);
    let z = rnd(-20, 20);
    createTree(x, -0.5, z);
  }
});


function createTree(x, y, z) {
  let tree = document.createElement("a-cone");
  tree.setAttribute("material", "src: url(trees.jpg);");

  
  tree.setAttribute("height", 5);        
  tree.setAttribute("radius-bottom", 1); 
  tree.setAttribute("radius-top", 0.2);  

  tree.setAttribute("position", { x: x, y: y + 2.5, z: z });
  scene.append(tree);
}