// Set up Three.js components
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Set renderer size and attach it to the DOM
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Position the camera
camera.position.z = 15;

// Load the model with GLTFLoader
const loader = new THREE.GLTFLoader();
loader.load(
    'assets/my-model.glb', // Relative path to the .glb file within the project
    function (gltf) {
        // Add the loaded model to the scene
        const model = gltf.scene;
        scene.add(model);

        // Optionally adjust model's position, rotation, or scale
        model.position.set(0, 0, 0); // Center it in the scene
        model.rotation.y = Math.PI / 4; // Rotate if needed
        model.scale.set(1, 1, 1); // Scale the model if necessary
    },
    undefined,
    function (error) {
        console.error('Error loading model:', error);
    }
);

// Animation loop to render the scene continuously
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
