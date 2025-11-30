import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * Button - Reusable button component with multiple variants
 * @param {string} title - Button text
 * @param {function} onPress - Press handler
 * @param {string} variant - Button style variant ('primary' | 'secondary' | 'outline')
 * @param {boolean} disabled - Disable button state
 */
const Button = ({ title, onPress, variant = 'primary', disabled = false }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButton;
      case 'outline':
        return styles.outlineButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'outline':
        return styles.outlineText;
      default:
        return styles.buttonText;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[getTextStyle(), disabled && styles.disabledText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#6c5ce7',
  },
  secondaryButton: {
    backgroundColor: '#2d2d44',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#6c5ce7',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  outlineText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6c5ce7',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#a0a0a0',
  },
});

export default Button;
