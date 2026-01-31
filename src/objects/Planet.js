/**
 * Planet Class
 * Reusable class for creating and managing planet objects
 */

import * as THREE from 'three';
import {
    generateRockyTexture,
    generateGasGiantTexture,
    generateIceGiantTexture,
    generateNormalMap
} from '../utils/textureGenerator.js';

export class Planet {
    constructor(config) {
        this.config = {
            name: config.name || 'Unknown Planet',
            planetType: config.planetType || 'rocky',
            radius: config.radius || 5,
            color: config.color || 0x888888,
            detailColor: config.detailColor || 0x666666,
            gasColors: config.gasColors || [0x888888],
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

        // Generate procedural texture based on planet type
        let texture, normalMap;

        if (this.config.planetType === 'rocky') {
            texture = generateRockyTexture(this.config.color, this.config.detailColor);
            normalMap = generateNormalMap(512, 2.0);
        } else if (this.config.planetType === 'gasGiant') {
            texture = generateGasGiantTexture(this.config.gasColors);
            normalMap = generateNormalMap(512, 0.5);
        } else if (this.config.planetType === 'iceGiant') {
            texture = generateIceGiantTexture(this.config.color);
            normalMap = generateNormalMap(512, 0.3);
        }

        // Create material with realistic lighting
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            normalMap: normalMap,
            roughness: this.config.planetType === 'iceGiant' ? 0.4 : 0.9,
            metalness: 0.1
        });

        this.mesh = new THREE.Mesh(geometry, material);

        // Enable shadows
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;

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
