/* global AFRAME, THREE */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

//Marker that links to 'Location' within VR experience. 
AFRAME.registerComponent("pin", {
    schema: {
        xpos: {
            type: 'number',
            default: 0
        },
        zpos: {
            type: 'number',
            default: 0
        },
        url: {
            type: 'string',
            default: ''
        },
    },
    init: function () {
        var data = this.data,
            infobox = this.infobox = document.getElementById('infobox'),
            infotitle = this.infotitle = document.getElementById('infotitle'),
            infodescription = document.getElementById('infodescription');

        var pinBase = document.createElement("a-entity");
        pinBase.setAttribute('geometry', 'primitive: cone; radiusBottom: 0.00001; radiusTop: 0.01; height: 0.04;');
        pinBase.setAttribute('material', 'shader: flat; opacity: 0.5; color: #fff');
        pinBase.setAttribute('position', `${data.xpos} 0.02 ${data.zpos}`);
        this.el.appendChild(pinBase);

        var pinTop = document.createElement("a-entity");
        pinTop.setAttribute('geometry', 'primitive: sphere; radius: 0.01; phiLength:180;');
        pinTop.setAttribute('material', 'shader: flat; opacity: 0.5; color: #fff');
        pinTop.setAttribute('position', '0 0.0205 0');
        pinTop.setAttribute('rotation', '-90 0 0');

        pinBase.appendChild(pinTop);
        var pinTopInner = document.createElement("a-entity");
        pinTopInner.setAttribute('geometry', 'primitive: sphere; radius: 0.007;');
        pinTopInner.setAttribute('material', 'opacity: 1; color: #fff');

        pinTop.appendChild(pinTopInner);

        pinBase.addEventListener("click", function () {
            this.setAttribute("scale", " 1.4 1.4 1.4");
            pinTopInner.setAttribute("material", "color:red;");

            infotitle.textContent = "Outlinking";
            infodescription.textContent = "redirecting to " + data.url;

            window.open(data.url, "_self");

        });
        pinBase.addEventListener("mouseenter", function () {
            this.setAttribute("scale", " 1.4 1.4 1.4");
            pinTopInner.setAttribute("material", "color:#ea9b23;");

            infotitle.textContent = "View in VR mode";
            infodescription.textContent = "Click on a pin to navigate to that location in VR";
            //            infodescription.textContent = "By selecting a pin, you will be entering a VR view of this location";
            infobox.classList.add("show");
        });
        pinBase.addEventListener("mouseleave", function () {
            this.setAttribute("scale", " 1 1 1");
            pinTopInner.setAttribute("material", "color:#fff;");

            infotitle.textContent = "";
            infodescription.textContent = "";
            infobox.classList.remove("show");
        });

    }
});

//Adjusts color of an entity on mouse enter.
//Adds title and description of hovered area.
AFRAME.registerComponent("area-highlight", {
    schema: {
        color: {
            default: "#f0f0f0"
        },
        area: {
            default: "no area"
        },
        description: {
            default: "no description"
        },
    },
    init: function () {
        var data = this.data,
            el = this.el,
            infobox = document.getElementById('infobox'),
            infotitle = document.getElementById('infotitle'),
            infodescription = document.getElementById('infodescription');
/*
        el.setAttribute("position", "0 0.03 0");
        el.setAttribute("material", `color: ${data.color}; shading:flat; opacity:0.2`);

        el.addEventListener("mouseenter", function () {
            this.setAttribute("material", "opacity", "1");

            infotitle.textContent = data.area;
            infodescription.textContent = data.description;
            infobox.classList.add("show");
        });
        el.addEventListener("mouseleave", function () {
            this.setAttribute("material", "opacity", "0.2");

            infotitle.textContent = "";
            infodescription.textContent = "";
            infobox.classList.remove("show");
        });
*/
    }
});
