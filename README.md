# MediBeats

AI-Powered Meditation Music App built with React Native

## 📁 Project Structure

```
src/
├── screens/                 # Screen components
│   ├── OnboardingScreen.js  # Introduction and setup screen
│   ├── HomeScreen.js        # Main dashboard
│   ├── CreatorScreen.js     # AI music generation interface
│   ├── PlayerScreen.js      # Audio player interface
│   ├── LibraryScreen.js     # User's music collection
│   └── index.js             # Screen exports
│
├── components/              # Reusable components
│   ├── UI/                  # UI components
│   │   ├── Button.js        # Customizable button
│   │   ├── Card.js          # Content card
│   │   ├── Input.js         # Text input
│   │   ├── Slider.js        # Value slider
│   │   └── index.js         # UI exports
│   │
│   ├── audio/               # Audio components
│   │   ├── AudioPlayer.js   # Full audio player
│   │   ├── AudioWaveform.js # Waveform visualization
│   │   ├── MiniPlayer.js    # Compact player
│   │   └── index.js         # Audio exports
│   │
│   └── index.js             # All component exports
│
├── services/                # API services
│   ├── SunoAPI.js           # Suno AI music generation API
│   └── index.js             # Service exports
│
├── utils/                   # Utility functions
│   ├── promptTemplates.js   # Music generation prompts
│   └── index.js             # Utility exports
│
├── assets/                  # Static assets
│   ├── icons/               # Icon assets
│   │   └── index.js         # Icon registry
│   │
│   ├── themes/              # Theme configurations
│   │   ├── dark.js          # Dark theme (default)
│   │   ├── light.js         # Light theme
│   │   └── index.js         # Theme exports
│   │
│   └── index.js             # Asset exports
│
├── App.js                   # Main app component
└── index.js                 # Entry point exports
```

## 🚀 Features

- **Onboarding**: Guided introduction for new users
- **Home Dashboard**: Quick access to featured content and actions
- **AI Music Creator**: Generate custom meditation music using Suno API
- **Audio Player**: Full-featured playback with progress and controls
- **Library**: Organize favorites, downloads, and creations

## 🎨 Themes

MediBeats includes both dark and light themes:
- **Dark Theme**: Default, optimized for nighttime meditation
- **Light Theme**: Alternative for daytime use

## 🎵 Prompt Templates

Pre-built templates for meditation music:
- **Moods**: Calm, Focus, Sleep, Energy, Healing, Gratitude
- **Nature**: Ocean, Forest, Rain, Mountain, Garden
- **Styles**: Ambient, Binaural, Drone, Tibetan, Piano, Electronic

## 📦 Installation

```bash
# Install dependencies
npm install

# Run on iOS
npx react-native run-ios

# Run on Android
npx react-native run-android
```

## 🔧 Configuration

Set your Suno API key:

```javascript
import { sunoAPI } from './src/services';

sunoAPI.setApiKey('your-api-key');
```

## 📄 License

MIT License