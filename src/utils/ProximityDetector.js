/**
 * ProximityDetector - Detects closest planet to spacecraft
 * Handles scaled coordinate system (x10000)
 */
import * as THREE from 'three';

export class ProximityDetector {
    constructor(planetDataService, exoplanetField) {
        this.dataService = planetDataService;
        this.exoplanetField = exoplanetField;
        this.lastClosestPlanet = null;
        this.updateThrottle = 500; // ms between updates
        this.lastUpdateTime = 0;
        // Increased search radius for new billion-scale scene
        // Solar system spans ~60M units, search up to 100M
        this.searchRadius = 100000000; // 100M units (was 5M)
    }

    /**
     * Get the closest planet to a given position
     * @param {THREE.Vector3} position - Spacecraft position
     * @returns {Object|null} - { planet, distance, worldPosition, mesh }
     */
    getClosestPlanet(position) {
        const now = Date.now();
        
        // Throttle updates
        if (now - this.lastUpdateTime < this.updateThrottle) {
            return this.lastClosestPlanet;
        }
        
        this.lastUpdateTime = now;

        const allPlanets = this.dataService.getAllPlanets();
        
        if (!allPlanets || allPlanets.length === 0) {
            return null;
        }

        let closestPlanet = null;
        let closestDistance = Infinity;
        let closestWorldPos = null;
        let closestMesh = null;

        // UPDATED: Use new billion-scale system matching ExoplanetField.js
        const sceneScale = 1000000000; // 1 light-year = 1 billion scene units

        for (const planet of allPlanets) {
            // Get planet position in world coordinates
            let planetWorldPos;
            
            // Check if solar system planet
            const isSolarPlanet = planet.hostname === 'Sun';
            const positionBoost = isSolarPlanet ? 1000 : 100; // Match ExoplanetField
            
            if (planet.characteristics?.coordinates_3d) {
                // UNIFIED SYSTEM: All planets use coordinates_3d
                const coords = planet.characteristics.coordinates_3d;
                planetWorldPos = new THREE.Vector3(
                    coords.x_light_years * sceneScale * positionBoost,
                    coords.y_light_years * sceneScale * positionBoost,
                    coords.z_light_years * sceneScale * positionBoost
                );
            } else if (planet.position) {
                // FALLBACK: Old position system (should not happen)
                console.warn(`⚠️ ${planet.pl_name} using fallback position field`);
                planetWorldPos = new THREE.Vector3(
                    planet.position.x * sceneScale * positionBoost,
                    planet.position.y * sceneScale * positionBoost,
                    planet.position.z * sceneScale * positionBoost
                );
            } else {
                // No valid coordinates at all
                console.warn('⚠️ Planet missing coordinates:', planet.pl_name);
                continue;
            }

            const distance = position.distanceTo(planetWorldPos);

            // Only consider planets within search radius
            if (distance < this.searchRadius && distance < closestDistance) {
                closestDistance = distance;
                closestPlanet = planet;
                closestWorldPos = planetWorldPos;
                closestDistance = distance;
                closestPlanet = planet;
                closestWorldPos = planetWorldPos;
                
                // Reset mesh for each new closest planet
                let foundMesh = null;
                
                // Try to find the mesh for this planet in the exoplanet field
                if (this.exoplanetField && this.exoplanetField.meshGroup) {
                    // Search through ALL meshes in the group (includes Solar System)
                    this.exoplanetField.meshGroup.traverse((child) => {
                        if (child.isMesh && child.userData && child.userData.planetData) {
                            const childPlanetName = child.userData.planetData.pl_name;
                            if (childPlanetName === planet.pl_name) {
                                foundMesh = child;
                            }
                        }
                    });
                }
                
                closestMesh = foundMesh;
            }
        }

        if (closestPlanet) {
            console.log(`🎯 Closest planet: ${closestPlanet.pl_name} at ${(closestDistance / 1000000).toFixed(2)}M units - hasMesh: ${!!closestMesh}`);
            
            this.lastClosestPlanet = {
                planet: closestPlanet,
                distance: closestDistance,
                worldPosition: closestWorldPos,
                mesh: closestMesh
            };
            
            return this.lastClosestPlanet;
        }

        this.lastClosestPlanet = null;
        return null;
    }

    /**
     * Check if closest planet has changed
     */
    hasClosestPlanetChanged(currentClosest) {
        if (!this.lastClosestPlanet && !currentClosest) return false;
        if (!this.lastClosestPlanet || !currentClosest) return true;
        
        return this.lastClosestPlanet.planet.pl_name !== currentClosest.planet.pl_name;
    }

    /**
     * Reset state
     */
    reset() {
        this.lastClosestPlanet = null;
    }
}
