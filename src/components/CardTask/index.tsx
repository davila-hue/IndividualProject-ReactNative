import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';

interface CardTaskProps {
  title: string;
  image: any;
}

export const CardTask: React.FC<CardTaskProps> = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

