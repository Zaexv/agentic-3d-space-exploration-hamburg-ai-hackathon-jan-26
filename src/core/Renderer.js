/**
 * Renderer Manager
 * Handles WebGL renderer setup and configuration
 */

import * as THREE from 'three';

export class RendererManager {
    constructor(canvas) {
        this.renderer = this.createRenderer(canvas);
        this.configureRenderer();
    }

    createRenderer(canvas) {
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: false
        });

        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        return renderer;
    }

    configureRenderer() {
        // Enable physically correct lighting
        this.renderer.physicallyCorrectLights = true;

        // Enable shadow mapping if needed
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Set tone mapping for better colors
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;
    }

    render(scene, camera) {
        this.renderer.render(scene, camera);
    }

    updateSize(canvas) {
        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    dispose() {
        this.renderer.dispose();
    }

    getRenderer() {
        return this.renderer;
    }
}
