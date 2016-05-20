/*

	MaKnoWorld - a three.js experiment
	ITPLUS

*/

var itplus;

ITplus = function(){
	// this.mesh = new THREE.Object3D();
	var matITplus = new THREE.MeshPhongMaterial({color:colorpalette.itplus, shading:THREE.FlatShading});
	
	// BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
	var geomI = new THREE.BoxGeometry(50,275,50,1,1,1);
	// var objI = new THREE.Mesh(geomI, matITplus);
	// objI.castShadow = true;
	// objI.receiveShadow = true;
	// this.mesh.add(objI);
	this.mesh = new Physijs.BoxMesh(geomI, matITplus);
	this.mesh.castShadow = true;
	this.mesh.receiveShadow = true;
	
	var geomT1 = new THREE.BoxGeometry(50,225,50,1,1,1);
	var geomT2 = new THREE.BoxGeometry(200,50,50,1,1,1);
	var geomT3 = new THREE.BoxGeometry(135,50,50,1,1,1);
	var geomT4 = new THREE.BoxGeometry(50,135,50,1,1,1);
	
	var objT1 = new THREE.Mesh(geomT1, matITplus);
	var objT2 = new THREE.Mesh(geomT2, matITplus);
	var objT3 = new THREE.Mesh(geomT3, matITplus);
	var objT4 = new THREE.Mesh(geomT4, matITplus); 
	/*
	var objT1 = new THREE.Mesh(geomT1, matITplus);
	var objT2 = new THREE.Mesh(geomT2, matITplus);
	var objT3 = new THREE.Mesh(geomT3, matITplus);
	var objT4 = new THREE.Mesh(geomT4, matITplus); 
	*/
	objT1.castShadow = true; objT2.castShadow = true;
	objT3.castShadow = true; objT4.castShadow = true;
	objT1.receiveShadow = false; objT2.receiveShadow = false;
	objT3.receiveShadow = true; objT4.receiveShadow = true;
	objT1.position.set(175,-25,0);
	objT2.position.set(175,112.5,0);
	objT3.position.set(400,0,0);
	objT4.position.set(400,0,0);
	this.mesh.add(objT1);
	this.mesh.add(objT2);
	this.mesh.add(objT3);
	this.mesh.add(objT4);
}

function createITplus(){
	itplus = new ITplus();
	itplus.mesh.scale.set(.25,.25,.25);
	itplus.mesh.position.y = 300;
	itplus.mesh.position.x = -75;
	itplus.mesh.position.z = -125;
	scene.add(itplus.mesh);
}
