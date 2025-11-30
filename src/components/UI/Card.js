import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

/**
 * Card - Reusable card component for displaying content
 * @param {string} title - Card title
 * @param {string} subtitle - Card subtitle
 * @param {string} imageUri - Optional image URI
 * @param {function} onPress - Optional press handler
 * @param {ReactNode} children - Optional children content
 */
const Card = ({ title, subtitle, imageUri, onPress, children }) => {
  const CardWrapper = onPress ? TouchableOpacity : View;

  return (
    <CardWrapper style={styles.container} onPress={onPress}>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
      {!imageUri && <View style={styles.imagePlaceholder} />}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        {subtitle && (
          <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>
        )}
        {children}
      </View>
    </CardWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d2d44',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  imagePlaceholder: {
    width: '100%',
    height: 160,
    backgroundColor: '#3d3d54',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#a0a0a0',
  },
});

export default Card;
