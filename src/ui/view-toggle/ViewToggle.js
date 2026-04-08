import template from './ViewToggle.html?raw';
import './ViewToggle.css';

export class ViewToggle {
    constructor({ mount = document.getElementById('app'), onToggle } = {}) {
        this.mount = mount || document.body;
        this.onToggle = onToggle || null;
        this.root = null;
        this._mounted = false;
    }

    mountToDOM() {
        if (this._mounted) return;
        const wrapper = document.createElement('div');
        wrapper.className = 'view-toggle-root';
        wrapper.innerHTML = template;
        this.mount.appendChild(wrapper);
        this.root = wrapper;

        this.btn = this.root.querySelector('#view-toggle-btn');
        this.btn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.onToggle?.();
        });

        this._mounted = true;
    }
}

