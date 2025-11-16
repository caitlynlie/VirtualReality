class Wall {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("material", "src: url(corn.jpg);");

    
    this.obj.setAttribute("height", "3");   
    this.obj.setAttribute("radius", "0.5");

    this.obj.setAttribute("position", { x: x, y: y, z: z });

    scene.append(this.obj);
  }
}