import * as Astronomy from 'astronomy-engine';

/**
 * SolarSystemService — Computes real-time heliocentric positions for solar system bodies
 * using the astronomy-engine library (JPL ephemeris-grade accuracy).
 *
 * Positions are returned in AU (Astronomical Units), heliocentric J2000 equatorial frame.
 */

// Static metadata for solar system bodies (NASA reference values)
// pl_rade = Earth radii, pl_masse = Earth masses, pl_eqt = equilibrium temperature (K)
const BODY_METADATA = {
    Mercury: {
        pl_rade: 0.3829, pl_masse: 0.055, pl_eqt: 440, pl_orbper: 87.97, pl_orbsmax: 0.387,
        discoverymethod: 'Known', disc_year: null,
        characteristics: {
            radius_position: 'Sub-Earth', atmosphere_type: 'None (Exosphere)',
            principal_material: 'Rocky (Iron/Silicates)', habitability_percent: 0, toxicity_percent: 100,
            orbit_type: 'Circular - Hot Zone', distance_to_earth_ly: 0,
        }
    },
    Venus: {
        pl_rade: 0.9499, pl_masse: 0.815, pl_eqt: 737, pl_orbper: 224.7, pl_orbsmax: 0.723,
        discoverymethod: 'Known', disc_year: null,
        characteristics: {
            radius_position: 'Earth-like', atmosphere_type: 'CO2-N2 (Dense)',
            principal_material: 'Rocky (Silicates)', habitability_percent: 0, toxicity_percent: 100,
            orbit_type: 'Circular - Habitable Zone', distance_to_earth_ly: 0,
        }
    },
    Earth: {
        pl_rade: 1.0, pl_masse: 1.0, pl_eqt: 288, pl_orbper: 365.26, pl_orbsmax: 1.0,
        discoverymethod: 'Known', disc_year: null,
        characteristics: {
            radius_position: 'Earth-like', atmosphere_type: 'N2-O2 (Breathable)',
            principal_material: 'Rocky (Silicates/Iron/Water)', habitability_percent: 100, toxicity_percent: 0,
            orbit_type: 'Circular - Habitable Zone', distance_to_earth_ly: 0,
        }
    },
    Mars: {
        pl_rade: 0.532, pl_masse: 0.107, pl_eqt: 210, pl_orbper: 687.0, pl_orbsmax: 1.524,
        discoverymethod: 'Known', disc_year: null,
        characteristics: {
            radius_position: 'Sub-Earth', atmosphere_type: 'CO2 (Thin)',
            principal_material: 'Rocky (Iron Oxide/Silicates)', habitability_percent: 15, toxicity_percent: 80,
            orbit_type: 'Circular - Habitable Zone', distance_to_earth_ly: 0,
        }
    },
    Jupiter: {
        pl_rade: 11.209, pl_masse: 317.8, pl_eqt: 165, pl_orbper: 4332.59, pl_orbsmax: 5.203,
        discoverymethod: 'Known', disc_year: null,
        characteristics: {
            radius_position: 'Jupiter-like', atmosphere_type: 'H2-He (Dense Gas Giant)',
            principal_material: 'Gas (Hydrogen/Helium)', habitability_percent: 0, toxicity_percent: 100,
            orbit_type: 'Circular - Cold Zone', distance_to_earth_ly: 0,
        }
    },
    Saturn: {
        pl_rade: 9.449, pl_masse: 95.16, pl_eqt: 134, pl_orbper: 10759.22, pl_orbsmax: 9.537,
        discoverymethod: 'Known', disc_year: null,
        characteristics: {
            radius_position: 'Jupiter-like', atmosphere_type: 'H2-He (Dense Gas Giant)',
            principal_material: 'Gas (Hydrogen/Helium)', habitability_percent: 0, toxicity_percent: 100,
            orbit_type: 'Wide - Frozen Zone', distance_to_earth_ly: 0,
        }
    },
    Uranus: {
        pl_rade: 4.007, pl_masse: 14.54, pl_eqt: 76, pl_orbper: 30688.5, pl_orbsmax: 19.191,
        discoverymethod: 'Known', disc_year: null,
        characteristics: {
            radius_position: 'Neptune-like', atmosphere_type: 'H2-He-CH4 (Ice Giant)',
            principal_material: 'Ice/Gas (Water/Ammonia/Methane)', habitability_percent: 0, toxicity_percent: 100,
            orbit_type: 'Wide - Frozen Zone', distance_to_earth_ly: 0,
        }
    },
    Neptune: {
        pl_rade: 3.883, pl_masse: 17.15, pl_eqt: 72, pl_orbper: 60182.0, pl_orbsmax: 30.069,
        discoverymethod: 'Known', disc_year: null,
        characteristics: {
            radius_position: 'Neptune-like', atmosphere_type: 'H2-He-CH4 (Ice Giant)',
            principal_material: 'Ice/Gas (Water/Ammonia/Methane)', habitability_percent: 0, toxicity_percent: 100,
            orbit_type: 'Wide - Frozen Zone', distance_to_earth_ly: 0,
        }
    },
    Pluto: {
        pl_rade: 0.1868, pl_masse: 0.0022, pl_eqt: 44, pl_orbper: 90560.0, pl_orbsmax: 39.482,
        discoverymethod: 'Known', disc_year: null,
        characteristics: {
            radius_position: 'Sub-Earth', atmosphere_type: 'N2-CH4 (Cold Thin)',
            principal_material: 'Rocky/Ice (Silicates/Frozen Volatiles)', habitability_percent: 0, toxicity_percent: 100,
            orbit_type: 'Wide - Frozen Zone', distance_to_earth_ly: 0,
        }
    },
    Moon: {
        pl_rade: 0.2727, pl_masse: 0.0123, pl_eqt: 250, pl_orbper: 27.32, pl_orbsmax: 0.00257,
        discoverymethod: 'Known', disc_year: null,
        characteristics: {
            radius_position: 'Sub-Earth', atmosphere_type: 'None (Exosphere)',
            principal_material: 'Rocky (Silicates/Iron)', habitability_percent: 0, toxicity_percent: 100,
            orbit_type: 'Satellite', distance_to_earth_ly: 0,
        }
    },
};

