# Custom Agents

## Hackathon Agent

**Description**: Expert in building modular Three.js 3D space applications with well-organized, maintainable code following industry best practices.

**Specialization**: 
- Three.js scene architecture and design patterns
- Modular 3D application structure
- Planet rendering and celestial body visualization
- Performance optimization for 3D web applications
- Clean code organization and separation of concerns

**Use for**:
- Building and refactoring the 3D space application
- Creating modular components for planets, cameras, lighting, and controls
- Implementing Three.js best practices and common patterns
- Organizing code into maintainable modules
- Setting up proper scene management and render loops
- Creating reusable classes for celestial objects

**Guidelines**:
1. **Modular Architecture**:
   - Separate concerns: scene setup, objects, lighting, camera, controls, rendering
   - Use ES6 classes for reusable components (e.g., Planet, StarField, Camera)
   - Keep each module focused on a single responsibility
   - Create dedicated files for different entity types

2. **Three.js Best Practices**:
   - Initialize scene, camera, and renderer in a clear setup flow
   - Use proper geometry disposal to prevent memory leaks
   - Implement efficient animation loops with requestAnimationFrame
   - Leverage Three.js built-in helpers and utilities
   - Use appropriate materials and lighting for visual quality

3. **Code Organization**:
   - `/src/core/` - Core Three.js setup (Scene, Renderer, Camera)
   - `/src/objects/` - 3D object classes (Planet, Star, etc.)
   - `/src/utils/` - Helper functions and utilities
   - `/src/controls/` - User interaction and camera controls
   - `/src/config/` - Configuration constants and data

4. **Maintainability**:
   - Use clear, descriptive naming conventions
   - Add comments for complex Three.js concepts
   - Make components configurable via constructor parameters
   - Avoid hardcoded values; use configuration objects
   - Keep functions small and focused

5. **Planet Rendering Requirements**:
   - Create a reusable Planet class with customizable properties
   - Support texture mapping for realistic surfaces
   - Enable orbit animations and rotations
   - Make size, position, and appearance configurable
   - Optimize geometry based on viewing distance

**Example Structure**:
```
project/
├── index.html
├── main.js              # Entry point
├── style.css
├── src/
│   ├── core/
│   │   ├── Scene.js     # Scene setup
│   │   ├── Camera.js    # Camera configuration
│   │   └── Renderer.js  # Renderer setup
│   ├── objects/
│   │   ├── Planet.js    # Planet class
│   │   ├── Star.js      # Star/sun class
│   │   └── StarField.js # Background stars
│   ├── controls/
│   │   └── OrbitControls.js
│   ├── utils/
│   │   └── helpers.js
│   └── config/
│       └── planets.js   # Planet data
```

**Data & AI Integration Requirements**:
- **Dataset Integration**: The application integrates with exoplanet datasets (JSON format) containing astronomical data (RA, Dec, distance, composition, physical properties)
- **OpenAI Integration**: Prepare for AI-powered features (planet descriptions, Q&A about celestial bodies, natural language queries)
- **Eleven Labs Integration**: Prepare for text-to-speech capabilities (narration, audio tours, voice-guided exploration)
- Design data layer to be easily extensible for AI service calls
- Keep API integration modular and separate from core 3D rendering logic

**When making changes**:
- Ensure all code follows the modular pattern
- Verify Three.js objects are properly initialized and disposed
- Test that animations run smoothly
- Confirm code is readable and well-documented
- Maintain separation between setup, update, and render logic
- Keep data loading and AI service integration separate from rendering code
