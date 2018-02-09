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

    }
});

//Optical crosshair (Custom Cursor Element).
AFRAME.registerComponent("crosshair", {
    init: function () {
        //Base Ring Background.
        var _00 = document.createElement("a-entity");
        _00.setAttribute('geometry', 'primitive: ring; radiusInner: 0.017; radiusOuter: 0.021;');
        _00.setAttribute('material', 'shader: flat; color: #fff');
        this.el.appendChild(_00);

        //Four Corners of crosshair background.
        var _a1 = document.createElement("a-entity");
        _a1.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:41; thetaLength:8;');
        _a1.setAttribute('material', 'shader: flat; color: #fff');
        this.el.appendChild(_a1);

        var _b1 = document.createElement("a-entity");
        _b1.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:131; thetaLength:8;');
        _b1.setAttribute('material', 'shader: flat; color: #fff');
        this.el.appendChild(_b1);

        var _c1 = document.createElement("a-entity");
        _c1.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:221; thetaLength:8;');
        _c1.setAttribute('material', 'shader: flat; color: #fff');
        this.el.appendChild(_c1);

        var _d1 = document.createElement("a-entity");
        _d1.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:311; thetaLength:8;');
        _d1.setAttribute('material', 'shader: flat; color: #fff');
        this.el.appendChild(_d1);

        //Base ring foreground.
        var _01 = document.createElement("a-entity");
        _01.setAttribute('geometry', 'primitive: ring; radiusInner: 0.018; radiusOuter: 0.02;');
        _01.setAttribute('material', 'shader: flat; color: #EC8F2D');
        this.el.appendChild(_01);

        var _a2 = document.createElement("a-entity");
        _a2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:43; thetaLength:4;');
        _a2.setAttribute('material', 'shader: flat; color: #EC8F2D');
        this.el.appendChild(_a2);

        var _b2 = document.createElement("a-entity");
        _b2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:133; thetaLength:4;');
        _b2.setAttribute('material', 'shader: flat; color: #EC8F2D');
        this.el.appendChild(_b2);

        var _c2 = document.createElement("a-entity");
        _c2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:223; thetaLength:4;');
        _c2.setAttribute('material', 'shader: flat; color: #EC8F2D');
        this.el.appendChild(_c2);

        var _d2 = document.createElement("a-entity");
        _d2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:313; thetaLength:4;');
        _d2.setAttribute('material', 'shader: flat; color: #EC8F2D');
        this.el.appendChild(_d2);
    }
});