/*

	MaKnoWorld - a three.js experiment
	FLOOR

*/

var floor;

Floor = function(){
	// PlaneGeometry(width, height, widthSegments, heightSegments)
	var geom = new THREE.PlaneGeometry(10000,600,10,10);
	// rotate the geometry on the x axis
	geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/4));
	var mat = new THREE.MeshPhongMaterial({
		color:colorpalette.floor,
		transparent:true,
		opacity:.6,
		shading:THREE.FlatShading,
	});
	this.mesh = new Physijs.PlaneMesh(geom, mat,0);
	this.mesh.position.set(0,0,0);
	this.mesh.receiveShadow = true; 
}

function createFloor(){
	floor = new Floor();
	scene.add(floor.mesh);
}
