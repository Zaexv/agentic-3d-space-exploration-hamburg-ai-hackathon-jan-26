import './VirtualJoystick.css';

export class VirtualJoystick {
    constructor({ mount = document.body } = {}) {
        this.mount = mount;
        this.root = null;
        this.outer = null;
        this.inner = null;
        this.active = false;
        this.dragging = false;

        this._origin = { x: 0, y: 0 };
        this._pointer = { x: 0, y: 0 };
        this._radius = 55;
        this._deadZone = 6;
        this._dragThreshold = 10;
    }

    mountToDOM() {
        if (this.root) return;
        const root = document.createElement('div');
        root.className = 'virtual-joystick hidden';
        root.innerHTML = `<div class="vj-outer"></div><div class="vj-inner"></div>`;
        this.mount.appendChild(root);
        this.root = root;
        this.outer = root.querySelector('.vj-outer');
        this.inner = root.querySelector('.vj-inner');
    }

    showAt(x, y) {
        if (!this.root) return;
        this.root.classList.remove('hidden');
        this._origin.x = x;
        this._origin.y = y;
        this._pointer.x = x;
        this._pointer.y = y;
        this.dragging = false;
        this._render();
    }

    hide() {
        if (!this.root) return;
        this.root.classList.add('hidden');
        this.active = false;
        this.dragging = false;
    }

    updatePointer(x, y) {
        this._pointer.x = x;
        this._pointer.y = y;
        const dx = x - this._origin.x;
        const dy = y - this._origin.y;
        const dist = Math.hypot(dx, dy);
        if (dist >= this._dragThreshold) this.dragging = true;
        this._render();
        return this.getVector();
    }

    getVector() {
        const dx = this._pointer.x - this._origin.x;
        const dy = this._pointer.y - this._origin.y;
        const dist = Math.hypot(dx, dy);
        if (dist < this._deadZone) return { x: 0, y: 0, dragging: this.dragging };

        const clamped = Math.min(dist, this._radius);
        const nx = (dx / (dist || 1)) * (clamped / this._radius);
        const ny = (dy / (dist || 1)) * (clamped / this._radius);
        return { x: nx, y: ny, dragging: this.dragging };
    }

    _render() {
        if (!this.outer || !this.inner) return;
        const ox = this._origin.x;
        const oy = this._origin.y;

        const dx = this._pointer.x - ox;
        const dy = this._pointer.y - oy;
        const dist = Math.hypot(dx, dy);
        const clamped = Math.min(dist, this._radius);
        const cx = ox + (dx / (dist || 1)) * clamped;
        const cy = oy + (dy / (dist || 1)) * clamped;

        this.outer.style.left = `${ox}px`;
        this.outer.style.top = `${oy}px`;

        this.inner.style.left = `${cx}px`;
        this.inner.style.top = `${cy}px`;
    }
}

