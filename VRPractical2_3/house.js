class House{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
  
        let base = document.createElement("a-box");
        base.setAttribute("color","white");
        base.setAttribute("position","0 1 0");
        base.setAttribute("height","2");
        base.setAttribute("width","2");
        base.setAttribute("depth","2");
        this.obj.append( base );

        let roof = document.createElement("a-cylinder");
        roof.setAttribute("segments-radial","3");
        roof.setAttribute("rotation","-90 0 0");
        roof.setAttribute("color","brown");
        roof.setAttribute("position","0 2.5 0");
        roof.setAttribute("height","2.5");
        roof.setAttribute("radius","1.5");
        this.obj.append( roof );

        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj );
    }
}