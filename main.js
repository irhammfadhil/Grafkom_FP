// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#222222")
document.body.appendChild( renderer.domElement )

/*
var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshBasicMaterial( { color: 0xff0051 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )
renderer.render( scene, camera )*/

var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshBasicMaterial( { color: 0x883333 })
var hero = new THREE.Mesh ( geometry, material )
hero.castShadow=true;
hero.receiveShadow=false;
hero.position.y=2;
scene.add( hero )

var planeGeometry = new THREE.PlaneGeometry( 5, 5, 4, 4 );
var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
var ground = new THREE.Mesh( planeGeometry, planeMaterial );
ground.receiveShadow = true;
ground.castShadow=false;
ground.rotation.x=-Math.PI/2;
scene.add( ground );

camera.position.z = 5;
camera.position.y = 1;

sun = new THREE.DirectionalLight( 0xffffff, 0.8);
sun.position.set( 0,4,1 );
sun.castShadow = true;
scene.add(sun);

sun.shadow.mapSize.width = 256;
sun.shadow.mapSize.height = 256;
sun.shadow.camera.near = 0.5;
sun.shadow.camera.far = 50 ;

function update(){
    //animate
    hero.rotation.x += 0.01;
    hero.rotation.y += 0.01;
    render();
	requestAnimationFrame(update);//request next update
}

function animate() {
	requestAnimationFrame( animate )
	hero.rotation.x += 0.01;
	hero.rotation.y += 0.01;
	renderer.render( scene, camera )
}
animate()