const HELIO_BODIES = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

// Major moons: orbital distance in AU from parent, orbital period in days
const PLANET_MOONS = {
    Mars: [
        { name: 'Phobos', pl_rade: 0.0017, orbDist: 0.0000628, orbPer: 0.319, color: 0x888877 },
        { name: 'Deimos', pl_rade: 0.00098, orbDist: 0.000157, orbPer: 1.263, color: 0x999988 },
    ],
    Jupiter: [
        { name: 'Io', pl_rade: 0.286, orbDist: 0.00282, orbPer: 1.769, color: 0xccaa44 },
        { name: 'Europa', pl_rade: 0.245, orbDist: 0.00449, orbPer: 3.551, color: 0xccbb99 },
        { name: 'Ganymede', pl_rade: 0.413, orbDist: 0.00716, orbPer: 7.155, color: 0x998877 },
        { name: 'Callisto', pl_rade: 0.378, orbDist: 0.01259, orbPer: 16.689, color: 0x776655 },
    ],
    Saturn: [
        { name: 'Titan', pl_rade: 0.404, orbDist: 0.00817, orbPer: 15.945, color: 0xddaa66 },
        { name: 'Enceladus', pl_rade: 0.0395, orbDist: 0.00159, orbPer: 1.370, color: 0xeeeeff },
        { name: 'Mimas', pl_rade: 0.0311, orbDist: 0.00124, orbPer: 0.942, color: 0xcccccc },
    ],
    Uranus: [
        { name: 'Titania', pl_rade: 0.124, orbDist: 0.00292, orbPer: 8.706, color: 0xaabbcc },
        { name: 'Oberon', pl_rade: 0.119, orbDist: 0.00390, orbPer: 13.463, color: 0x998888 },
    ],
    Neptune: [
        { name: 'Triton', pl_rade: 0.212, orbDist: 0.00237, orbPer: 5.877, color: 0xbbaacc },
    ],
    Pluto: [
        { name: 'Charon', pl_rade: 0.095, orbDist: 0.000131, orbPer: 6.387, color: 0xaaaaaa },
    ],
};

