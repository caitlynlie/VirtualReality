class Rocket {
        constructor(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.dy = 0.01 + Math.random() * 0.5;
          this.obj = document.createElement("a-entity");

          
          let tipt = document.createElement("a-sphere");
          tipt.setAttribute("color","white");
          tipt.setAttribute("position","0 2.7 0");
          tipt.setAttribute("radius","0.16");
          this.obj.append(tipt);

          let tip = document.createElement("a-cone");
          tip.setAttribute("color","white");
          tip.setAttribute("position","0 2.4375 0");
          tip.setAttribute("radius-bottom","0.35");
          tip.setAttribute("radius-top","0.15");
          tip.setAttribute("height","0.625");
          this.obj.append(tip);

          let body = document.createElement("a-cylinder");
          body.setAttribute("position", "0 -0.5 0");
          body.setAttribute("height", "6");
          body.setAttribute("radius", "0.5");
          body.setAttribute("material", "src: url(metal.webp); repeat: 2 2;");
          this.obj.append(body);

          let booster = document.createElement("a-cone");
          booster.setAttribute("position", "0 -3.5 0");
          booster.setAttribute("radius-bottom", "0.5");
          booster.setAttribute("radius-top", "0.45");
          booster.setAttribute("height", "0.5");
          booster.setAttribute("material", "src: url(metal.webp);");
          this.obj.append(booster);

          let fire = document.createElement("a-cone");
          fire.setAttribute("material", "src: url(fire.jpg); opacity: 0.85;");
          fire.setAttribute("position", "0 -4 0");
          fire.setAttribute("rotation", "-180 0 0");
          fire.setAttribute("radius-bottom", "0.4");
          fire.setAttribute("radius-top", "0");
          fire.setAttribute("height", "1.5");
          this.obj.append(fire);
        }

        fly() {
          this.y += this.dy;
          this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        }
        //
      }