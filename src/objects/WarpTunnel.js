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
        // Huge cylinder that surrounds the camera
        // Radius: 50, Height: 1000, Segments: 32, OpenEnded
        const geometry = new THREE.CylinderGeometry(50, 50, 1000, 32, 1, true);

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

                float hash(vec2 p) {
                    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
                }

                void main() {
                    float scroll = speed * time * 8.0;
                    vec2 uv = vUv;

                    // Stretch the V axis based on speed for elongated streaks
                    float stretch = 3.0 + speed * 15.0;
                    vec2 grid = vec2(uv.x * 60.0, (uv.y - scroll) * stretch);
                    vec2 cell = floor(grid);
                    vec2 f = fract(grid);

                    float rnd = hash(cell);

                    // Fewer but brighter stars
                    float star = smoothstep(0.92, 1.0, rnd);

                    // Elongated streak shape — narrow horizontally, stretched vertically
                    float streakX = smoothstep(0.5, 0.35, abs(f.x - 0.5));
                    float streakY = smoothstep(0.0, 0.1, f.y) * smoothstep(1.0, 0.5, f.y);
                    star *= streakX * streakY;

                    // Color variation per star
                    vec3 starColor = mix(color, vec3(0.6, 0.85, 1.0), rnd * 0.4);

                    // Fade at cylinder ends
                    float fade = smoothstep(0.0, 0.25, uv.y) * smoothstep(1.0, 0.75, uv.y);

                    float intensity = star * fade * opacity;

                    gl_FragColor = vec4(starColor, intensity);
                }
            `,
            transparent: true,
            side: THREE.BackSide, // Render inside
            depthWrite: false, // Don't block other transparent objects
            blending: THREE.AdditiveBlending // Glow effect
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.group.add(this.mesh);
    }

    update(deltaTime, currentSpeed, cameraPosition, cameraQuaternion) {
        // Activation threshold (scaled for LY_TO_SCENE=3000)
        const threshold = 50000.0;

        // Calculate targeted opacity based on speed
        let targetOpacity = 0;
        if (currentSpeed > threshold) {
            targetOpacity = Math.min(0.8, (currentSpeed - threshold) / 100000.0);
        }

        // Smoothly interpolate opacity
        this.uniforms.opacity.value += (targetOpacity - this.uniforms.opacity.value) * deltaTime * 2.0;

        // Update effect only if visible
        if (this.uniforms.opacity.value > 0.01) {
            this.isActive = true;
            this.group.visible = true;

            // Update shader uniforms
            this.uniforms.time.value += deltaTime;
            this.uniforms.speed.value = currentSpeed / 10000.0; // Normalize speed for shader

            // Keep tunnel centered and aligned with camera
            this.group.position.copy(cameraPosition);
            this.group.quaternion.copy(cameraQuaternion);

        } else {
            this.isActive = false;
            this.group.visible = false;
        }
    }
}
