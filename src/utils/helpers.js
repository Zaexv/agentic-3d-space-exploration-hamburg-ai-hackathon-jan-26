/**
 * Helper Utilities
 * General utility functions for the application
 */

import * as THREE from 'three';

/**
 * Convert degrees to radians
 */
export function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * Generate random number in range
 */
export function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Create a simple texture from a canvas
 * Useful for procedural planet textures
 */
export function createProceduralTexture(size = 512, colorFn) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Fill with provided color function
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            const color = colorFn(x / size, y / size);
            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}

/**
 * Format astronomical distances
 */
export function formatDistance(distance, unit = 'AU') {
    if (distance < 1) {
        return `${(distance * 1000).toFixed(2)} thousand ${unit}`;
    } else if (distance < 1000) {
        return `${distance.toFixed(2)} ${unit}`;
    } else {
        return `${(distance / 1000).toFixed(2)} million ${unit}`;
    }
}

/**
 * Raycaster helper for object selection
 */
export function setupRaycaster(camera, canvas, scene, onObjectClick) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    canvas.addEventListener('click', (event) => {
        // Calculate mouse position in normalized device coordinates
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // Update raycaster
        raycaster.setFromCamera(mouse, camera);

        // Calculate objects intersecting the ray
        const intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0) {
            const object = intersects[0].object;
            if (object.userData && object.userData.type) {
                onObjectClick(object.userData);
            }
        }
    });
}