export class SolarSystemService {
    /**
     * @param {object} simulationClock — must expose a `.getDate()` returning a JS Date
     */
    constructor(simulationClock) {
        this.clock = simulationClock;
    }

    /**
     * Compute heliocentric positions for all solar system bodies at the current simulation date.
     *
     * @returns {Array<Object>} Array of body descriptors:
     *   { name, position: {x, y, z} (AU), pl_rade, pl_masse, pl_eqt, isSolar, hostname }
     */
    getBodyPositions() {
        const date = this.clock.getDate();
        const bodies = [];

        let earthVec = null;

        for (const name of HELIO_BODIES) {
            const bodyEnum = Astronomy.Body[name];
            const vec = Astronomy.HelioVector(bodyEnum, date);

            if (name === 'Earth') {
                earthVec = vec;
            }

            const meta = BODY_METADATA[name];
            bodies.push({
                name,
                pl_name: name,
                hostname: 'Sun',
                position: { x: vec.x, y: vec.y, z: vec.z },
                pl_rade: meta.pl_rade,
                pl_masse: meta.pl_masse,
                pl_eqt: meta.pl_eqt,
                pl_orbper: meta.pl_orbper,
                pl_orbsmax: meta.pl_orbsmax,
                discoverymethod: meta.discoverymethod,
                disc_year: meta.disc_year,
                isSolar: true,
                characteristics: { ...meta.characteristics },
            });
        }

        // Earth's Moon — computed precisely via astronomy-engine
        if (earthVec) {
            const geoMoon = Astronomy.GeoVector(Astronomy.Body.Moon, date, true);
            const meta = BODY_METADATA.Moon;
            bodies.push({
                name: 'Moon', pl_name: 'Moon', hostname: 'Earth',
                position: {
                    x: earthVec.x + geoMoon.x,
                    y: earthVec.y + geoMoon.y,
                    z: earthVec.z + geoMoon.z,
                },
                pl_rade: meta.pl_rade, pl_masse: meta.pl_masse, pl_eqt: meta.pl_eqt,
                pl_orbper: meta.pl_orbper, pl_orbsmax: meta.pl_orbsmax,
                discoverymethod: meta.discoverymethod, disc_year: meta.disc_year,
                isSolar: true, isMoon: true,
                characteristics: { ...meta.characteristics },
            });
        }

        // Other planet moons — simple circular orbits
        const daysSinceJ2000 = (date.getTime() - Date.UTC(2000, 0, 1, 12)) / 86400000;

        for (const planetName of Object.keys(PLANET_MOONS)) {
            // Find the parent planet's heliocentric position
            const parent = bodies.find(b => b.name === planetName);
            if (!parent) continue;

            for (const moon of PLANET_MOONS[planetName]) {
                const angle = (2 * Math.PI * daysSinceJ2000 / moon.orbPer) % (2 * Math.PI);
                bodies.push({
                    name: moon.name,
                    pl_name: moon.name,
                    hostname: planetName,
                    position: {
                        x: parent.position.x + moon.orbDist * Math.cos(angle),
                        y: parent.position.y + moon.orbDist * Math.sin(angle) * 0.3, // slight inclination
                        z: parent.position.z + moon.orbDist * Math.sin(angle) * 0.95,
                    },
                    pl_rade: moon.pl_rade,
                    pl_masse: 0,
                    pl_eqt: 100,
                    pl_orbper: moon.orbPer,
                    pl_orbsmax: moon.orbDist,
                    discoverymethod: 'Known',
                    disc_year: null,
                    isSolar: true,
                    isMoon: true,
                    moonColor: moon.color,
                    characteristics: {
                        radius_position: 'Satellite',
                        atmosphere_type: 'None',
                        principal_material: 'Rocky/Ice',
                        habitability_percent: 0,
                        toxicity_percent: 100,
                        orbit_type: 'Satellite',
                        distance_to_earth_ly: 0,
                    },
                });
            }
        }

        return bodies;
    }
}
