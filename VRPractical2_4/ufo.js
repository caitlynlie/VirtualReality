class UFO {
        constructor(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.dy = 0.02 + Math.random() * 0.2;
          this.obj = document.createElement("a-entity");

          
          let base = document.createElement("a-cylinder");
          base.setAttribute("radius", "1.2");
          base.setAttribute("height", "0.15");
          base.setAttribute("material", "src: url(metal.webp); repeat: 2 2;");
          this.obj.append(base);

          
          let dome = document.createElement("a-sphere");
          dome.setAttribute("material", "src: url(glass.jpg); opacity: 0.8;");
          dome.setAttribute("radius","0.7");
          dome.setAttribute("position","0 0.4 0");
          this.obj.append(dome);

          
          for(let i=0;i<6;i++){
            let angle = i*(Math.PI/3);
            let lx = Math.cos(angle)*1.0;
            let lz = Math.sin(angle)*1.0;
            let light = document.createElement("a-sphere");
            light.setAttribute("color","red");
            light.setAttribute("radius","0.1");
            light.setAttribute("position",`${lx} 0 ${lz}`);
            this.obj.append(light);
          }
        }

        invade() {
          this.y -= this.dy;
          if (this.y < 0.2) this.y = 0.2;
          this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        }
      }