/**
 * Prompt Templates for Meditation Music Generation
 * Pre-defined templates for various meditation and relaxation music styles
 */

/**
 * Mood-based prompt templates
 */
export const MOOD_TEMPLATES = {
  calm: {
    name: 'Calm',
    description: 'Peaceful and serene atmosphere',
    prompt: 'Gentle, peaceful ambient music with soft pads and minimal melody, creating a calm and serene atmosphere for deep relaxation',
    icon: '🌊',
  },
  focus: {
    name: 'Focus',
    description: 'Enhanced concentration and clarity',
    prompt: 'Minimal ambient electronic music with subtle rhythmic elements and binaural undertones, designed to enhance focus and mental clarity',
    icon: '🎯',
  },
  sleep: {
    name: 'Sleep',
    description: 'Deep relaxation for restful sleep',
    prompt: 'Ultra-soft ambient soundscape with gentle drones and nature sounds, very slow tempo, designed to induce deep sleep and relaxation',
    icon: '🌙',
  },
  energy: {
    name: 'Energy',
    description: 'Uplifting and revitalizing',
    prompt: 'Uplifting ambient music with subtle melodic elements and positive undertones, gradually building energy while maintaining meditative qualities',
    icon: '⚡',
  },
  healing: {
    name: 'Healing',
    description: 'Restorative and therapeutic',
    prompt: 'Therapeutic ambient soundscape with singing bowls, soft chimes, and harmonic overtones, designed for emotional and physical healing',
    icon: '💚',
  },
  gratitude: {
    name: 'Gratitude',
    description: 'Warmth and appreciation',
    prompt: 'Warm, heartfelt ambient music with gentle piano and soft strings, evoking feelings of gratitude and contentment',
    icon: '🙏',
  },
};

/**
 * Nature-based prompt templates
 */
export const NATURE_TEMPLATES = {
  ocean: {
    name: 'Ocean Waves',
    description: 'Rhythmic ocean sounds',
    prompt: 'Ambient music infused with gentle ocean waves and distant seagulls, creating a coastal meditation atmosphere',
    icon: '🌊',
  },
  forest: {
    name: 'Forest',
    description: 'Woodland serenity',
    prompt: 'Peaceful ambient soundscape with soft forest sounds, gentle birdsong, and rustling leaves, evoking a walk through ancient woods',
    icon: '🌲',
  },
  rain: {
    name: 'Rain',
    description: 'Calming rainfall',
    prompt: 'Soothing ambient music with gentle rain sounds and distant thunder, perfect for relaxation and focus',
    icon: '🌧️',
  },
  mountain: {
    name: 'Mountain',
    description: 'Majestic heights',
    prompt: 'Expansive ambient soundscape with wind sounds and crystalline tones, evoking the peaceful majesty of mountain peaks',
    icon: '🏔️',
  },
  garden: {
    name: 'Garden',
    description: 'Peaceful garden setting',
    prompt: 'Light ambient music with gentle wind chimes, soft birdsong, and flowing water, like a peaceful Zen garden',
    icon: '🌸',
  },
};

/**
 * Meditation style templates
 */
export const STYLE_TEMPLATES = {
  ambient: {
    name: 'Ambient',
    description: 'Atmospheric and ethereal',
    prompt: 'Pure ambient music with evolving pads and atmospheric textures',
    icon: '🎵',
  },
  binaural: {
    name: 'Binaural',
    description: 'Brain-wave entrainment',
    prompt: 'Ambient music with subtle binaural beats for meditation and brain-wave entrainment',
    icon: '🧠',
  },
  drone: {
    name: 'Drone',
    description: 'Sustained harmonic tones',
    prompt: 'Deep drone ambient with sustained harmonic tones and subtle overtones',
    icon: '🔊',
  },
  tibetan: {
    name: 'Tibetan',
    description: 'Traditional instruments',
    prompt: 'Meditative music featuring Tibetan singing bowls, bells, and traditional instruments',
    icon: '🔔',
  },
  piano: {
    name: 'Piano',
    description: 'Gentle piano melodies',
    prompt: 'Minimalist piano music with gentle, contemplative melodies and soft reverb',
    icon: '🎹',
  },
  electronic: {
    name: 'Electronic',
    description: 'Modern ambient sounds',
    prompt: 'Modern ambient electronic music with synthesizers and atmospheric textures',
    icon: '🎧',
  },
};

/**
 * Duration presets
 */
export const DURATION_PRESETS = {
  short: { value: 60, label: '1 min', description: 'Quick reset' },
  medium: { value: 300, label: '5 min', description: 'Brief session' },
  standard: { value: 600, label: '10 min', description: 'Standard session' },
  extended: { value: 1200, label: '20 min', description: 'Deep practice' },
  long: { value: 1800, label: '30 min', description: 'Extended session' },
  sleep: { value: 3600, label: '60 min', description: 'Sleep session' },
};

/**
 * Build a complete prompt from template selections
 * @param {Object} options - Selected options
 * @param {string} options.mood - Selected mood key
 * @param {string} options.nature - Selected nature key
 * @param {string} options.style - Selected style key
 * @param {string} options.customText - Custom additions
 * @returns {string} Complete prompt for music generation
 */
export const buildPrompt = ({ mood, nature, style, customText }) => {
  const parts = [];

  if (mood && MOOD_TEMPLATES[mood]) {
    parts.push(MOOD_TEMPLATES[mood].prompt);
  }

  if (nature && NATURE_TEMPLATES[nature]) {
    parts.push(NATURE_TEMPLATES[nature].prompt);
  }

  if (style && STYLE_TEMPLATES[style]) {
    parts.push(STYLE_TEMPLATES[style].prompt);
  }

  if (customText) {
    parts.push(customText);
  }

  // If no selections, return a default prompt
  if (parts.length === 0) {
    return 'Peaceful ambient meditation music for relaxation and mindfulness';
  }

  return parts.join('. ') + '. Instrumental only, no vocals.';
};

/**
 * Get all template categories
 * @returns {Object} All template categories
 */
export const getAllTemplates = () => ({
  moods: MOOD_TEMPLATES,
  nature: NATURE_TEMPLATES,
  styles: STYLE_TEMPLATES,
  durations: DURATION_PRESETS,
});

export default {
  MOOD_TEMPLATES,
  NATURE_TEMPLATES,
  STYLE_TEMPLATES,
  DURATION_PRESETS,
  buildPrompt,
  getAllTemplates,
};
