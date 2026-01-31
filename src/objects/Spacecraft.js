/**
 * Spacecraft Class
 * Creates a procedural spacecraft model for foreground display
 */

import * as THREE from 'three';

export class Spacecraft {
    constructor(position = { x: -30, y: -15, z: 80 }) {
        this.position = position;
        this.group = new THREE.Group();
        this.createSpacecraft();
        this.setupAnimation();
    }

    createSpacecraft() {
        // Main fuselage
        const fuselageGeometry = new THREE.CylinderGeometry(1.5, 2, 10, 16);
        const fuselageMaterial = new THREE.MeshStandardMaterial({
            color: 0xcccccc,
            metalness: 0.8,
            roughness: 0.2
        });
        const fuselage = new THREE.Mesh(fuselageGeometry, fuselageMaterial);
        fuselage.rotation.z = Math.PI / 2;
        fuselage.castShadow = true;
        this.group.add(fuselage);

        // Cockpit (front)
        const cockpitGeometry = new THREE.SphereGeometry(2, 16, 16, 0, Math.PI);
        const cockpitMaterial = new THREE.MeshStandardMaterial({
            color: 0x3399ff,
            metalness: 0.5,
            roughness: 0.1,
            transparent: true,
            opacity: 0.7
        });
        const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
        cockpit.position.x = 5;
        cockpit.rotation.z = -Math.PI / 2;
        cockpit.castShadow = true;
        this.group.add(cockpit);

        // Wings (left and right)
        const wingGeometry = new THREE.BoxGeometry(12, 0.3, 4);
        const wingMaterial = new THREE.MeshStandardMaterial({
            color: 0x888888,
            metalness: 0.7,
            roughness: 0.3
        });

        const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
        leftWing.position.set(0, 0, -6);
        leftWing.castShadow = true;
        this.group.add(leftWing);

        const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
        rightWing.position.set(0, 0, 6);
        rightWing.castShadow = true;
        this.group.add(rightWing);

        // Engine nacelles (left and right)
        const engineGeometry = new THREE.CylinderGeometry(0.8, 1.2, 4, 12);
        const engineMaterial = new THREE.MeshStandardMaterial({
            color: 0x444444,
            metalness: 0.9,
            roughness: 0.1
        });

        const leftEngine = new THREE.Mesh(engineGeometry, engineMaterial);
        leftEngine.position.set(-3, 0, -6);
        leftEngine.rotation.z = Math.PI / 2;
        leftEngine.castShadow = true;
        this.group.add(leftEngine);

        const rightEngine = new THREE.Mesh(engineGeometry, engineMaterial);
        rightEngine.position.set(-3, 0, 6);
        rightEngine.rotation.z = Math.PI / 2;
        rightEngine.castShadow = true;
        this.group.add(rightEngine);

        // Engine glow (emissive)
        const glowGeometry = new THREE.CylinderGeometry(0.6, 0.9, 1.5, 12);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.8
        });

        const leftGlow = new THREE.Mesh(glowGeometry, glowMaterial);
        leftGlow.position.set(-5, 0, -6);
        leftGlow.rotation.z = Math.PI / 2;
        this.group.add(leftGlow);
        this.leftGlow = leftGlow;

        const rightGlow = new THREE.Mesh(glowGeometry, glowMaterial);
        rightGlow.position.set(-5, 0, 6);
        rightGlow.rotation.z = Math.PI / 2;
        this.group.add(rightGlow);
        this.rightGlow = rightGlow;

        // Position the spacecraft
        this.group.position.set(this.position.x, this.position.y, this.position.z);

        // Rotate to face forward
        this.group.rotation.y = Math.PI / 6;

        // Store metadata
        this.group.userData = { type: 'spacecraft' };
    }

    setupAnimation() {
        this.animationTime = 0;
        this.basePosition = { ...this.position };
    }

    update(deltaTime = 0.016) {
        this.animationTime += deltaTime;

        // Gentle bobbing motion
        const bobAmount = 0.3;
        this.group.position.y = this.basePosition.y + Math.sin(this.animationTime * 2) * bobAmount;

        // Slight rocking rotation
        this.group.rotation.z = Math.sin(this.animationTime * 1.5) * 0.02;

        // Pulse engine glow
        const glowIntensity = 0.6 + Math.sin(this.animationTime * 5) * 0.2;
        if (this.leftGlow && this.rightGlow) {
            this.leftGlow.material.opacity = glowIntensity;
            this.rightGlow.material.opacity = glowIntensity;
        }
    }

    dispose() {
        this.group.traverse((child) => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(mat => mat.dispose());
                } else {
                    child.material.dispose();
                }
            }
        });
    }
}
