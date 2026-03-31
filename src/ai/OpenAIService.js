/**
 * LLMService - Gemini Integration for Planet Descriptions
 * Generates descriptive text about planets using Google Gemini API
 * (OpenAI-compatible endpoint)
 */

import { CONFIG } from '../config/config.js';

class OpenAIService {
  constructor(apiKey) {
    if (!apiKey) {
      console.warn('API key not provided. AI descriptions will be disabled.');
      this.enabled = false;
      return;
    }

    this.apiKey = apiKey;
    this.enabled = true;
    this.baseURL = CONFIG.openai.baseURL;

    this.config = {
      model: CONFIG.openai.model,
      temperature: 0.7,
      max_tokens: 300
    };

    this.cache = new Map();
    this.initPromise = Promise.resolve();

    console.log(`✅ LLM service initialized (${this.config.model})`);
  }

  configure(options) {
    this.config = { ...this.config, ...options };
  }

  async _chatCompletion(messages, { temperature, max_tokens } = {}) {
    const body = {
      model: this.config.model,
      temperature: temperature ?? this.config.temperature,
      max_tokens: max_tokens ?? this.config.max_tokens,
      messages
    };

    const response = await fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const msg = errorData.error?.message || response.statusText;
      if (response.status === 401) throw new Error('Invalid API key. Please check your credentials.');
      if (response.status === 429) throw new Error('Rate limit exceeded. Please try again later.');
      throw new Error(`API error (${response.status}): ${msg}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content?.trim();
    if (!content) throw new Error('No content in API response');
    return content;
  }

  buildPrompt(planetData) {
    const planetInfo = JSON.stringify(planetData, null, 2);

    return `You are an expert astronomer and science communicator. Based on the following planet data, create an engaging and informative description (2-3 paragraphs) that would captivate someone exploring this celestial body in a 3D space visualization.

Planet Data:
${planetInfo}

Write a vivid, scientifically-inspired description that highlights the unique characteristics, atmosphere, and interesting facts about this planet. Make it immersive and educational.`;
  }

  async generatePlanetDescription(planetData, useCache = true) {
    await this.initPromise;

    if (!this.enabled) {
      return this.getFallbackDescription(planetData);
    }

    try {
      const cacheKey = JSON.stringify(planetData);

      if (useCache && this.cache.has(cacheKey)) {
        return this.cache.get(cacheKey);
      }

      const prompt = this.buildPrompt(planetData);

      const description = await this._chatCompletion([
        { role: 'system', content: 'You are an expert astronomer and science communicator who creates vivid, educational descriptions of celestial bodies.' },
        { role: 'user', content: prompt }
      ]);

      this.cache.set(cacheKey, description);
      return description;

    } catch (error) {
      console.error('Error generating planet description:', error);
      return this.getFallbackDescription(planetData);
    }
  }

  async generateCompletion(prompt, useCache = false) {
    const cacheKey = `completion_${prompt}`;

    if (useCache && this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const completion = await this._chatCompletion([
      { role: 'user', content: prompt }
    ]);

    if (useCache) {
      this.cache.set(cacheKey, completion);
    }

    return completion;
  }

  async generateCharacteristicsInsights(planetData, useCache = true) {
    try {
      const cacheKey = `insights_${planetData.pl_name || planetData.name}`;

      if (useCache && this.cache.has(cacheKey)) {
        return this.cache.get(cacheKey);
      }

      const char = planetData.characteristics || {};
      const prompt = `You are an expert astronomer analyzing exoplanet data. Based on the following planet characteristics, generate 4-5 thought-provoking questions that a scientist or space enthusiast might ask about this planet. Make them specific to this planet's unique features.

Planet: ${planetData.pl_name || planetData.name}
Distance: ${planetData.sy_dist ? (planetData.sy_dist * 3.262).toFixed(2) : 'Unknown'} light-years from Earth

PHYSICAL PROPERTIES:
- Type: ${char.radius_position || 'Unknown'}
- Radius: ${planetData.pl_rade ? planetData.pl_rade.toFixed(2) : 'Unknown'} Earth radii
- Mass: ${planetData.pl_masse ? planetData.pl_masse.toFixed(2) : 'Unknown'} Earth masses
- Temperature: ${planetData.pl_eqt || 'Unknown'} K
- Material Composition: ${char.principal_material || 'Unknown'}

ORBITAL CHARACTERISTICS:
- Orbital Period: ${planetData.pl_orbper ? planetData.pl_orbper.toFixed(2) : 'Unknown'} days
- Semi-major Axis: ${planetData.pl_orbsmax ? planetData.pl_orbsmax.toFixed(3) : 'Unknown'} AU
- Orbit Type: ${char.orbit_type || 'Unknown'}

HABITABILITY:
- Habitability Score: ${char.habitability_percent !== undefined ? char.habitability_percent + '%' : 'Unknown'}
- Toxicity Level: ${char.toxicity_percent !== undefined ? char.toxicity_percent + '%' : 'Unknown'}
- Atmosphere: ${char.atmosphere_type || 'Unknown'}

Generate 4-5 specific questions that scientists would want to answer about this planet. Format each question on a new line starting with "•". Focus on what makes this planet unique, what we could learn, how it compares to Earth, and what mysteries it presents.`;

      const insights = await this._chatCompletion([
        { role: 'system', content: 'You are an expert astronomer who generates thoughtful, scientifically relevant questions about exoplanets.' },
        { role: 'user', content: prompt }
      ], { temperature: 0.8, max_tokens: 300 });

      this.cache.set(cacheKey, insights);
      return insights;

    } catch (error) {
      console.error('Error generating characteristics insights:', error);
      throw error;
    }
  }

  async chatAboutPlanet(userMessage, planetData, chatHistory = []) {
    try {
      const char = planetData.characteristics || {};

      const systemMessage = `You are an astronomer assistant for "${planetData.pl_name || planetData.name}". Answer briefly (1-2 sentences). Data: ${(planetData.sy_dist * 3.262).toFixed(1)}ly away, ${char.radius_position || 'Unknown type'}, ${planetData.pl_rade?.toFixed(1) || '?'}R⊕, ${planetData.pl_eqt || '?'}K, ${char.habitability_percent || 0}% habitable.`;

      const messages = [
        { role: 'system', content: systemMessage },
        ...chatHistory.slice(-6),
        { role: 'user', content: userMessage }
      ];

      return await this._chatCompletion(messages, { max_tokens: 150 });

    } catch (error) {
      console.error('Error in chat:', error);
      throw error;
    }
  }

  getFallbackDescription(planetData) {
    const { name, type, size, temperature, moons, atmosphere } = planetData;

    return `${name} is a ${type || 'mysterious'} planet${size ? ` with a relative size of ${size}` : ''}. ${
      temperature ? `Surface temperatures average around ${temperature}°C. ` : ''
    }${moons ? `It has ${moons} moon${moons > 1 ? 's' : ''}. ` : ''}${
      atmosphere ? `The atmosphere is composed of ${atmosphere}.` : ''
    }`;
  }

  clearCache() {
    this.cache.clear();
  }

  getCacheStats() {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys()).map(key => {
        try {
          const data = JSON.parse(key);
          return data.name || 'Unknown';
        } catch {
          return key.substring(0, 30);
        }
      })
    };
  }
}

export { OpenAIService };
export default OpenAIService;
