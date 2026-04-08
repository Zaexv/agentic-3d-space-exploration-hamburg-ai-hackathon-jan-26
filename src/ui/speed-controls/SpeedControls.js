import template from './SpeedControls.html?raw';
import './SpeedControls.css';

export class SpeedControls {
    constructor({ mount = document.getElementById('app'), onIncrease, onDecrease } = {}) {
        this.mount = mount || document.body;
        this.onIncrease = onIncrease || null;
        this.onDecrease = onDecrease || null;
        this.root = null;
        this._mounted = false;
    }

    mountToDOM() {
        if (this._mounted) return;
        const wrapper = document.createElement('div');
        wrapper.className = 'speed-controls-root';
        wrapper.innerHTML = template;
        this.mount.appendChild(wrapper);
        this.root = wrapper;

        this.btnDown = this.root.querySelector('#speed-down-btn');
        this.btnUp = this.root.querySelector('#speed-up-btn');

        this.btnDown?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.onDecrease?.();
        });
        this.btnUp?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.onIncrease?.();
        });

        this._mounted = true;
    }
}

