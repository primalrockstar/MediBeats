/**
 * Light Theme - Alternative theme for MediBeats
 * Optimized for daytime use
 */

const lightTheme = {
  name: 'light',
  
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
    background: '#f5f6fa',
    backgroundSecondary: '#ffffff',
    backgroundTertiary: '#ebebf0',
    
    // Surface colors
    surface: '#ffffff',
    surfaceLight: '#f8f9fa',
    surfaceDark: '#e9ecef',
    
    // Text colors
    text: '#2d3436',
    textSecondary: '#636e72',
    textMuted: '#b2bec3',
    textInverse: '#ffffff',
    
    // Status colors
    success: '#00b894',
    warning: '#fdcb6e',
    error: '#d63031',
    info: '#0984e3',
    
    // Border colors
    border: '#dfe6e9',
    borderLight: '#f1f2f6',
    
    // Overlay
    overlay: 'rgba(0, 0, 0, 0.3)',
  },
  
  // Spacing scale (same as dark theme)
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  // Typography (same as dark theme)
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
  
  // Border radius (same as dark theme)
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
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};

export default lightTheme;
