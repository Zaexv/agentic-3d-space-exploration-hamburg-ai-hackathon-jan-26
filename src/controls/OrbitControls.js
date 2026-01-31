/**
 * Orbit Controls Setup
 * Integrates Three.js OrbitControls for camera interaction
 */

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function setupOrbitControls(camera, domElement) {
    const controls = new OrbitControls(camera, domElement);

    // Configure controls
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 20;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI;

    // Enable panning and rotation
    controls.enablePan = true;
    controls.enableRotate = true;
    controls.enableZoom = true;

    // Configure rotation speed
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 1.0;
    controls.panSpeed = 0.5;

    return controls;
}
