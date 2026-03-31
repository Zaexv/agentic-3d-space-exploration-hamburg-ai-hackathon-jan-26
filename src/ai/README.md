# AI Services - OpenAI Integration

## Overview
The AI Services module provides text generation capabilities using OpenAI GPT models.

## Files
```
src/ai/
└── OpenAIService.js          # OpenAI text generation
```

## Usage

### OpenAIService
```javascript
import OpenAIService from './src/ai/OpenAIService.js';

const openAI = new OpenAIService(apiKey);
const description = await openAI.generatePlanetDescription(planetData);
```

## Configuration

All AI configuration is centralized in `/src/config/config.js`. Services read their defaults (model, etc.) from there.

## API Key Setup

Add keys to `.env`:
```env
VITE_OPENAI_API_KEY=sk-proj-...
```

## Security Notes

- Never commit API keys to version control
- `.env` is in `.gitignore`
- For production, use a backend proxy instead of `dangerouslyAllowBrowser: true`
