import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * Slider - Custom slider component for value selection
 * @param {string} label - Slider label
 * @param {number} value - Current value
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {number} step - Step increment
 * @param {function} onValueChange - Value change handler
 * @param {string} unit - Unit label (e.g., 'min', '%')
 */
const Slider = ({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  unit = '',
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  const handleDecrease = () => {
    const newValue = Math.max(min, value - step);
    onValueChange && onValueChange(newValue);
  };

  const handleIncrease = () => {
    const newValue = Math.min(max, value + step);
    onValueChange && onValueChange(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>
          {value}{unit}
        </Text>
      </View>
      <View style={styles.sliderContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${percentage}%` }]} />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  value: {
    fontSize: 16,
    color: '#6c5ce7',
    fontWeight: '600',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2d2d44',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  track: {
    flex: 1,
    height: 6,
    backgroundColor: '#2d2d44',
    borderRadius: 3,
    marginHorizontal: 12,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: '#6c5ce7',
    borderRadius: 3,
  },
});

export default Slider;
