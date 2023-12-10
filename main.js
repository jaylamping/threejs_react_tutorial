import * as THREE from 'three';

// constants
const aspectRatio = window.innerWidth / window.innerHeight;
const nearFrustum = 0.1;
const farFrustum = 100;

// scene
const scene = new THREE.Scene();

// mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'purple' });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  aspectRatio,
  nearFrustum,
  farFrustum
);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
