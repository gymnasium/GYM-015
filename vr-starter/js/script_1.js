/* global AFRAME, THREE */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

//
//-------- positioning helper function for markers --------
//

AFRAME.registerComponent('yhelper', {
    init: function () {
/*
        var yDisplay = document.createElement("a-entity");
        yDisplay.setAttribute('geometry', 'primitive: plane; width: 0.5; height: 0.2;');
        yDisplay.setAttribute('material', 'shader: flat; opacity: 0.2; color: #000000');
        yDisplay.setAttribute('rotation', '0 0 0');
        yDisplay.setAttribute('position', '0 0.125 -1');
        yDisplay.setAttribute('text', 'value', 'y-pos');
        yDisplay.setAttribute('text', 'align', 'center');
        yDisplay.setAttribute('text', 'wrapCount', '10');
        this.el.appendChild(yDisplay);
        this.yDisplay = yDisplay;
*/
    },
    tick: function () {
/*
        var rotation = this.el.object3D.getWorldRotation();
        this.yDisplay.setAttribute('text', 'value', Math.round(THREE.Math.radToDeg(rotation.y) * 100) / 100);
*/
    }
});