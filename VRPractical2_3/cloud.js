class Cloud{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let circ1 = document.createElement("a-sphere");
        circ1.setAttribute("radius","0.55");
        circ1.setAttribute("position","0.5 -0.1 0.05");
        circ1.setAttribute("color","#ECF0F1");
        this.obj.append( circ1 );

        let circ2 = document.createElement("a-sphere");
        circ2.setAttribute("radius","0.65");
        circ2.setAttribute("position","0 0 0");
        circ2.setAttribute("color","#ECF0F1");
        this.obj.append( circ2 );

        let circ3 = document.createElement("a-sphere");
        circ3.setAttribute("radius","0.6");
        circ3.setAttribute("position","-0.5 -0.2 -0.05");
        circ3.setAttribute("color","#ECF0F1");
        this.obj.append( circ3 );

        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj )
    }
}