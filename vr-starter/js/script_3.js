/* global AFRAME, THREE */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}


// Makes clickable elements more interactive.
AFRAME.registerComponent('marker', {
    schema: {
/*        
        icon: {
            type: 'string',
            default: 'icn_point'
        },
        enterColor: {
            type: 'string',
            default: '#ffffff'
        },
        leaveColor: {
            type: 'string',
            default: '#ffffff'
        },
        yRot: {
            type: 'number',
            default: 0
        },
        yPos: {
            type: 'number',
            default: 0
        },
        zPos: {
            type: 'number',
            default: -3
        }
*/        
    },
    init: function () {
/*
        var data = this.data,
            el = this.el;

        el.setAttribute('rotation', `0 ${data.yRot} 0`);
        el.setAttribute('position', `0 ${data.yPos} 0`);

        //Create, Position, Style 'Marker' UI-Elements.
        var marker = document.createElement("a-entity");
        marker.setAttribute('geometry', 'primitive: plane; width:0.25; height: 0.25;');
        marker.setAttribute('material', `shader: flat; transparent:true; opacity: 0.75; color: ${data.leaveColor}; src: #${data.icon}`);
        marker.setAttribute('position', `0 0 ${data.zPos}`);
        marker.setAttribute('rotation', '0 0 0');
        marker.setAttribute('scale', '1 1 1');
        el.appendChild(marker);

        marker.addEventListener('mouseenter', function (evt) {
            this.setAttribute('material', `color: ${data.enterColor}; opacity: 0.95;`);
            this.setAttribute('scale', '1.25 1.25 1.25');
        });
        marker.addEventListener('mouseleave', function (evt) {
            this.setAttribute('material', `color: ${data.leaveColor}; opacity: 0.75;`);
            this.setAttribute('scale', '1 1 1');
        });
*/
    }
});

//Component rotating on the Y-axes with the camera.
AFRAME.registerComponent('rotate-with-camera', {
    init: function () {
/*
        this.cameraEl = document.querySelector('a-camera');
*/
    },
    tick: function () {
/*
        var rotation = this.cameraEl.object3D.getWorldRotation();
        this.el.setAttribute("rotation", "-90 0 " + Math.round(THREE.Math.radToDeg(rotation.y) * 100) / 100);
*/
    }
});



//
//-------- positioning helper function for markers --------
//

AFRAME.registerComponent('yhelper', {
    init: function () {
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
    },
    tick: function () {
        var rotation = this.el.object3D.getWorldRotation();
        this.yDisplay.setAttribute('text', 'value', Math.round(THREE.Math.radToDeg(rotation.y) * 100) / 100);
    }
});

//Loads Initial Scene.
onLoad();