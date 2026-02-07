/**
 * Camera Manager
 * Handles camera setup and configuration
 */

import * as THREE from 'three';

export class CameraManager {
    constructor(canvas) {
        this.camera = this.createCamera(canvas);
        this.setupCameraPosition();
    }

    createCamera(canvas) {
        const aspect = canvas.clientWidth / canvas.clientHeight;
        const fov = 75;
        const near = 1;
        const far = 100000000000000; // 100 trillion units - handles exoplanets at all distances

        return new THREE.PerspectiveCamera(fov, aspect, near, far);
    }

    setupCameraPosition() {
        // Position camera to view solar system (scaled 10,000x)
        // Solar system has 1000x position boost
        this.camera.position.set(0, 5000000, 20000000);
        this.camera.lookAt(0, 0, 0);
        
        // Add light that follows camera for better visibility
        this.cameraLight = new THREE.PointLight(0xffffff, 2.5, 200000000);
        this.cameraLight.position.set(0, 0, 0); // Will follow camera
        this.camera.add(this.cameraLight);
    }

    updateAspect(canvas) {
        const aspect = canvas.clientWidth / canvas.clientHeight;
        this.camera.aspect = aspect;
        this.camera.updateProjectionMatrix();
    }

    getCamera() {
        return this.camera;
    }
}
