/**
 * Dark Theme - Default theme for MediBeats
 * Optimized for nighttime use and reduced eye strain
 */

const darkTheme = {
  name: 'dark',
  
  // Core colors
  colors: {
    // Primary brand colors
    primary: '#6c5ce7',
    primaryLight: '#a29bfe',
    primaryDark: '#5641d1',
    
    // Secondary colors
    secondary: '#00cec9',
    secondaryLight: '#81ecec',
    secondaryDark: '#00b894',
    
    // Accent colors
    accent: '#fd79a8',
    accentLight: '#fdcce5',
    accentDark: '#e84393',
    
    // Background colors
    background: '#1a1a2e',
    backgroundSecondary: '#16213e',
    backgroundTertiary: '#0f3460',
    
    // Surface colors
    surface: '#2d2d44',
    surfaceLight: '#3d3d54',
    surfaceDark: '#1d1d34',
    
    // Text colors
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    textMuted: '#666666',
    textInverse: '#1a1a2e',
    
    // Status colors
    success: '#00b894',
    warning: '#fdcb6e',
    error: '#d63031',
    info: '#74b9ff',
    
    // Border colors
    border: '#3d3d54',
    borderLight: '#4d4d64',
    
    // Overlay
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  
  // Spacing scale
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  // Typography
  typography: {
    fontFamily: {
      regular: 'System',
      medium: 'System',
      bold: 'System',
    },
    fontSize: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
      xxl: 24,
      xxxl: 32,
      display: 48,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      loose: 1.8,
    },
  },
  
  // Border radius
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    round: 999,
  },
  
  // Shadows
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};

export default darkTheme;
