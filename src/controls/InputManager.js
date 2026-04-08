import * as THREE from 'three';
import { VirtualJoystick } from '../ui/virtual-joystick/VirtualJoystick.js';

class InputManager {
    constructor(canvas, callbacks = {}) {
        this.canvas = canvas;
        this.callbacks = callbacks;
        this.deps = {};

        this.keys = {
            up: false,
            down: false,
            left: false,
            right: false,
            speedUp: false,
            speedDown: false,
            boost: false,
            brake: false
        };

        this.mouse = { x: 0, y: 0 };

        this.controlsEnabled = true;

        this._joystick = new VirtualJoystick({ mount: document.body });
        this._joystick.mountToDOM();
        this._joystickActive = false;
        this._joystickPointerId = null;
        this._suppressClick = false;
    }

    setDependencies(deps) {
        this.deps = deps;
    }

    setupControls() {
        window.addEventListener('keydown', (e) => {
            const activeElement = document.activeElement;
            const isTyping = activeElement && (
                activeElement.tagName === 'INPUT' ||
                activeElement.tagName === 'TEXTAREA' ||
                activeElement.isContentEditable
            );
            if (isTyping) return;

            const narratorOpen = this.deps.narratorDialog && this.deps.narratorDialog.isShowing();
            const explorationOpen = this.deps.explorationDialog && this.deps.explorationDialog.isVisible();

            if (narratorOpen || explorationOpen) {
                if (e.code === 'ArrowUp') { this.keys.up = true; e.preventDefault(); return; }
                if (e.code === 'ArrowDown') { this.keys.down = true; e.preventDefault(); return; }
                if (e.code === 'ArrowLeft') { this.keys.left = true; e.preventDefault(); return; }
                if (e.code === 'ArrowRight') { this.keys.right = true; e.preventDefault(); return; }
                if (e.code === 'Escape') return;
                return;
            }

            if (!this.controlsEnabled) return;

            if (e.code === 'KeyW') this.keys.speedUp = true;
            if (e.code === 'KeyS') this.keys.speedDown = true;
            if (e.code === 'ArrowUp') this.keys.up = true;
            if (e.code === 'ArrowDown') this.keys.down = true;
            if (e.code === 'ArrowLeft') this.keys.left = true;
            if (e.code === 'ArrowRight') this.keys.right = true;
            if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.keys.boost = true;
            if (e.code === 'Space') this.keys.brake = true;

            if (e.code === 'KeyV' || e.key === 'v' || e.key === 'V') this.callbacks.onViewToggle?.();
            if (e.code === 'KeyT') this.callbacks.onToggleNavigator?.();
            if (e.code === 'KeyH') this.callbacks.onToggleUI?.();
            if (e.code === 'KeyN') this.callbacks.onNarrateClosest?.();
            if (e.code === 'KeyP') this.callbacks.onOpenMenu?.();
            if (e.code === 'Escape') {
                this.callbacks.onCloseNavigator?.();
                this.callbacks.onUntarget?.();
            }
        });

        window.addEventListener('keyup', (e) => {
            const narratorOpen = this.deps.narratorDialog && this.deps.narratorDialog.isShowing();
            const explorationOpen = this.deps.explorationDialog && this.deps.explorationDialog.isVisible();

            if (narratorOpen || explorationOpen) {
                if (e.code === 'ArrowUp') this.keys.up = false;
                if (e.code === 'ArrowDown') this.keys.down = false;
                if (e.code === 'ArrowLeft') this.keys.left = false;
                if (e.code === 'ArrowRight') this.keys.right = false;
                return;
            }

            if (!this.controlsEnabled) return;

            if (e.code === 'KeyW') this.keys.speedUp = false;
            if (e.code === 'KeyS') this.keys.speedDown = false;
            if (e.code === 'ArrowUp') this.keys.up = false;
            if (e.code === 'ArrowDown') this.keys.down = false;
            if (e.code === 'ArrowLeft') this.keys.left = false;
            if (e.code === 'ArrowRight') this.keys.right = false;
            if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.keys.boost = false;
            if (e.code === 'Space') this.keys.brake = false;

            if (e.code === 'Equal' || e.code === 'NumpadAdd' || e.key === '+' || e.key === '=') {
                this.keys.speedUp = false;
            }
            if (e.code === 'Minus' || e.code === 'NumpadSubtract' || e.key === '-' || e.key === '_') {
                this.keys.speedDown = false;
            }
        });
    }

