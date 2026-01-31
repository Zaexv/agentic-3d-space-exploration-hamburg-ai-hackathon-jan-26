/**
 * Planet Configuration Data
 * Define planets with their properties
 * This data structure is designed to be easily extended with exoplanet datasets
 */

export const PLANETS_DATA = [
    {
        name: 'Mercury',
        planetType: 'rocky',
        radius: 3,
        color: 0x8c7853,
        detailColor: 0x6b5d4f,
        orbitRadius: 40,
        orbitSpeed: 0.02,
        rotationSpeed: 0.005,
        tilt: 0.034,
        description: 'The smallest planet in our solar system and closest to the Sun.',
        // Extensible for AI integration
        aiData: {
            composition: 'Rocky',
            atmosphere: 'Minimal',
            surfaceTemp: '430°C (day) / -180°C (night)'
        }
    },
    {
        name: 'Venus',
        planetType: 'rocky',
        radius: 6,
        color: 0xffc649,
        detailColor: 0xe6b85c,
        orbitRadius: 60,
        orbitSpeed: 0.015,
        rotationSpeed: 0.003,
        tilt: 3.1,
        description: 'Second planet from the Sun, known for its thick toxic atmosphere.',
        aiData: {
            composition: 'Rocky',
            atmosphere: 'Thick CO2',
            surfaceTemp: '462°C'
        }
    },
    {
        name: 'Earth',
        planetType: 'rocky',
        radius: 6.5,
        color: 0x4a90e2,
        detailColor: 0x2d5aa8,
        orbitRadius: 80,
        orbitSpeed: 0.01,
        rotationSpeed: 0.02,
        tilt: 0.408,
        description: 'Our home planet, the only known planet with life.',
        aiData: {
            composition: 'Rocky',
            atmosphere: 'Nitrogen, Oxygen',
            surfaceTemp: '15°C (avg)'
        }
    },
    {
        name: 'Mars',
        planetType: 'rocky',
        radius: 4,
        color: 0xcd5c5c,
        detailColor: 0x8b3a3a,
        orbitRadius: 100,
        orbitSpeed: 0.008,
        rotationSpeed: 0.018,
        tilt: 0.440,
        description: 'The Red Planet, target for future human exploration.',
        aiData: {
            composition: 'Rocky',
            atmosphere: 'Thin CO2',
            surfaceTemp: '-63°C (avg)'
        }
    },
    {
        name: 'Jupiter',
        planetType: 'gasGiant',
        radius: 12,
        color: 0xc88b3a,
        gasColors: [0xc88b3a, 0xe6a85c, 0xf4d7a8, 0xd4a05a],
        orbitRadius: 140,
        orbitSpeed: 0.005,
        rotationSpeed: 0.04,
        tilt: 0.054,
        description: 'The largest planet in our solar system, a gas giant.',
        aiData: {
            composition: 'Gas Giant',
            atmosphere: 'Hydrogen, Helium',
            surfaceTemp: '-108°C'
        }
    },
    {
        name: 'Saturn',
        planetType: 'gasGiant',
        radius: 10,
        color: 0xfad5a5,
        gasColors: [0xfad5a5, 0xf4c78a, 0xe8b975, 0xd4a05a],
        orbitRadius: 180,
        orbitSpeed: 0.003,
        rotationSpeed: 0.038,
        tilt: 0.466,
        description: 'Famous for its spectacular ring system.',
        aiData: {
            composition: 'Gas Giant',
            atmosphere: 'Hydrogen, Helium',
            surfaceTemp: '-139°C'
        }
    },
    {
        name: 'Uranus',
        planetType: 'iceGiant',
        radius: 8,
        color: 0x4fd0e7,
        orbitRadius: 220,
        orbitSpeed: 0.002,
        rotationSpeed: 0.03,
        tilt: 1.706,
        description: 'An ice giant that rotates on its side.',
        aiData: {
            composition: 'Ice Giant',
            atmosphere: 'Hydrogen, Helium, Methane',
            surfaceTemp: '-197°C'
        }
    },
    {
        name: 'Neptune',
        planetType: 'iceGiant',
        radius: 7.5,
        color: 0x4169e1,
        orbitRadius: 260,
        orbitSpeed: 0.001,
        rotationSpeed: 0.032,
        tilt: 0.494,
        description: 'The furthest planet from the Sun, a deep blue ice giant.',
        aiData: {
            composition: 'Ice Giant',
            atmosphere: 'Hydrogen, Helium, Methane',
            surfaceTemp: '-201°C'
        }
    }
];

/**
 * Example structure for exoplanet data integration
 * This can be populated from JSON datasets
 */
export const EXOPLANET_TEMPLATE = {
    name: '',
    radius: 5,
    color: 0xffffff,
    orbitRadius: 100,
    orbitSpeed: 0.01,
    rotationSpeed: 0.01,
    tilt: 0,
    description: '',
    // Extended astronomical data
    astronomicalData: {
        rightAscension: '',  // RA coordinate
        declination: '',     // Dec coordinate
        distance: 0,         // Distance in light years or parsecs
        hostStar: '',
        discoveryMethod: '',
        discoveryYear: null
    },
    // AI-ready data for natural language processing
    aiData: {
        composition: '',
        atmosphere: '',
        surfaceTemp: '',
        habitability: '',
        mass: '',
        radius: ''
    }
};
