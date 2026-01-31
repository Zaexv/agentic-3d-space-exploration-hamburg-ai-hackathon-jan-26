/**
 * Main Application Entry Point
 * Initializes the 3D space exploration application
 */

import { SceneManager } from './src/core/Scene.js';
import { CameraManager } from './src/core/Camera.js';
import { RendererManager } from './src/core/Renderer.js';
import { Planet } from './src/objects/Planet.js';
import { Star } from './src/objects/Star.js';
import { StarField } from './src/objects/StarField.js';
import { setupOrbitControls } from './src/controls/OrbitControls.js';
import { PLANETS_DATA } from './src/config/planets.js';

class App {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.init();
    }

    init() {
        // Initialize core components
        this.sceneManager = new SceneManager();
        this.cameraManager = new CameraManager(this.canvas);
        this.rendererManager = new RendererManager(this.canvas);

        // Setup controls
        this.controls = setupOrbitControls(
            this.cameraManager.camera,
            this.rendererManager.renderer.domElement
        );

        // Create scene objects
        this.createSceneObjects();

        // Start animation loop
        this.animate();

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());
    }

    createSceneObjects() {
        // Create background starfield
        const starField = new StarField(10000, 1000);
        this.sceneManager.add(starField.mesh);

        // Create central star (Sun)
        const sun = new Star({
            radius: 20,
            color: 0xffff00,
            emissiveIntensity: 2
        });
        this.sceneManager.add(sun.mesh);

        // Create planets from configuration
        this.planets = PLANETS_DATA.map(planetData => {
            const planet = new Planet(planetData);
            this.sceneManager.add(planet.group);
            return planet;
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Update controls
        this.controls.update();

        // Update all planets (rotation, orbit)
        if (this.planets) {
            this.planets.forEach(planet => planet.update());
        }

        // Render the scene
        this.rendererManager.render(
            this.sceneManager.scene,
            this.cameraManager.camera
        );
    }

    onWindowResize() {
        this.cameraManager.updateAspect(this.canvas);
        this.rendererManager.updateSize(this.canvas);
    }

    dispose() {
        // Cleanup resources
        this.planets?.forEach(planet => planet.dispose());
        this.rendererManager.dispose();
        this.controls.dispose();
    }
}

// Initialize application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new App());
} else {
    new App();
}
