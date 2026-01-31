/**
 * StarField Class
 * Creates a background field of stars
 */

import * as THREE from 'three';

export class StarField {
    constructor(count = 10000, radius = 1000) {
        this.count = count;
        this.radius = radius;
        this.createStarField();
    }

    createStarField() {
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];

        // Generate random star positions
        for (let i = 0; i < this.count; i++) {
            // Random position in sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const r = this.radius;

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions.push(x, y, z);

            // Random star colors (slight variations of white)
            const brightness = 0.7 + Math.random() * 0.3;
            colors.push(brightness, brightness, brightness);
        }

        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        );
        geometry.setAttribute(
            'color',
            new THREE.Float32BufferAttribute(colors, 3)
        );

        // Create points material
        const material = new THREE.PointsMaterial({
            size: 1.5,
            vertexColors: true,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8
        });

        this.mesh = new THREE.Points(geometry, material);
    }

    dispose() {
        this.mesh.geometry.dispose();
        this.mesh.material.dispose();
    }
}
