import * as THREE from 'three';

export class WarpTunnel {
    constructor() {
        this.group = new THREE.Group();
        this.group.visible = false; // Hidden by default to prevent artifacts at 0,0,0
        this.isActive = false;
        this.uniforms = {
            time: { value: 0 },
            opacity: { value: 0 },
            speed: { value: 0 },
            color: { value: new THREE.Color(0xffffff) } // White for stars
        };

        this.createTunnel();
    }

    createTunnel() {
        // Simplified tunnel geometry - subtle effect only
        const geometry = new THREE.CylinderGeometry(3000, 3000, 30000, 32, 1, true);

        // Rotate to align with Z axis (Three.js cylinder is Y-up)
        geometry.rotateX(-Math.PI / 2);

        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform float opacity;
                uniform float speed;
                uniform vec3 color;
                varying vec2 vUv;

                // Simple pseudo-random
                float random(vec2 st) {
                    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                }

                void main() {
                    // Subtle star streak effect - realistic and clean
                    
                    float scrollSpeed = speed * time * 3.0; // Gentler scroll
                    
                    vec2 uv = vUv;
                    
                    // Single layer of sparse stars
                    vec2 grid = vec2(uv.x * 30.0, (uv.y - scrollSpeed) * 8.0);
                    vec2 ipos = floor(grid);
                    
                    float rnd = random(ipos);
                    
                    // Sparse stars - realistic space
                    float star = smoothstep(0.95, 1.0, rnd); // Very sparse (was 0.85)
                    
                    // Gentle fade
                    float fade = smoothstep(0.0, 0.3, uv.y) * smoothstep(1.0, 0.7, uv.y);
                    
                    // Simple white color - no blue tint
                    float intensity = star * fade * opacity * 0.6; // Dimmer overall
                    
                    gl_FragColor = vec4(color, intensity);
                }
            `,
            transparent: true,
            side: THREE.BackSide,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.group.add(this.mesh);
    }

    update(deltaTime, currentSpeed, cameraPosition, cameraQuaternion) {
        // Higher activation threshold - only at very high speeds
        const threshold = 500000; // 500k units/frame (was 100k)

        // Calculate targeted opacity - subtle effect
        let targetOpacity = 0;
        if (currentSpeed > threshold) {
            // Very subtle fade in - max 0.4 opacity
            targetOpacity = Math.min(0.4, (currentSpeed - threshold) / 500000);
        }

        // Smoothly interpolate opacity
        this.uniforms.opacity.value += (targetOpacity - this.uniforms.opacity.value) * deltaTime * 2.0;

        // Update effect only if visible
        if (this.uniforms.opacity.value > 0.01) {
            this.isActive = true;
            this.group.visible = true;

            // Update shader uniforms
            this.uniforms.time.value += deltaTime;
            this.uniforms.speed.value = currentSpeed / 2000000; // Slower movement (was 1000000)

            // Keep tunnel centered and aligned with camera
            this.group.position.copy(cameraPosition);
            this.group.quaternion.copy(cameraQuaternion);

        } else {
            this.isActive = false;
            this.group.visible = false;
        }
    }
}
