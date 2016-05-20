/*

	MaKnoWorld - a three.js experiment
	LIGHTS

*/

var overallLight, shadowLight;

function createLights() {
	overallLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)
	shadowLight = new THREE.DirectionalLight(0xffffff, .9);
	shadowLight.position.set(150, 350, 350);
	shadowLight.castShadow = true;
	// visible area of the projected shadow
	shadowLight.shadow.camera.left = -400;
	shadowLight.shadow.camera.right = 400;
	shadowLight.shadow.camera.top = 400;
	shadowLight.shadow.camera.bottom = -400;
	shadowLight.shadow.camera.near = 1;
	shadowLight.shadow.camera.far = 1000;
	// resolution of the shadow
	shadowLight.shadow.mapSize.width = 2048;
	shadowLight.shadow.mapSize.height = 2048;

	scene.add(overallLight);  
	scene.add(shadowLight);
}
