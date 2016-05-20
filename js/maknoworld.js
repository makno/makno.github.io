/*

	MaKnoWorld - a three.js experiment

*/

'use strict';

var colorpalette = {
	floor:0xffffff, // white
	itplus:0xffffff, // white
	brown:0x59332e,
	pink:0xF5986E,
	brownDark:0x23190f,
	blue:0x68c3c0,
};

var scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH, renderer, container;

window.addEventListener('load', init, false);

Physijs.scripts.worker = 'js/physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';

function init() {
	createScene();
	createLights();
	createITplus();
	createFloor();
	loop();
}
function createScene() {
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;

	// scene
	//scene = new THREE.Scene();
	scene = new Physijs.Scene;
	scene.setGravity(new THREE.Vector3( 0, -30, 0 ));

	scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
	
	// camera
	aspectRatio = WIDTH / HEIGHT;
	fieldOfView = 60;
	nearPlane = 1;
	farPlane = 10000;
	camera = new THREE.PerspectiveCamera( fieldOfView, aspectRatio, nearPlane, farPlane );
	camera.position.x = 0;
	camera.position.z = 200;
	camera.position.y = 100;
	
	// renderer
	renderer = new THREE.WebGLRenderer({ 
		alpha: true, // transparency for gradient background to shine through
		antialias: true 
	});
	renderer.setSize(WIDTH, HEIGHT);
	renderer.shadowMap.enabled = true;
	
	//renderer.domElement.addEventListener( 'mousedown', handleMouseDown );
	renderer.domElement.addEventListener( 'mousemove', handleMouseMove );
	//renderer.domElement.addEventListener( 'mouseup', handleMouseUp );
	
	// attach renderer to DOM
	container = document.getElementById('maknoworld');
	container.appendChild(renderer.domElement);
	
	// handle resizing
	window.addEventListener('resize', handleWindowResize, false);
	
}

function handleWindowResize() {
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;
	renderer.setSize(WIDTH, HEIGHT);
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();
}

function loop(){
	
	scene.simulate();
	renderer.render(scene, camera);
	requestAnimationFrame(loop);
}

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var handleMouseMove = function(event){
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;	
	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObjects( scene.children );	
	for ( var i = 0; i < intersects.length; i++ ) {
		intersects[ i ].object.material.color.set( 0xff0000 );
	}	
}




