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
        this.scene.background = new THREE.Color(0x000011);

        // Add exponential fog for depth (ajustado para escala x10000)
        // DISABLED - fog was causing transparency issues
        // this.scene.fog = new THREE.FogExp2(0x000011, 0.00000002);

        // Ambient light ensures all planets are at least partially visible
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
        directionalLight.position.set(1, 0.5, 0);
        this.scene.add(directionalLight);
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
