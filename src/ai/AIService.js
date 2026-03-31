/**
 * AIService - Unified AI Interface
 * Wraps OpenAI text generation service
 */

import OpenAIService from './OpenAIService.js';

class AIService {
  constructor(openAIKey) {
    // Initialize OpenAI service (required)
    this.openAI = new OpenAIService(openAIKey);
  }

  /**
   * Configure OpenAI behavior
   * @param {Object} options - Configuration options for OpenAI
   */
  configureOpenAI(options) {
    this.openAI.configure(options);
  }

  /**
   * Generate a description for a planet using OpenAI
   * @param {Object} planetData - Planet information as JSON
   * @param {boolean} useCache - Whether to use cached results (default: true)
   * @returns {Promise<string>} Generated description
   */
  async generatePlanetDescription(planetData, useCache = true) {
    return this.openAI.generatePlanetDescription(planetData, useCache);
  }

  /**
   * Clear all caches
   */
  clearCache() {
    this.openAI.clearCache();
    console.log('All AI service caches cleared');
  }

  /**
   * Get cache statistics from all services
   * @returns {Object} Combined cache info
   */
  getCacheStats() {
    return {
      openAI: this.openAI.getCacheStats()
    };
  }
}

export default AIService;
export { OpenAIService };
