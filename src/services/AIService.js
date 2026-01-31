/**
 * AI Service
 * Handles OpenAI and Eleven Labs API integrations
 */

import { CONFIG, isAIConfigured, isNarrationConfigured } from '../config/config.js';

class AIService {
    constructor() {
        this.cache = new Map(); // Cache AI responses
    }

    /**
     * Get an AI-generated description for a planet
     * @param {Object} planetData - Planet configuration object
     * @returns {Promise<string>} AI-generated description
     */
    async getPlanetDescription(planetData) {
        if (!isAIConfigured()) {
            // Return fallback description if AI is not configured
            return this.getFallbackDescription(planetData);
        }

        const cacheKey = `planet_${planetData.name}`;

        // Check cache first
        if (CONFIG.features.cacheResponses && this.cache.has(cacheKey)) {
            console.log('Using cached AI response for', planetData.name);
            return this.cache.get(cacheKey);
        }

        try {
            // Prepare the prompt
            const prompt = this.buildPlanetPrompt(planetData);

            // Call OpenAI API
            const response = await fetch(CONFIG.openai.baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CONFIG.openai.apiKey}`
                },
                body: JSON.stringify({
                    model: CONFIG.openai.model,
                    messages: [
                        {
                            role: 'system',
                            content: 'You are an expert astronomer who provides fascinating, educational descriptions of celestial bodies.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    max_tokens: 150,
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                throw new Error(`OpenAI API error: ${response.status}`);
            }

            const data = await response.json();
            const description = data.choices[0].message.content.trim();

            // Cache the response
            if (CONFIG.features.cacheResponses) {
                this.cache.set(cacheKey, description);
            }

            return description;

        } catch (error) {
            console.error('Error fetching AI description:', error);
            return this.getFallbackDescription(planetData);
        }
    }

    /**
     * Build the prompt for planet description
     */
    buildPlanetPrompt(planetData) {
        return CONFIG.prompts.planetDescription
            .replace('{name}', planetData.name)
            .replace('{composition}', planetData.aiData.composition)
            .replace('{atmosphere}', planetData.aiData.atmosphere)
            .replace('{surfaceTemp}', planetData.aiData.surfaceTemp);
    }

    /**
     * Fallback description when AI is not available
     */
    getFallbackDescription(planetData) {
        return `${planetData.description} This ${planetData.aiData.composition.toLowerCase()} world has ${planetData.aiData.atmosphere.toLowerCase()} atmosphere and surface temperatures around ${planetData.aiData.surfaceTemp}.`;
    }

    /**
     * Narrate text using Eleven Labs TTS
     * @param {string} text - Text to narrate
     * @returns {Promise<AudioBuffer>} Audio data
     */
    async narratePlanetInfo(text) {
        if (!isNarrationConfigured()) {
            console.warn('Narration not configured');
            return null;
        }

        const cacheKey = `narration_${text.substring(0, 50)}`; // Cache based on first 50 chars

        if (CONFIG.features.cacheResponses && this.cache.has(cacheKey)) {
            console.log('Using cached narration');
            return this.cache.get(cacheKey);
        }

        try {
            const response = await fetch(
                `${CONFIG.elevenLabs.baseURL}/${CONFIG.elevenLabs.voiceId}`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'audio/mpeg',
                        'Content-Type': 'application/json',
                        'xi-api-key': CONFIG.elevenLabs.apiKey
                    },
                    body: JSON.stringify({
                        text: text,
                        model_id: 'eleven_monolingual_v1',
                        voice_settings: {
                            stability: 0.5,
                            similarity_boost: 0.5
                        }
                    })
                }
            );

            if (!response.ok) {
                throw new Error(`Eleven Labs API error: ${response.status}`);
            }

            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);

            if (CONFIG.features.cacheResponses) {
                this.cache.set(cacheKey, audioUrl);
            }

            return audioUrl;

        } catch (error) {
            console.error('Error generating narration:', error);
            return null;
        }
    }

    /**
     * Play audio narration
     * @param {string} audioUrl - URL of audio file
     */
    playNarration(audioUrl) {
        if (!audioUrl) return;

        const audio = new Audio(audioUrl);
        audio.play().catch(error => {
            console.error('Error playing narration:', error);
        });
    }

    /**
     * Clear cached responses
     */
    clearCache() {
        this.cache.clear();
        console.log('AI cache cleared');
    }
}

// Export singleton instance
export const aiService = new AIService();