    setupMouse(canvas) {
        // Important for mobile/touch: prevent browser gestures from cancelling pointer events.
        canvas.style.touchAction = 'none';

        canvas.addEventListener('mousemove', (e) => {
            // Steering input must only come from click+drag joystick.
            // So when not actively dragging, force analog input to zero.
            if (!this._joystickActive) {
                this.mouse.x = 0;
                this.mouse.y = 0;
                return;
            }
        });

        canvas.style.cursor = 'default';

        // Virtual joystick steering (pointer drag)
        canvas.addEventListener('pointerdown', (e) => {
            // Only primary button / touch
            if (e.button !== undefined && e.button !== 0) return;
            if (e.pointerType === 'mouse' && e.ctrlKey) return;

            // Don't start joystick when clicking UI elements (just in case)
            const target = e.target;
            if (target.closest?.('.ui-panel') || target.closest?.('button') || target.closest?.('input')) return;

            e.preventDefault();
            this._joystickActive = true;
            this._joystickPointerId = e.pointerId;
            canvas.setPointerCapture?.(e.pointerId);
            this._joystick.showAt(e.clientX, e.clientY);
            this.mouse.x = 0;
            this.mouse.y = 0;
        }, { passive: false });

        canvas.addEventListener('pointermove', (e) => {
            if (!this._joystickActive) return;
            if (this._joystickPointerId !== null && e.pointerId !== this._joystickPointerId) return;
            e.preventDefault();
            const v = this._joystick.updatePointer(e.clientX, e.clientY);
            // Map drag to analog [-1..1], but only when it's a real drag.
            // This prevents steering on simple click without movement.
            this.mouse.x = v.dragging ? Math.max(-1, Math.min(1, v.x)) : 0;
            this.mouse.y = v.dragging ? Math.max(-1, Math.min(1, v.y)) : 0;
            if (v.dragging) this._suppressClick = true;
        }, { passive: false });

        const endJoystick = (e) => {
            if (!this._joystickActive) return;
            if (this._joystickPointerId !== null && e.pointerId !== this._joystickPointerId) return;
            this._joystickActive = false;
            this._joystickPointerId = null;
            this._joystick.hide();
            // Reset analog input
            this.mouse.x = 0;
            this.mouse.y = 0;
            // Let the browser finish the click sequence, then clear suppression.
            setTimeout(() => { this._suppressClick = false; }, 0);
        };

        canvas.addEventListener('pointerup', endJoystick, { passive: true });
        canvas.addEventListener('pointercancel', endJoystick, { passive: true });

        // Raycasting for planet selection
        const raycaster = new THREE.Raycaster();
        raycaster.params.Points.threshold = 50; // Easier to click stars/points
        const mouseVec = new THREE.Vector2();

        window.addEventListener('click', (event) => {
            if (this._suppressClick) return;
            const target = event.target;
            if (target.closest('.ui-panel') ||
                target.closest('.modal-overlay') ||
                target.closest('#planet-modal') ||
                target.closest('.planet-exploration-dialog') ||
                target.closest('.exploration-dialog-overlay') ||
                target.closest('.toggle-btn') ||
                target.closest('.spaice-floating-btn') ||
                target.closest('button') ||
                target.closest('input')) {
                return;
            }
            if (event.target.id !== 'canvas') return;

            if (this.deps.spacecraft && this.deps.spacecraft.viewMode === 'COCKPIT') {
                mouseVec.x = 0;
                mouseVec.y = 0;
            } else {
                mouseVec.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouseVec.y = -(event.clientY / window.innerHeight) * 2 + 1;
            }

            if (this.deps.cameraManager && this.deps.cameraManager.camera) {
                raycaster.setFromCamera(mouseVec, this.deps.cameraManager.camera);

                // Only raycast against planet groups (not stars — 109K points would be slow)
                const targets = [];
                if (this.deps.exoplanetField?.meshGroup) targets.push(this.deps.exoplanetField.meshGroup);
                if (this.deps.solarSystemField?.group) targets.push(this.deps.solarSystemField.group);

                const intersects = raycaster.intersectObjects(targets, true);

                if (intersects.length > 0) {
                    // Find the closest hit that has planetData
                    let planetData = null;
                    let hitObject = null;
                    for (const intersect of intersects) {
                        let obj = intersect.object;
                        while (obj) {
                            if (obj.userData?.planetData) {
                                planetData = obj.userData.planetData;
                                hitObject = obj;
                                break;
                            }
                            obj = obj.parent;
                        }
                        if (planetData) break;
                    }

                    if (planetData) {
                        this.callbacks.onPlanetClick?.(planetData, hitObject);
                    }
                }
            }
        });

        // View button
        const viewBtn = document.getElementById('btn-toggle-view');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                viewBtn.blur();
                this.callbacks.onViewToggle?.();
            });
        }
    }
}

export { InputManager };
