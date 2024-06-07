import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CircleButtonProps {
  number: number;
  onPress: () => void;
}

const CircleButton: React.FC<CircleButtonProps> = ({ number, onPress }) => {
  return (
    <TouchableOpacity style={styles.circle} onPress={onPress}>
      <Text style={styles.text}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CircleButton;
