/**
 * SimulationClock - Manages simulation time for 3D space exploration.
 *
 * Wraps a JavaScript Date that advances based on a speed multiplier,
 * allowing users to fast-forward or rewind time to observe planetary orbits.
 */
class SimulationClock {
    /**
     * @param {Date} [startDate=new Date()] - The initial simulation date.
     */
    constructor(startDate = new Date()) {
        this._date = new Date(startDate.getTime());
        this._speed = 1;
        this._paused = false;
    }

    /**
     * Returns the current simulation Date object.
     * @returns {Date}
     */
    getDate() {
        return new Date(this._date.getTime());
    }

    /**
     * Jump to a specific date.
     * @param {Date} date
     */
    setDate(date) {
        this._date = new Date(date.getTime());
    }

    /**
     * Set the speed multiplier.
     *   1     = real-time
     *   3600  = 1 hour per second
     *   86400 = 1 day per second
     *   negative values rewind time
     * @param {number} multiplier
     */
    setSpeed(multiplier) {
        this._speed = multiplier;
    }

    /**
     * Returns the current speed multiplier.
     * @returns {number}
     */
    getSpeed() {
        return this._speed;
    }

    /**
     * Advance the simulation date. Call once per animation frame.
     * @param {number} deltaTime - Elapsed real time in seconds since last frame.
     */
    update(deltaTime) {
        if (this._paused) {
            return;
        }
        const advanceMs = deltaTime * this._speed * 1000;
        this._date.setTime(this._date.getTime() + advanceMs);
    }

    /** Pause time advancement. */
    pause() {
        this._paused = true;
    }

    /** Resume time advancement. */
    resume() {
        this._paused = false;
    }

    /**
     * Returns whether the clock is paused.
     * @returns {boolean}
     */
    isPaused() {
        return this._paused;
    }

    /** Reset to the real current date with speed 1x, unpaused. */
    reset() {
        this._date = new Date();
        this._speed = 1;
        this._paused = false;
    }
}

export { SimulationClock };
export default SimulationClock;
