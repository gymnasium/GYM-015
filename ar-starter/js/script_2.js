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
        var data = this.data;
/*
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
*/
    }
});
