/**
 * Planet Class
 * Reusable class for creating and managing planet objects
 */

import * as THREE from 'three';

export class Planet {
    constructor(config) {
        this.config = {
            name: config.name || 'Unknown Planet',
            radius: config.radius || 5,
            color: config.color || 0x888888,
            texture: config.texture || null,
            position: config.position || { x: 0, y: 0, z: 0 },
            orbitRadius: config.orbitRadius || 0,
            orbitSpeed: config.orbitSpeed || 0,
            rotationSpeed: config.rotationSpeed || 0.01,
            tilt: config.tilt || 0,
            ...config
        };

        this.angle = Math.random() * Math.PI * 2; // Random starting position in orbit
        this.group = new THREE.Group();
        this.createPlanet();
    }

    createPlanet() {
        // Create planet geometry
        const geometry = new THREE.SphereGeometry(
            this.config.radius,
            64,
            64
        );

        // Create material based on config
        const material = this.config.texture
            ? new THREE.MeshStandardMaterial({
                map: new THREE.TextureLoader().load(this.config.texture),
                roughness: 0.8,
                metalness: 0.2
            })
            : new THREE.MeshStandardMaterial({
                color: this.config.color,
                roughness: 0.8,
                metalness: 0.2
            });

        this.mesh = new THREE.Mesh(geometry, material);

        // Apply axial tilt
        this.mesh.rotation.z = this.config.tilt;

        // Position the planet
        if (this.config.orbitRadius > 0) {
            // Planet will orbit, so position is calculated in update()
            this.group.add(this.mesh);
        } else {
            // Static position
            this.mesh.position.set(
                this.config.position.x,
                this.config.position.y,
                this.config.position.z
            );
            this.group.add(this.mesh);
        }

        // Store reference for potential AI/data integration
        this.mesh.userData = {
            type: 'planet',
            name: this.config.name,
            data: this.config
        };
    }

    update() {
        // Rotate planet on its axis
        this.mesh.rotation.y += this.config.rotationSpeed;

        // Update orbital position if applicable
        if (this.config.orbitRadius > 0 && this.config.orbitSpeed > 0) {
            this.angle += this.config.orbitSpeed;
            this.mesh.position.x = Math.cos(this.angle) * this.config.orbitRadius;
            this.mesh.position.z = Math.sin(this.angle) * this.config.orbitRadius;
        }
    }

    dispose() {
        this.mesh.geometry.dispose();
        this.mesh.material.dispose();
        if (this.mesh.material.map) {
            this.mesh.material.map.dispose();
        }
    }
}
