/**
 * Scene Manager
 * Handles Three.js scene setup and configuration
 */

import * as THREE from 'three';

export class SceneManager {
    constructor() {
        this.scene = new THREE.Scene();
        this.setupScene();
    }

    setupScene() {
        // Set background to dark space
        this.scene.background = new THREE.Color(0x000000);

        // Add ambient light for subtle illumination
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(ambientLight);

        // Add directional light (simulating sunlight)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(0, 0, 0);
        this.scene.add(directionalLight);

        // Add point light at center (for sun glow effect)
        const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
        pointLight.position.set(0, 0, 0);
        this.scene.add(pointLight);
    }

    add(object) {
        this.scene.add(object);
    }

    remove(object) {
        this.scene.remove(object);
    }

    getScene() {
        return this.scene;
    }
}
